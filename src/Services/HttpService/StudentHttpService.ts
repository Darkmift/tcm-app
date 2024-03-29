import {
  AuthUser,
  Project,
  RegisterResultStudent,
  Role,
  UserFromCsv,
} from '../../types'
import {axiosInstance} from '.'
import LocalStorageService from '../LocalStorageService'
import {ROLE_LS_KEY, TOKEN_LS_KEY, USERNAME_LS_KEY} from '@/const'
import axios, {AxiosError, AxiosResponse} from 'axios'

const StudentHttpService = {
  async loginStudent({
    username: Uname,
    password,
  }: AuthUser): Promise<{username: string; role: Role; id: string} | null> {
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

      const {token, role, username, id} = result.data

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

      return {role, username, id}
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
  async registerStudent(
    user: UserFromCsv
  ): Promise<RegisterResultStudent | null> {
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
    } catch (err: unknown | AxiosError) {
      console.error('🚀 ~ file: HttpService.ts:17 ~ register ~ error', err)
      if (axios.isAxiosError(err)) {
        return {
          username: err.response?.data?.payload?.username,
          password: '',
          error: err.response?.data?.error,
        }
      }
      return {
        username: '',
        password: '',
        error: (err as any)?.message,
      }
    }
  },
  async updateStudentProject(project: Project): Promise<Project> {
    try {
      const response = await axiosInstance.post(
        `/student-project-edit?id=${project.id}`,
        {project}
      )
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },
  async updateStudentImage({
    title,
    collection,
    file,
    studentUsername,
    studentProject,
  }: {
    title: string
    collection: string
    file: File
    studentUsername?: string
    studentProject: Project
  }): Promise<File> {
    const formData = new FormData()
    formData.append('title', title)
    formData.append('collection', collection)
    formData.append('imageFile', file)
    formData.append('studentProject', JSON.stringify(studentProject))

    const response = await axiosInstance.put(
      `student-update-image?id=${studentUsername}&studentUsername=${studentUsername}`,
      formData,
      {
        headers: {'Content-Type': 'multipart/form-data'},
      }
    )
    return response.data
  },
  async getAllStudents() {
    const response = await axiosInstance.get(`/students`)
    return response.data
  },
}

export default StudentHttpService
