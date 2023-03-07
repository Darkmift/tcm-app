import {LinkConfig} from './types'

export const VALID_YEAR_REGEX = /^(200[0-9]|20[1-9][0-9]|2100)$/
export const VALID_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const IMAGE_ASSETS_FOLDER_PATH = '/assets/images'

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

export const TOKEN_LS_KEY = 'token'
export const ROLE_LS_KEY = 'role'
export const USERNAME_LS_KEY = 'name'
export const SLIDER_DATA = [
  {
    image: 'https://www.youtube.com/embed/Ax6cnEVp_bY',
    heading: 'Slide One',
    desc: 'This is the description of slide one Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.',
  },
  {
    image: 'https://www.youtube.com/embed/ygX9FeYLnKE',
    heading: 'Slide Two',
    desc: 'This is the description of slide two Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.',
  },
  {
    image: 'https://www.youtube.com/embed/IwK6sYaCHPQ',
    heading: 'Slide Three',
    desc: 'This is the description of slide three Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.',
  },
]

export const COLLECTIONS = {
  WINNER_PROJECT_TYPES: 'winner_project_types',
  YEARS_AUTH: 'years_auth',
  AUTH: 'auth',
  MEMBERS: 'members',
  PROJECTS: 'projects',
  INSTRUCTORS: 'instructors',
  INTERNSHIPS: 'internships',
  PROJECT_MEMBER_RELATION: 'project_member_relation',
  INTERNSHIP_INSTRUCTOR_RELATION: 'internship_instructor_relation',
}
