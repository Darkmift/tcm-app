import {AuthUser, Instructor, Role} from '../../types'
import {axiosInstance} from '.'
import LocalStorageService from '../LocalStorageService'
import {ROLE_LS_KEY, TOKEN_LS_KEY, USERNAME_LS_KEY} from '@/const'
import {AxiosResponse} from 'axios'

const StudentHttpService = {
  async loginStudent({
    username: Uname,
    password,
  }: AuthUser): Promise<{username: string; role: Role} | null> {
    try {
      const result: AxiosResponse<any, any> = await axiosInstance.post(
        '/login-student',
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
  async logoutStudent() {
    try {
      await axiosInstance.post('/api/admin/logout')
      LocalStorageService.delete(TOKEN_LS_KEY)
      LocalStorageService.delete(ROLE_LS_KEY)
      LocalStorageService.delete(USERNAME_LS_KEY)
    } catch (ex) {
      console.error('Failed to logout', ex)
      throw ex
    }
  },
  async registerStudent(user: AuthUser): Promise<AuthUser | null> {
    try {
      const result: AxiosResponse<any, any> = await axiosInstance.post(
        '/admin/register-student',
        user
      )

      if (!result?.data) {
        throw new Error('registration failed')
      }

      const {newUser} = result.data

      return newUser
    } catch (error) {
      console.error('🚀 ~ file: HttpService.ts:17 ~ register ~ error', error)
      return null
    }
  },
}

export default StudentHttpService
