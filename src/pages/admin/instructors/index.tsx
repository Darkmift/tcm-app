import GoBackBtn from '@/components/GoBackBtn'
import {Container, Typography} from '@mui/material'
import React from 'react'

type Props = {}

function InstructorsForm({}: Props) {
  return (
    <Container>
      <GoBackBtn />
      <Typography>Add Instructor Form</Typography>
      <Typography>Edit Instructor Form</Typography>
    </Container>
  )
}

export default InstructorsForm
