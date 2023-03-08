import React from 'react'

import {Container, Typography} from '@mui/material'
import withProtectedRoute from '@/highOrderComponents/withProtectedRoute'
import ProjectForm from '@/components/forms/ProjectForm'
function EditProject() {
  return (
    <Container>
      <ProjectForm />
    </Container>
  )
}

export default withProtectedRoute(EditProject, 'Admin')
