import React, {useEffect, useState} from 'react'
import {Formik, Form} from 'formik'
import {Typography} from '@mui/material'
import * as Yup from 'yup'
import {useAppDispatch} from '@/store'
import {addMediaThunk} from '@/store/media.slice'
import {NewMedia} from '@/types'
import InputFormikMUI from './FormikUI/InputFormikMUI'
import {LoadingButton} from '@mui/lab'
import AutoCloseSnackBar from './UI/AutoCloseSnackBar'

const validationSchema = Yup.object({
  url: Yup.string().required(),
  heading: Yup.string().required(),
  desc: Yup.string(),
})

type FormSchema = Yup.InferType<typeof validationSchema>

const initialValues: NewMedia = {
  url: '',
  desc: '',
  heading: '',
}

const simpleFields = ['url', 'heading', 'desc']

const validate = (values: any) => ({})

type Props = {}

function MediaAddForm({}: Props) {
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

  useEffect(() => {
    let timer: any

    if (snackBarState.open) {
      timer = setTimeout(() => {
        setSnackBarState({...snackBarState, open: false})
      }, 4000)
    }

    return () => clearTimeout(timer)
  }, [snackBarState])

  const dispatch = useAppDispatch()
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (values: NewMedia, actions: any) => {
    try {
      setErrorMsg('')
      setLoadingStatus(true)
      dispatch(addMediaThunk(values))
        .unwrap()
        .then((data) => {
          setSnackBarState({
            severity: 'success',
            open: true,
            msg: 'created with id: ' + data.id,
          })
          actions.setSubmitting(false)
          actions.resetForm({
            values: initialValues,
          })
          setErrorMsg('')
        })
        .catch((err: any) => {
          console.log(
            '🚀 ~ file: MediaAddForm.tsx:56 ~ handleSubmit ~ err:',
            err
          )
          setSnackBarState({
            severity: 'error',
            open: false,
            msg: 'error creating new url....is url unique?',
          })

          setErrorMsg('error creating new url....is url unique?')
          // setErrorMsg(err.error || err.message)
        })
        .finally(() => {
          setLoadingStatus(false)
        })
    } catch (error: any) {
      console.log(
        '🚀 ~ file: MediaAddForm.tsx:60 ~ handleSubmit ~ error:',
        error
      )
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
              isMultiLine={item === 'desc'}
              rowNums={4}
              item={item}
              touched={touched}
              errors={errors}
            />
          ))}

          <LoadingButton
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            loading={loadingStatus}
            loadingIndicator="Loading…"
          >
            Submit
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

export default MediaAddForm
