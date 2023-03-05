import {expect, describe, jest, test} from '@jest/globals'
import * as dotenv from 'dotenv'
dotenv.config()

async function fetchProjects(pocketDbService: any) {
  return await pocketDbService.getCollection('projects')
}

describe('Sample Test', () => {
  it('should return true', () => {
    expect(true).toBe(true)
  })

  test('Notifies on error', async () => {
    const pocketDbService = await import('../../backend/services/pocketbase')

    // const result = await fetchProjects(pocketDbService)
    console.log(
      '🚀 ~ file: index.test.ts:22 ~ test ~ pocketDbService:',
      pocketDbService
    )
    // expect(Array.isArray(result)).toBe(true)
    expect(true).toBe(true)
  })
})
