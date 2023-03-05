import React from 'react'
import {Member} from './Member.type'
export * from './Member.type'
export * from './Project.type'
export * from './Internships.type'
export * from './Instructors.type'
export * from './ProjectMemberRelations.type'
export * from './WinnerProjectType.type'

export type Role = 'User' | 'Admin'
export type LinkConfig = {name: string; pathTo: string}
export type GenericObject = {[key: string]: any}
export type StyleObject = GenericObject
export type StyleXsObject = {[key: string]: string | number | StyleXsObject}
export type MuiComponent = (props: any) => JSX.Element
export type GenericComponent = (props: any) => any

export type FormData = {
  Component: typeof React.Component | MuiComponent | GenericComponent
  name: string
  extraProps?: {[key: string]: any}
  type?: 'text' | 'number' | 'password'
  items?: any
  placeholder?: string
  isDropdown?: boolean
}

export type JSONValue =
  | string
  | number
  | boolean
  | {[x: string]: JSONValue}
  | Array<JSONValue>

export type MediaCarousselItem = {
  image: string
  heading: string
  desc: string
}

export type Year = {
  id?: string
  year: number
  is_enabled: boolean
  collectionId?: string
  collectionName?: string
  created?: string
  expand: any
  updated: string
}




