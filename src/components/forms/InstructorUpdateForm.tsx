import React, {useEffect, useRef, useState} from 'react'
import {Formik, Form} from 'formik'
import {Grid, Typography} from '@mui/material'
import * as Yup from 'yup'
import {Instructor, Year} from '@/types'
import {useAppDispatch, useAppSelector} from '@/store'
import processImage from '../../../utilities/ProcessImage'
import InputFormikMUI from './FormikUI/InputFormikMUI'
import SelectFormikMUI from './FormikUI/SelectFormikMUI'
import {LoadingButton} from '@mui/lab'
import AutoCloseSnackBar from './UI/AutoCloseSnackBar'
import FileInputFormikMUI from './FormikUI/FileInputFormikMUI'
import {
  addNewInstructor,
  updateInstructorDetails,
} from '@/store/instructors.slice'
import urlToFile from '../../../utilities/urlToFile'
import {COLLECTIONS} from '@/const'

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  description: Yup.string(),
  image: Yup.mixed(),
  year: Yup.number()
    .min(2000, 'year is too early')
    .max(2100, 'year is too late'),
})

type FormSchema = Yup.InferType<typeof validationSchema>
type KeysInForm = keyof FormSchema

const simpleFields = ['name', 'description', 'year']

// for some fucking reason I need this to properly submit
const validate = (values: any) => ({})

type Props = {instructor: Instructor}

function InstructorUpdateForm({instructor}: Props) {
  const initialValues: {
    description: string
    image: File | null | undefined | string
    name: string
    year: number
  } = {
    description: instructor.description,
    image: null,
    name: instructor.name,
    year: instructor.year,
  }

  const dispatch = useAppDispatch()
  const yearsRedux = useAppSelector((state) => state.years.years)

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

  useEffect(() => {
    let timer: any

    if (snackBarState.open) {
      timer = setTimeout(() => {
        setSnackBarState({...snackBarState, open: false})
      }, 4000)
    }

    return () => clearTimeout(timer)
  }, [snackBarState])

  // used to clear file input value
  const fileInputRef = useRef<HTMLInputElement>()

  useEffect(() => {
    async function setImageFromUrl() {
      try {
        const url = instructor.image as string
        const filename = url.substring(url.lastIndexOf('/') + 1)
        const type = filename.split('.')[1]
        const mimeType = `image/${type}`

        const file = await urlToFile(url, filename, mimeType)
        if (file?.size) {
          initialValues.image = file
        }
      } catch (error) {
        console.log(
          '🚀 ~ file: ProjectUpdateForm.tsx:101 ~ setImageFromUrl ~ error:',
          error
        )
      }
    }

    console.log(
      '🚀 ~ file: InstructorUpdateForm.tsx:115 ~ useEffect ~     instructor.image:',
      instructor.image
    )

    setImageFromUrl()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instructor.image])

  const handleSubmit = async (values: any, actions: any) => {
    try {
      setErrorMsg('')
      setLoadingStatus(true)
      const instructorFormData = structuredClone(values) as Instructor

      if ((instructorFormData.image as unknown as File)?.size) {
        const imageData = await processImage(
          instructorFormData.name,
          COLLECTIONS.INSTRUCTORS,
          instructorFormData.image as unknown as File
        )
        if (imageData === null) throw new Error('Failed to save image')
        instructorFormData.image = imageData.url
      }
      instructorFormData.id = instructor.id

      dispatch(updateInstructorDetails(instructorFormData))
        .unwrap()
        .then((data) => {
          console.log('🚀 ~ file: InstructorForm.tsx:101 ~ .then ~ data:', data)

          setSnackBarState({
            severity: 'success',
            open: true,
            msg: 'created with id: ' + data.id,
          })

          actions.setSubmitting(false)
          actions.resetForm({
            values: initialValues,
          })
          if (fileInputRef.current) {
            fileInputRef.current.value = ''
          }
        })
        .catch((err: any) => {
          setErrorMsg(err.message)
          setSnackBarState({severity: 'error', open: false, msg: err.message})
        })
        .finally(() => {
          setLoadingStatus(false)
        })
    } catch (error: any) {
      console.log(
        '🚀 ~ file: InstructorForm.tsx:125 ~ handleSubmit ~ error:',
        error
      )

      setErrorMsg(error.message)
    } finally {
      setLoadingStatus(false)
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
          {simpleFields.map((item) => (
            <InputFormikMUI
              key={item}
              isMultiLine={item === 'description'}
              rowNums={4}
              item={item}
              touched={touched}
              errors={errors}
              disabled={item === 'year'}
            />
          ))}
          {/* image file */}
          <FileInputFormikMUI
            {...{
              onChange: (event: any) => {
                const file = (event.currentTarget as any).files[0]
                setFieldValue('image', file)
              },
              item: 'image',
              touched,
              errors,
              originalFileSrc: instructor.image as string,
            }}
          />
          <LoadingButton
            fullWidth
            variant="contained"
            loading={loadingStatus}
            loadingIndicator="Loading…"
            type="submit"
          >
            Update Instructor
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

export default InstructorUpdateForm
