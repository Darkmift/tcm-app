import React, {useEffect} from 'react'
import {useRouter} from 'next/router'
import {RootState, useAppSelector} from '../store'
import {Role} from '../types'

type ProtectedRouteProps = {
  requiredRole: Role
  children: React.ReactNode
}

const ProtectedRoute = ({requiredRole, children}: ProtectedRouteProps) => {
  const router = useRouter()
  const {isLoggedIn, role} = useAppSelector((state: RootState) => state.auth)

  useEffect(() => {
    if (!isLoggedIn) {
      // Handle unauthorized access
      console.log('Unauthorized access!')
      router.push('/admin/login')
    } else if (requiredRole !== role) {
      // Handle insufficient privileges
      console.log('Insufficient privileges!')
      router.push('/')
    }
  }, [isLoggedIn, role, requiredRole, router])

  return <>{children}</>
}

export default ProtectedRoute
