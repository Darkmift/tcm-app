import withProtectedRoute from '@/highOrderComponents/withProtectedRoute'
import {Button, Container, Typography} from '@mui/material'
import Link from 'next/link'
import React from 'react'

function AdminDashboard() {
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
        href="/admin/instructors"
      >
        Instructors
      </Button>
      <Button
        fullWidth
        variant="contained"
        component={Link}
        href="/admin/media"
      >
        Media
      </Button>
      <Button
        fullWidth
        variant="contained"
        component={Link}
        href="/admin/internships"
      >
        Internships
      </Button>
      <Button
        fullWidth
        variant="contained"
        component={Link}
        href="/admin/members"
      >
        Members
      </Button>
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
      <Button
        fullWidth
        variant="contained"
        component={Link}
        href="/admin/students/create-users-from-csv"
      >
        Create users from csv
      </Button>
    </Container>
  )
}

export default withProtectedRoute(AdminDashboard, 'Admin')
