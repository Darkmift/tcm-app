import {LinkConfig} from './types'

export const PAGES_LINKS: LinkConfig[] = [
  {name: 'Home', pathTo: '/'},
  {name: 'Instructors', pathTo: '/year/2023/instructors'},
  {name: 'Winning Projects', pathTo: '/year/2023/winningProjects'},
]
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
export const INTERNSHIP_LINKS: LinkConfig[] = [
  {name: 'Internships A', pathTo: '/year/2023/internships/A'},
  {name: 'Internships B', pathTo: '/year/2023/internships/B'},
  {name: 'Internships C', pathTo: '/year/2023/internships/C'},
  {name: 'Internships D', pathTo: '/year/2023/internships/D'},
]
