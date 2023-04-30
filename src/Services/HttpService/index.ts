import axios, {AxiosResponse} from 'axios'
import LocalStorageService from '../LocalStorageService'
import {AuthUser, Role} from '../../types'
import store from '../../store'
import {logout as logoutAction} from '../../store/user.slice'
import {ROLE_LS_KEY, TOKEN_LS_KEY, USERNAME_LS_KEY} from '@/const'
import StitchProjectsAndMembers from '../../../utilities/StitchProjectsAndMembers'
import MemberHttpService from './MemberHttpService'
import YearHttpService from './YearHttpService'
import InternShipsHttpService from './InternShipsHttpService'
import InstructorsHttpService from './InstructorsHttpService'
import ProjectHttpService from './ProjectHttpService'
import ProjectMemberRelationHttpService from './ProjectMemberRelationHttpService'
import WinnerProjectTypeHttpService from './WinnerProjectTypeHttpService'
import ImageHttpService from './ImageHttpService'
import StudentHttpService from './StudentHttpService'
import MediaHttpService from './MediaHttpService'
import WinnerProjectsHttpService from './WinnerProjectHttpService'

// const DOMAIN = ''
// // const DOMAIN = ''process.env.NEXT_PUBLIC_DOMAIN
// const BASE_URL = `${DOMAIN}/api/`
const BASE_URL = `/api/`

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
      throw error
    }
  },
  async logout() {
    try {
      LocalStorageService.delete(TOKEN_LS_KEY)
      LocalStorageService.delete(ROLE_LS_KEY)
      LocalStorageService.delete(USERNAME_LS_KEY)
      const result = await axios.post('/api/admin/logout')
      return true
    } catch (ex) {
      console.error('Failed to logout', ex)
      throw ex
    }
  },
  ...InternShipsHttpService,
  ...YearHttpService,
  ...MemberHttpService,
  ...InstructorsHttpService,
  ...ProjectHttpService,
  ...ProjectMemberRelationHttpService,
  ...WinnerProjectTypeHttpService,
  ...ImageHttpService,
  ...StudentHttpService,
  ...MediaHttpService,
  ...WinnerProjectsHttpService,
}

export default HttpService
