import React, {ReactElement} from 'react'
import {Member} from './Member.type'
export * from './Member.type'
export * from './Project.type'
export * from './Internships.type'
export * from './Instructors.type'
export * from './ProjectMemberRelations.type'
export * from './WinnerProjectType.type'

export type AuthUser = {
  username: string
  password: string
  id?: string
}

export type RegisterResult = {
  id: string | undefined
  username: string | undefined
  password: string | undefined
  created: boolean
}[]

export type Role = 'User' | 'Admin'
export type LinkConfig = {
  id?: string
  name: string
  pathTo: string
  role?: Role
}
export type GenericObject = {[key: string]: any}
export type StyleObject = GenericObject
export type StyleXsObject = {[key: string]: string | number | StyleXsObject}
export type MuiComponent = (props: any) => JSX.Element
export type GenericComponent = (
  props: any
) => any | Element | ReactElement<any, any> | MuiComponent
export type Payload = {payload?: any}
// export type FunctionWithOptionalPayload = (payload?: Payload) => void
export type FunctionWithOptionalPayload<P = unknown, T = unknown> = (
  payload?: P,
  evt?: T
) => void
export type NavBarClick = React.MouseEvent<
  HTMLButtonElement | HTMLButtonElement
>

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
  expand?: any
  updated?: string
}

export type Media = {
  id: string
  url: string
  heading: string
  desc: string
  created: Date
  updated: Date
}

export type NewMedia = Omit<Media, 'id' | 'created' | 'updated'>
