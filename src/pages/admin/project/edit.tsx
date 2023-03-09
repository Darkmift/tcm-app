import React from 'react'

import {Container, Typography} from '@mui/material'
import withProtectedRoute from '@/highOrderComponents/withProtectedRoute'
import ProjectForm from '@/components/forms/ProjectForm'
function EditProject() {
  return (
    <Container>
      <Typography variant="h4">Edit Project</Typography>
      <ProjectForm />
    </Container>
  )
}

export default withProtectedRoute(EditProject, 'Admin')
