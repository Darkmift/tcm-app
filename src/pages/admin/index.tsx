import withProtectedRoute from '@/highOrderComponents/withProtectedRoute'
import React from 'react'

function index() {
  return <h1>Admin index</h1>
}

export default withProtectedRoute(index, 'Admin')
