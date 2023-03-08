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
  const isLoggedIn = useAppSelector((state: RootState) => state.auth.isLoggedIn)
  const role = useAppSelector((state: RootState) => state.auth.role)
  const authDone = useAppSelector((state: RootState) => state.auth.authDone)

  useEffect(() => {
    if (authDone) {
      if (!isLoggedIn) {
        // Handle unauthorized access
        router.push(requiredRole !== role ? '/' : '/admin/login')
      }
    }
  }, [authDone, isLoggedIn, role, requiredRole, router])

  return <>{isLoggedIn && role === requiredRole ? children : <></>}</>
}

export default ProtectedRoute
