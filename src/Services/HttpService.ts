import axios, {AxiosResponse} from 'axios'
import LocalStorageService from './LocalStorageService'
import {InsertInternShip, Internship, Member, Role, Year} from '../types'
import store from '../store'
import {logout as logoutAction} from '../store/thunks/user.thunk'
import {ROLE_LS_KEY, TOKEN_LS_KEY, USERNAME_LS_KEY} from '@/const'
import StitchProjectsAndMembers from '../../utilities/StitchProjectsAndMembers'

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN
console.log('🚀 ~ file: HttpService.ts:8 ~ DOMAIN:', DOMAIN)
const BASE_URL = `${DOMAIN}/api/`
const API_INTERNSHIPS_URL = `/internships`
const API_MEMBERS_URL = `/members`

const axiosInstance = axios.create({
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
  // YEARS
  async getYears(): Promise<Year[]> {
    try {
      const result: AxiosResponse<{years: Year[]}, any> =
        await axiosInstance.get('/years')

      if (!result?.data) {
        throw new Error('no data!')
      }

      console.log(
        '🚀 ~ file: HttpService.ts:118 ~ getYears ~ result.data.years:',
        result.data
      )
      return result.data.years
    } catch (error) {
      console.log('🚀 ~ file: HttpService.ts:115 ~ getYears ~ error:', error)
      return []
    }
  },
  async createYear(year: Year) {
    try {
      const result: AxiosResponse<Year> = await axiosInstance.post(
        '/years',
        year
      )

      if (!result?.data) {
        throw new Error('no data!')
      }

      return result.data
    } catch (error) {
      console.error('Failed to create year', error)
      throw error
    }
  },
  async updateYear(id: string, year: Year) {
    try {
      const result: AxiosResponse<Year> = await axiosInstance.put(
        `/years/${id}`,
        year
      )

      if (!result?.data) {
        throw new Error('no data!')
      }

      return result.data
    } catch (error) {
      console.error(`Failed to update year with id ${id}`, error)
      throw error
    }
  },
  async deleteYear(id: string) {
    try {
      const result: AxiosResponse<Year> = await axiosInstance.delete(
        `/years/${id}`
      )

      if (!result?.data) {
        throw new Error('no data!')
      }

      return result.data
    } catch (error) {
      console.error(`Failed to delete year with id ${id}`, error)
      throw error
    }
  },
  // INTERNSHIPS
  async getAllInternships(): Promise<Internship[]> {
    try {
      const response = await axios.get(API_INTERNSHIPS_URL)
      return response.data.internships
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },

  async createInternship(internship: InsertInternShip): Promise<Internship> {
    try {
      const response = await axios.post(API_INTERNSHIPS_URL, internship)
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },

  async updateInternship(internship: Internship): Promise<Internship> {
    try {
      const response = await axios.put(API_INTERNSHIPS_URL, internship)
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },

  async deleteInternship(id: string): Promise<Internship> {
    try {
      const response = await axios.delete(`${API_INTERNSHIPS_URL}?id=${id}`)
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },

  // MEMBERS
  async getAllMembers(): Promise<Member[]> {
    try {
      const response = await axios.get(API_MEMBERS_URL)
      return response.data.members
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },

  async createMember(member: Member): Promise<Member> {
    try {
      const response = await axios.post(API_MEMBERS_URL, member)
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },

  async updateMember(member: Member): Promise<Member> {
    try {
      const response = await axios.put(API_MEMBERS_URL, member)
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },
  async deleteMember(id: string): Promise<Member> {
    try {
      const response = await axios.delete(`${API_MEMBERS_URL}?id=${id}`)
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },
}

export default HttpService
