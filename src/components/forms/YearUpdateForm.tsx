import React, {useState} from 'react'
import {Formik, Form, Field} from 'formik'
import {
  FormControl,
  Button,
  TextField,
  Typography,
  FormControlLabel,
  Switch,
} from '@mui/material'
import * as Yup from 'yup'
import {useAppDispatch} from '@/store'
import {updateYearThunk} from '@/store/year.slice'
import {Year} from '@/types'

const validationSchema = Yup.object({
  year: Yup.number()
    .min(2000, 'Year is too early')
    .max(2100, 'year is too late')
    .required('Year is required'),
  is_enabled: Yup.boolean().required('is_enabled is required'),
})

type YearFormData = {year: number; is_enabled: boolean; id?: string}

// for some fucking reason I need this to properly submit
const validate = (values: any) => ({})

type Props = {year: Year}

function YearUpdateForm({year}: Props) {
  const initialValues = {
    year: year.year,
    is_enabled: year.is_enabled,
  }

  const dispatch = useAppDispatch()
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (values: YearFormData) => {
    try {
      values.id = year.id
      dispatch(updateYearThunk(values as Year))
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
      enableReinitialize
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
                  InputProps={{
                    readOnly: true,
                  }}
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

export default YearUpdateForm
