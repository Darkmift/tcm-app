import ProtectedRoute from '@/components/RouteGuardAdmin'
import {Role} from '@/types'
import React from 'react'

const withProtectedRoute = (
  Component: React.ComponentType<any>,
  requiredRole: Role
) => {
  const WrappedComponent = () => {
    return (
      <ProtectedRoute requiredRole={requiredRole}>
        <Component />
      </ProtectedRoute>
    )
  }

  WrappedComponent.displayName = `withProtectedRoute(${
    Component.displayName || Component.name || 'Component'
  })`

  return WrappedComponent
}

export default withProtectedRoute
