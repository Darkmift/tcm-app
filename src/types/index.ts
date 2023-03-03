import React from 'react'

export type LinkConfig = {name: string; pathTo: string}
export type StyleObject = {[key: string]: string}
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
