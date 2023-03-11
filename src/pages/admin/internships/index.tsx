import GoBackBtn from '@/components/GoBackBtn'
import {Container, Typography} from '@mui/material'
import React from 'react'

type Props = {}

function InternshipForm({}: Props) {
  return (
    <Container>
      <GoBackBtn />
      <Typography>Add Internship Form</Typography>
      <Typography>Edit Internship Form</Typography>
    </Container>
  )
}

export default InternshipForm
