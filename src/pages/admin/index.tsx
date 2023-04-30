import withProtectedRoute from '@/highOrderComponents/withProtectedRoute'
import {Button, Container, Typography} from '@mui/material'
import Link from 'next/link'
import React from 'react'

function AdminDashboard() {
  const btnData: {href: string; text: string}[] = [
    {
      href: '/admin/instructors',
      text: 'Instructors',
    },
    {
      href: '/admin/media',
      text: 'Media',
    },
    {
      href: '/admin/internships',
      text: 'Internships',
    },
    {
      href: '/admin/members',
      text: 'Members',
    },
    {
      href: '/admin/years',
      text: 'Years',
    },
    {
      href: '/admin/project',
      text: 'Projects',
    },
    {
      href: '/admin/students/create-users-from-csv',
      text: 'Create users from csv',
    },
    {
      href: '/admin/students/manage-students',
      text: 'Manage Students',
    },
  ]

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

      {btnData.map((data, key) => (
        <Button
          key={key}
          fullWidth
          variant="contained"
          component={Link}
          href={data.href}
        >
          {data.text}
        </Button>
      ))}
    </Container>
  )
}

export default withProtectedRoute(AdminDashboard, 'Admin')
