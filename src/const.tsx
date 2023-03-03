import {LinkConfig} from './types'

export const PAGES_LINKS: LinkConfig[] = [{name: 'Home', pathTo: '/'}]
export const YEAR_LINKS: LinkConfig[] = [
  {name: '2021', pathTo: '/year/2021'},
  {name: '2022', pathTo: '/year/2022'},
  {name: '2023', pathTo: '/year/2023'},
]
export const AVATAR_LINKS: LinkConfig[] = [
  {name: 'Login', pathTo: '/admin/login'},
  {name: 'Add Project', pathTo: '/admin/project'},
  {name: 'Edit Project', pathTo: '/admin/project/edit'},
]
