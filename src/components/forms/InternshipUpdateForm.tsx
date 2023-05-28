import React, {useEffect, useRef, useState} from 'react'
import {Formik, Form, isObject} from 'formik'
import {Grid, Typography} from '@mui/material'
import * as Yup from 'yup'
import {Instructor, Internship, Year} from '@/types'
import {useAppDispatch, useAppSelector} from '@/store'
import processImage from '../../../utilities/ProcessImage'
import InputFormikMUI from './FormikUI/InputFormikMUI'
import SelectFormikMUI from './FormikUI/SelectFormikMUI'
import {LoadingButton} from '@mui/lab'
import AutoCloseSnackBar from './UI/AutoCloseSnackBar'
import FileInputFormikMUI from './FormikUI/FileInputFormikMUI'
import {addNewInstructor} from '@/store/instructors.slice'
import {COLLECTIONS} from '@/const'
import {createInternship, updateInternship} from '@/store/internships.slice'
import urlToFile from '../../../utilities/urlToFile'

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  description: Yup.string(),
  image: Yup.mixed(),
  year: Yup.number()
    .min(2000, 'year is too early')
    .max(2100, 'year is too late'),
  instructors: Yup.array<Instructor>(),
})

type FormSchema = Yup.InferType<typeof validationSchema>
type KeysInForm = keyof FormSchema

const simpleFields = ['name', 'description', 'year']

// for some fucking reason I need this to properly submit
const validate = (values: any) => ({})

type Props = {internship: Internship}

function InternShipUpdateForm({internship}: Props) {
  const initialValues: {
    description: string
    image: File | null | undefined
    name: string
    year: number
    instructors: Instructor[] | null
  } = {
    description: internship.description,
    image: undefined,
    name: internship.name,
    year: internship.year,
    instructors: internship.instructors,
  }

  useEffect(() => {
    async function setImageFromUrl() {
      try {
        const url = internship.image as string
        const filename = url.substring(url.lastIndexOf('/') + 1)
        const type = filename.split('.')[1]
        const mimeType = `image/${type}`

        const file = await urlToFile(url, filename, mimeType)
        if (file?.size) {
          initialValues.image = file
        }
      } catch (error) {
        console.log(
          '🚀 ~ file: InternshipUpdateForm.tsx:68 ~ setImageFromUrl ~ error:',
          error
        )
      }
    }

    setImageFromUrl()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [internship.image])

  const dispatch = useAppDispatch()
  const yearsRedux = useAppSelector((state) => state.years.years)
  const instructorsRedux = useAppSelector(
    (state) => state.instructors.allInstructors
  )

  const selectFields = [
    {
      name: 'instructors',
      multiple: true,
      values: instructorsRedux,
      optionLabelKey: 'name',
      optionIdKey: 'id',
    },
  ]

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

  const handleSubmit = async (values: any, actions: any) => {
    try {
      setErrorMsg('')
      setLoadingStatus(true)
      const internShipFormData = structuredClone(values) as Internship

      if (internShipFormData.image) {
        const imageData = await processImage({
          title: internShipFormData.name,
          collectionName: COLLECTIONS.INSTRUCTORS,
          imageFile: internShipFormData.image as unknown as File,
        })
        if (imageData === null) throw new Error('Failed to save image')
        internShipFormData.image = imageData.url
      }

      internShipFormData.id = internship.id

      dispatch(updateInternship(internShipFormData))
        .unwrap()
        .then((data) => {
          console.log(
            '🚀 ~ file: InternshipUpdateForm.tsx:149 ~ .then ~ data:',
            data
          )

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
        '🚀 ~ file: InternshipForm.tsx:131 ~ handleSubmit ~ error:',
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
          {/* selects */}
          <Grid container spacing={1} alignItems="stretch">
            {selectFields.map(
              ({name, multiple, values, optionLabelKey, optionIdKey}, key) => {
                return (
                  <Grid item xs={6} key={key} alignItems="center">
                    <SelectFormikMUI
                      {...{
                        optionLabelKey,
                        optionIdKey,
                        isMultiLine: multiple,
                        options: values,
                        item: name,
                        touched,
                        errors,
                      }}
                    />
                  </Grid>
                )
              }
            )}
          </Grid>
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
              originalFileSrc: internship.image as string,
            }}
          />
          <LoadingButton
            fullWidth
            variant="contained"
            loading={loadingStatus}
            loadingIndicator="Loading…"
            type="submit"
          >
            Update Internship
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

export default InternShipUpdateForm
