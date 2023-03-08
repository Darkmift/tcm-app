import {Member} from '../../types'
import {axiosInstance} from '../HttpService'

const API_MEMBERS_URL = `/members`

const MemberHttpService = {
  // MEMBERS
  async getAllMembers(): Promise<Member[]> {
    try {
      const response = await axiosInstance.get(API_MEMBERS_URL)
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },

  async createMember(member: Member): Promise<Member> {
    try {
      const response = await axiosInstance.post(API_MEMBERS_URL, member)
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },

  async updateMember(member: Member): Promise<Member> {
    try {
      const response = await axiosInstance.put(API_MEMBERS_URL, member)
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },
  async deleteMember(id: string): Promise<Member> {
    try {
      const response = await axiosInstance.delete(`${API_MEMBERS_URL}?id=${id}`)
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  },
}

export default MemberHttpService
