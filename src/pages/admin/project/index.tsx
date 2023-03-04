import FormToJson from '@/components/FormToJson'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import React from 'react'
import {FormData} from '../../../types'
import {TextareaAutosize, Typography} from '@mui/material'
import withProtectedRoute from '@/highOrderComponents/withProtectedRoute'

const formItems: FormData[] = [
  {
    name: 'name',
    placeholder: 'name',
    Component: TextField,
  },
  {
    name: 'description',
    placeholder: 'description',
    extraProps: {
      multiline: true,
      rows: 4,
      variant: 'outlined',
      inputProps: {
        style: {
          padding: 0,
        },
      },
    },
    Component: TextareaAutosize,
  },
]

function index() {
  return (
    <Container>
      <Typography sx={{ml: 3, fontWeight: 900, fontSize: 35}} color="primary">
        ADD PROJECT
      </Typography>

      <FormToJson formData={formItems} submitHandler={(data) => {}} submitBtnText={'Add Project'} />
    </Container>
  )
}

export default withProtectedRoute(index, 'Admin')