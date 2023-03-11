import GoBackBtn from '@/components/GoBackBtn'
import {Card, Container, Typography} from '@mui/material'
import React from 'react'

type Props = {}

function InternshipForm({}: Props) {
  return (
    <Container sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <GoBackBtn />
      <Card raised sx={{p: 4}}>
        <Typography variant="h4">Add Internship Form</Typography>
      </Card>
      <Card raised sx={{p: 4}}>
        <Typography variant="h4">Edit Internship Form</Typography>
      </Card>
    </Container>
  )
}

export default InternshipForm
