import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'
import {Button, Container, TextField, Typography} from '@mui/material'
import withProtectedRoute from '@/highOrderComponents/withProtectedRoute'
import {InsertOrUpdateProject} from '@/types'

const fieldKeys = [
  'description',
  'image',
  'name',
  'year',
  'members',
  'instructorId',
  'internshipId',
]
const schema = fieldKeys.reduce((acc: any, item) => {
  acc[item] = yup.string().required(`${item} is required`)
  return acc
}, {})
schema.description.min(12, 'at least 12 characters')
schema.members = yup.array()
schema.image = yup.mixed().required('File is required')
const validationSchema = yup.object<InsertOrUpdateProject>(schema)

type FormSchema = yup.InferType<typeof validationSchema>
type KeysInForm = keyof FormSchema
// type FormValues = Record<KeysInForm,string>

function EditProject() {
  const formik = useFormik({
    initialValues: {
      description: '',
      image: '',
      name: '',
      year: '',
      members: [],
      instructorId: '',
      internshipId: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('values', values)
    },
  })

  return (
    <Container component="form" onSubmit={formik.handleSubmit}>
      <Typography sx={{ml: 3, fontWeight: 900, fontSize: 35}} color="primary">
        EDIT PROJECT
      </Typography>
      {Object.keys(schema).map((item) => {
        if (item === 'members') return <span key={item}>members todo</span>
        const keyItem = item as KeysInForm
        return (
          <TextField
            key={item}
            sx={{py: 1}}
            fullWidth
            variant="standard"
            id={item}
            name={item}
            label={item.toUpperCase()}
            type={item === 'image' ? 'file' : 'text'}
            InputLabelProps={{shrink: item === 'image'}}
            value={formik.values[keyItem]}
            onChange={formik.handleChange}
            error={formik.touched[keyItem] && Boolean(formik.errors[keyItem])}
            helperText={formik.touched[keyItem] && formik.errors[keyItem]}
          />
        )
      })}
      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
      </Button>
    </Container>
  )
}

export default withProtectedRoute(EditProject, 'Admin')
