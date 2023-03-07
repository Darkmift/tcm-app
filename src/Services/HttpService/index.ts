import axios, {AxiosResponse} from 'axios'
import LocalStorageService from '../LocalStorageService'
import {Role} from '../../types'
import store from '../../store'
import {logout as logoutAction} from '../../store/thunks/user.thunk'
import {ROLE_LS_KEY, TOKEN_LS_KEY, USERNAME_LS_KEY} from '@/const'
import StitchProjectsAndMembers from '../../../utilities/StitchProjectsAndMembers'
import MemberHttpService from './MemberHttpService'
import YearHttpService from './YearHttpService'
import InternShipsHttpService from './InternShipsHttpService'
import InstructorsHttpService from './InstructorsHttpService'
import ProjectHttpService from './ProjectHttpService'
import ProjectMemberRelationHttpService from './ProjectMemberRelationHttpService'
import WinnerProjectTypeHttpService from './WinnerProjectTypeHttpService'

const DOMAIN = ''
// const DOMAIN = ''process.env.NEXT_PUBLIC_DOMAIN
console.log('🚀 ~ file: HttpService.ts:8 ~ DOMAIN:', DOMAIN)
const BASE_URL = `${DOMAIN}/api/`

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
})

axiosInstance.interceptors.request.use((config) => {
  const token = LocalStorageService.get(TOKEN_LS_KEY)
  if (token) {
    config.headers = config.headers || {}
    ;(config.headers as any)['Authorization'] = `Bearer ${token}`
  }

  return config
})

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log('🚀 ~ file: HttpService.ts:39 ~ error:', error)
    if (error.response.status === 401) {
      // dispatch the logout action
      store.dispatch(logoutAction())
      LocalStorageService.delete(TOKEN_LS_KEY)
      LocalStorageService.delete(ROLE_LS_KEY)
      LocalStorageService.delete(USERNAME_LS_KEY)
    }
    return Promise.reject(error)
  }
)

type AuthUser = {
  username: string
  password: string
}

const HttpService = {
  async login({
    username: Uname,
    password,
  }: AuthUser): Promise<{username: string; role: Role} | null> {
    try {
      const result: AxiosResponse<any, any> = await axiosInstance.post(
        '/admin/login',
        {
          username: Uname,
          password,
        }
      )

      if (!result?.data) {
        throw new Error('no data!')
      }

      const {token, role, username} = result.data

      if (role !== 'User' && role !== 'Admin') {
        throw new Error('Role provided not recognized', role)
      }

      if (!!token && !!username) {
        LocalStorageService.set(TOKEN_LS_KEY, token)
        LocalStorageService.set(ROLE_LS_KEY, role)
        LocalStorageService.set(USERNAME_LS_KEY, username)
      } else {
        throw new Error('Login failed')
      }

      return {role, username}
    } catch (error) {
      console.error('🚀 ~ file: HttpService.ts:17 ~ login ~ error', error)
      return null
    }
  },
  async logout() {
    try {
      await axios.post('/api/admin/logout')
      LocalStorageService.delete(TOKEN_LS_KEY)
      LocalStorageService.delete(ROLE_LS_KEY)
      LocalStorageService.delete(USERNAME_LS_KEY)
    } catch (ex) {
      console.error('Failed to logout', ex)
      throw ex
    }
  },
  async getMetada(year: string | number): Promise<any> {
    try {
      const result: AxiosResponse<any, any> = await axiosInstance.get(
        '/metadata?year=' + year
      )

      if (!result?.data) {
        throw new Error('no data!')
      }
      const {members, projects, projectMemberRelation} = result.data

      const {projects: p, members: m} = StitchProjectsAndMembers({
        projects,
        members,
        relation_object: projectMemberRelation,
      })

      return {...result.data, projects: p, members: m}
    } catch (error) {
      console.error('🚀 ~ file: HttpService.ts:17 ~ login ~ error', error)
      return null
    }
  },

  ...InternShipsHttpService,
  ...YearHttpService,
  ...MemberHttpService,
  ...InstructorsHttpService,
  ...ProjectHttpService,
  ...ProjectMemberRelationHttpService,
  ...WinnerProjectTypeHttpService,
}

export default HttpService
