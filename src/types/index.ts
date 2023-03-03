import React from 'react'

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

export type Member = {
  id: string
  name: string
  email: string
}

export type Project = {
  collectionId: string
  collectionName: string
  created: string
  description: string
  id: string
  image: string
  instructorId: string
  internshipId: string
  legacyId: string
  legacyProjectId: string
  legacyInstructorId: string
  legacyInternshipId: string
  name: string
  updated: string
  year: number
  //might be hydrated
  members?: Member[]
}

export type MediaCarousselItem = {
  image: string
  heading: string
  desc: string
}

export type DbRecordResult = Promise<Array<object>>;
// export type DbRecordResult = Promise<any>;

