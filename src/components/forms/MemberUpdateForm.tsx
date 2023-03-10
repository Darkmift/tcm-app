import React, {useState} from 'react'
import {Formik, Form, Field} from 'formik'
import {FormControl, Button, TextField, Typography} from '@mui/material'
import * as Yup from 'yup'
import {useAppDispatch} from '@/store'
import {updateMember} from '@/store/member.slice'
import {Member} from '@/types'

interface Props {
  member: Member
}

const validationSchema = Yup.object({
  name: Yup.string().required('Member name is required'),
  email: Yup.string().email().required('Member email is required'),
})

type MemberFormData = {name: string; email: string}

const initialValues: MemberFormData = {
  name: '',
  email: '',
}

// for some fucking reason I need this to properly submit
const validate = (values: any) => ({})

function MemberUpdateForm({member}: Props) {
  const dispatch = useAppDispatch()
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (values: MemberFormData) => {
    try {
      const payload: Member = {
        ...member,
        ...values,
      }
      dispatch(updateMember(payload))
        .unwrap()
        .then((data) => {
          console.log(
            '🚀 ~ file: MemberUpdateForm.tsx:55 ~ .then ~ data:',
            data
          )
          setErrorMsg('')
        })
        .catch((err: any) => {
          console.log(
            '🚀 ~ file: MemberUpdateForm.tsx:56 ~ handleSubmit ~ err:',
            err
          )
          setErrorMsg(err.error || err.message)
        })
      console.log(
        '🚀 ~ file: MemberUpdateForm.tsx:48 ~ handleSubmit ~ values:',
        values
      )
    } catch (error: any) {
      console.log(
        '🚀 ~ file: MemberUpdateForm.tsx:62 ~ handleSubmit ~ error:',
        error
      )
      setErrorMsg(error.message)
    }
  }

  return (
    <Formik
      initialValues={{
        name: member.name,
        email: member.email,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validate={validate}
      enableReinitialize
    >
      {({errors, touched, setFieldValue}) => (
        <Form>
          {/* text fields */}
          <Field name="name">
            {({field}: {field: any}) => (
              <FormControl
                fullWidth
                margin="normal"
                error={touched.name && Boolean(errors.name)}
              >
                <TextField
                  sx={{py: 1}}
                  fullWidth
                  variant="standard"
                  id={field.name}
                  name={field.name}
                  label={'Name'}
                  type="text"
                  onChange={field.onChange}
                  value={field.value}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
              </FormControl>
            )}
          </Field>

          <Field name="email">
            {({field}: {field: any}) => (
              <FormControl
                fullWidth
                margin="normal"
                error={touched.email && Boolean(errors.email)}
              >
                <TextField
                  sx={{py: 1}}
                  fullWidth
                  variant="standard"
                  id={field.name}
                  name={field.name}
                  label={'Email'}
                  type="email"
                  onChange={field.onChange}
                  value={field.value}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </FormControl>
            )}
          </Field>

          <Button color="primary" variant="contained" fullWidth type="submit">
            Update
          </Button>
          {errorMsg && (
            <Typography
              sx={{p: 2, color: 'red'}}
              variant="h6"
              textAlign="center"
            >
              {errorMsg}
            </Typography>
          )}
        </Form>
      )}
    </Formik>
  )
}

export default MemberUpdateForm
