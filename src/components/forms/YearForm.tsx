import React, {useState} from 'react'
import {Formik, Form, Field} from 'formik'
import {
  Container,
  FormControl,
  Button,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Switch,
} from '@mui/material'
import * as Yup from 'yup'
import {Member, Project} from '@/types'
import {useAppDispatch, useAppSelector} from '@/store'
import SelectMultipleMUI2 from './UI/SelectMultipleMUI2'
import HttpService from '@/Services/HttpService'
import {addYearThunk} from '@/store/year.slice'

const validationSchema = Yup.object({
  year: Yup.number()
    .min(2000, 'Year is too early')
    .max(2100, 'year is too late')
    .required('Year is required'),
  is_enabled: Yup.boolean().required('is_enabled is required'),
})

type FormSchema = Yup.InferType<typeof validationSchema>
type KeysInForm = keyof FormSchema
type YearFormData = {year: number; is_enabled: boolean}

const initialValues: YearFormData = {
  year: 0,
  is_enabled: false,
}

const simpleFields = ['year', 'is_enabled']

const validate = (values: any) => {
  // for some fucking reason I need this to properly submit
  return {}
}

type Props = {}

function YearForm({}: Props) {
  const dispatch = useAppDispatch()
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (values: YearFormData) => {
    try {
      dispatch(addYearThunk(values))
        .unwrap()
        .then((data) => {
          console.log('🚀 ~ file: YearForm.tsx:55 ~ .then ~ data:', data)
          setErrorMsg('')
        })
        .catch((err: any) => {
          console.log('🚀 ~ file: YearForm.tsx:56 ~ handleSubmit ~ err:', err)
          setErrorMsg(err.error || err.message)
        })
      console.log('🚀 ~ file: YearForm.tsx:50 ~ handleSubmit ~ values:', values)
    } catch (error: any) {
      console.log('🚀 ~ file: YearForm.tsx:60 ~ handleSubmit ~ error:', error)
      setErrorMsg(error.message)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validate={validate}
    >
      {({errors, touched, setFieldValue}) => (
        <Form>
          {/* text fields */}

          <Field name="year">
            {({field}: {field: any}) => (
              <FormControl
                fullWidth
                margin="normal"
                error={touched.year && Boolean(errors.year)}
              >
                <TextField
                  sx={{py: 1}}
                  fullWidth
                  variant="standard"
                  id={field.name}
                  name={field.name}
                  label={'YEAR'}
                  type="number"
                  onChange={field.onChange}
                  value={field.value}
                  error={touched.year && Boolean(errors.year)}
                  helperText={touched.year && errors.year}
                />
              </FormControl>
            )}
          </Field>

          <Field name="is_enabled">
            {({field}: {field: any}) => (
              <FormControlLabel
                control={
                  <Switch
                    checked={field.value}
                    onChange={() => setFieldValue('is_enabled', !field.value)}
                    name={field.name}
                  />
                }
                label={field.name}
              />
            )}
          </Field>

          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
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

export default YearForm
