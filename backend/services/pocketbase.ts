/**
 * SEE https://pocketbase.io/docs/api-records/ for docs on query params
 * Node doesn't have native EventSource implementation,
 * so in order to use the realtime subscriptions
 * you'll need to load a EventSource polyfill.
 */
import {GenericObject} from '@/types'
import PocketBase from 'pocketbase'

import eventsource from 'eventsource'
// global.EventSource = eventsource;

const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_HOST)
pb.autoCancellation(false)

const runAuth = async () => {
  await pb.admins.authWithPassword(
    process.env.NEXT_PUBLIC_POCKETBASE_EMAIL as string,
    process.env.NEXT_PUBLIC_POCKETBASE_PW as string
  )
}

const pocketDbService = {
  getCollection: async (collectionName: string, options = {}): Promise<any> => {
    try {
      await runAuth()
      const optionsPayload = {
        // page: 1, perPage: 10,
        ...options,
      }
      // you can also fetch all records at once via getFullList
      return await pb.collection(collectionName).getFullList(optionsPayload)
    } catch (error) {
      console.log('🚀 ~ file: pocketbase.js:18 ~ getCollection ~ error:', {
        collectionName,
        options,
        error,
      })
      return null
    }
  },

  getRecord: async (
    collectionName: string,
    recordId: string,
    options = {}
  ): Promise<any> => {
    try {
      await runAuth()
      const optionsPayload = {...options}
      return await pb
        .collection(collectionName)
        .getOne(recordId, optionsPayload)
    } catch (error) {
      console.log('🚀 ~ file: pocketbase.js:39 ~ getRecord ~ error:', {
        collectionName,
        error,
      })
      return null
    }
  },

  insertRecord: async (
    collectionName: string,
    newRecord: GenericObject
  ): Promise<any> => {
    try {
      await runAuth()
      return await pb.collection(collectionName).create(newRecord)
    } catch (error) {
      console.log('🚀 ~ file: pocketbase.js:51 ~ insertRecord ~ error:', {
        collectionName,
        newRecord,
        error,
      })
      return null
    }
  },

  insertMany: async (
    collectionName: string,
    recordSet: GenericObject[]
  ): Promise<any> => {
    try {
      await runAuth()
      const operations = recordSet.map(async (record) =>
        pb.collection(collectionName).create(record)
      )

      return await Promise.all(operations)
    } catch (error) {
      console.log('🚀 ~ file: pocketbase.js:68 ~ insertMany ~ error:', {
        collectionName,
        error,
      })
      return null
    }
  },

  updateRecord: async (
    collectionName: string,
    updateRecordId: string,
    updatedFields: GenericObject
  ): Promise<any> => {
    try {
      await runAuth()
      return await pb
        .collection(collectionName)
        .update(updateRecordId, updatedFields)
    } catch (error) {
      console.log('🚀 ~ file: pocketbase.js:86 ~ updateRecord ~ error:', {
        collectionName,
        error,
      })
      return null
    }
  },

  deleteRecord: async (
    collectionName: string,
    deleteRecordId: string
  ): Promise<any> => {
    try {
      await runAuth()
      return await pb.collection(collectionName).delete(deleteRecordId)
    } catch (error) {
      console.log('🚀 ~ file: pocketbase.js:99 ~ deleteRecord ~ error:', {
        collectionName,
        deleteRecordId,
        error,
      })
      return null
    }
  },

  findByFilter: async (
    collection: string,
    filter: string,
    findMany?: boolean,
    options?: any
  ): Promise<any> => {
    try {
      await runAuth()
      const result = await pocketDbService.getCollection(collection, {
        filter,
        ...options,
      })
      if (findMany) return result?.length ? result : []
      return result?.[0] ? result[0] : null
    } catch (error) {
      console.log(
        '🚀 ~ file: pocketbase.ts:119 ~ findByFilter: ~ error:',
        error
      )
      return null
    }
  },
}

export default pocketDbService
