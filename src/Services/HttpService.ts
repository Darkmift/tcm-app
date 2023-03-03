import axios, {AxiosResponse} from 'axios'
import LocalStorageService from './LocalStorageService'
import {Role} from '../types'
import store from '../store'
import {logout} from '../store/user.slice'

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN
console.log("🚀 ~ file: HttpService.ts:8 ~ DOMAIN:", DOMAIN)
const BASE_URL = `${DOMAIN}/api/`

const axiosInstance = axios.create({
  baseURL: BASE_URL,
})

const TOKEN_LS_KEY = 'token'
const ROLE_LS_KEY = 'role'

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
      store.dispatch(logout())
    }
    return Promise.reject(error)
  }
)

type AuthUser = {
  email: string
  password: string
}

const HttpService = {
  async login({email, password}: AuthUser): Promise<Role | null> {
    try {
      const result: AxiosResponse<any, any> = await axiosInstance.post(
        '/auth/login',
        {
          email,
          password,
        }
      )

      if (!result?.data) {
        throw new Error('no data!')
      }

      const {token, role} = result.data

      if (token && role) {
        LocalStorageService.set(TOKEN_LS_KEY, token)
        LocalStorageService.set(ROLE_LS_KEY, role)
      } else {
        throw new Error('Login failed')
      }

      if (role !== 'User' && role !== 'Admin') {
        throw new Error('Role provided not recognized', role)
      }

      return role
    } catch (error) {
      console.error('🚀 ~ file: HttpService.ts:17 ~ login ~ error', error)
      return null
    }
  }
}

export default HttpService
