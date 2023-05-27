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
import {addYearThunk} from '@/store/year.slice'
import HttpService from '@/Services/HttpService'
import InputFormikMUI from './FormikUI/InputFormikMUI'
import AutoCloseSnackBar from './UI/AutoCloseSnackBar'
import {LoadingButton} from '@mui/lab'
import {UserFromCsv} from '@/types'

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
})

type FormSchema = Yup.InferType<typeof validationSchema>
type StudentFormData = {username: string; password: string}

const initialValues: StudentFormData = {
  username: '',
  password: '',
}

const simpleFields = ['username', 'password']

const validate = (values: any) => ({})

type Props = {}

function StudentForm({}: Props) {
  const [errorMsg, setErrorMsg] = useState('')

  const [snackBarState, setSnackBarState] = useState<{
    open: boolean
    msg: string
    severity: 'error' | 'success' | 'warning' | 'info'
  }>({
    severity: 'info',
    open: false,
    msg: '',
  })

  const [loadingStatus, setLoadingStatus] = useState(false)

  const handleSubmit = async (values: StudentFormData) => {
    try {
      HttpService.registerStudent(values as UserFromCsv)
        .then((data: any) => {
          console.log('🚀 ~ file: YearForm.tsx:55 ~ .then ~ data:', data)
          setErrorMsg('')
          setSnackBarState({
            severity: 'success',
            open: true,
            msg: 'created with id: ' + data.id,
          })
        })
        .catch((err: any) => {
          setErrorMsg(err.message)
          setSnackBarState({severity: 'error', open: false, msg: err.message})
        })
        .finally(() => {
          setLoadingStatus(false)
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
          {simpleFields.map((item) => (
            <InputFormikMUI
              key={item}
              isMultiLine={item === 'description'}
              rowNums={4}
              item={item}
              touched={touched}
              errors={errors}
            />
          ))}

          <LoadingButton
            fullWidth
            variant="contained"
            loading={loadingStatus}
            loadingIndicator="Loading…"
            type="submit"
          >
            Create Student
          </LoadingButton>
          {errorMsg && (
            <Typography
              sx={{p: 2, color: 'red'}}
              variant="h6"
              textAlign="center"
            >
              {errorMsg}
            </Typography>
          )}

          {snackBarState?.open && snackBarState?.msg ? (
            <AutoCloseSnackBar
              open={snackBarState.open}
              message={snackBarState.msg}
              severity={snackBarState.severity}
            />
          ) : (
            <></>
          )}
        </Form>
      )}
    </Formik>
  )
}

export default StudentForm
