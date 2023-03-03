import FormToJson from '@/components/FormToJson'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import React from 'react'
import {FormData} from '../../../types'
import {Box, Typography} from '@mui/material'

const formItems: FormData[] = [
  {
    name: 'username',
    placeholder: 'username',
    Component: TextField,
  },
  {
    name: 'password',
    placeholder: 'password',
    type: 'password',
    Component: TextField,
  },
]

function index() {
  return (
    <Container>
      <Typography sx={{ml: 3, fontWeight: 900, fontSize: 35}} color="primary">
        LOGIN
      </Typography>

      <FormToJson formData={formItems} submitHandler={(data) => {}} />
    </Container>
  )
}

export default index
