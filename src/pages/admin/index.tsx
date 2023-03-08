import withProtectedRoute from '@/highOrderComponents/withProtectedRoute'
import {Button, Container, Typography} from '@mui/material'
import Link from 'next/link'
import React from 'react'

function index() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '20px',
      }}
    >
      <Typography variant="h4">Admin Dashboard</Typography>
      <Button
        fullWidth
        variant="contained"
        component={Link}
        href="/admin/years"
      >
        Years
      </Button>
      <Button
        fullWidth
        variant="contained"
        component={Link}
        href="/admin/project"
      >
        Projects
      </Button>
    </Container>
  )
}

export default withProtectedRoute(index, 'Admin')
