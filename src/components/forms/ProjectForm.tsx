import React, {useEffect, useRef, useState} from 'react'
import {Formik, Form, Field} from 'formik'
import {FormControl, Grid, TextField, Typography} from '@mui/material'
import * as Yup from 'yup'
import {Member, Project} from '@/types'
import {useAppDispatch, useAppSelector} from '@/store'
import {createProject} from '@/store/project.slice'
import isObject from '../../../utilities/isObject'
import processImage from '../../../utilities/ProcessImage'
import InputFormikMUI from './FormikUI/InputFormikMUI'
import SelectFormikMUI from './FormikUI/SelectFormikMUI'
import {LoadingButton} from '@mui/lab'
import AutoCloseSnackBar from './UI/AutoCloseSnackBar'
import FileInputFormikMUI from './FormikUI/FileInputFormikMUI'

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  image: Yup.mixed(),
  year: Yup.mixed().test(
    'is-year',
    'Select a year',
    (value) => !value || ('year' in value && 'is_enabled' in value)
  ),
  members: Yup.array<Member>(),
  internshipId: Yup.mixed().test(
    'is-internship',
    'Select an internship',
    (value) => {
      if (isObject(value) === false) {
        return true
      }

      return !value || ('id' in value && 'name' in value)
    }
  ),
  instructorId: Yup.mixed().test(
    'is-instructor',
    'Select an instructor',
    (value) => {
      if (isObject(value) === false) {
        return true
      }

      return !value || ('id' in value && 'name' in value)
    }
  ),
})

type FormSchema = Yup.InferType<typeof validationSchema>
type KeysInForm = keyof FormSchema

const initialValues: {
  description: string
  image: File | null | undefined
  name: string
  year: string[] | null
  members: string[]
  instructorId: string[] | null
  internshipId: string[] | null
} = {
  description: '',
  image: undefined,
  name: '',
  year: [],
  members: [],
  instructorId: [],
  internshipId: [],
}

const simpleFields = ['name', 'description']

const validate = (values: any) => {
  // for some fucking reason I need this to properly submit
  return {}
}

type Props = {}

function ProjectForm({}: Props) {
  const dispatch = useAppDispatch()
  const yearsRedux = useAppSelector((state) => state.years.years)
  const memberRedux = useAppSelector((state) => state.members.members)
  const internshipsRedux = useAppSelector(
    (state) => state.internships.internships
  )
  const instructorsRedux = useAppSelector(
    (state) => state.instructors.allInstructors
  )

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

  const selectFields = [
    {
      name: 'year',
      multiple: false,
      values: yearsRedux,
      optionLabelKey: 'year',
      optionIdKey: 'id',
    },
    {
      name: 'members',
      multiple: true,
      values: memberRedux,
      optionLabelKey: 'name',
      optionIdKey: 'id',
    },
    {
      name: 'instructorId',
      multiple: false,
      values: instructorsRedux,
      optionLabelKey: 'name',
      optionIdKey: 'id',
    },
    {
      name: 'internshipId',
      multiple: false,
      values: internshipsRedux,
      optionLabelKey: 'name',
      optionIdKey: 'id',
    },
  ]

  useEffect(() => {
    let timer: any

    if (snackBarState.open) {
      timer = setTimeout(() => {
        setSnackBarState({...snackBarState, open: false})
      }, 4000)
    }

    return () => clearTimeout(timer)
  }, [snackBarState])

  const fileInputRef = useRef<HTMLInputElement>()

  const handleSubmit = async (values: any, actions: any) => {
    try {
      setErrorMsg('')
      setLoadingStatus(true)
      const projectFormData = structuredClone(values) as Project

      if (projectFormData.image) {
        const imageData = await processImage(
          projectFormData.name,
          'projects',
          projectFormData.image as unknown as File
        )
        if (imageData === null) throw new Error('Failed to save image')
        projectFormData.image = imageData.url
      }

      dispatch(createProject(projectFormData))
        .unwrap()
        .then((data) => {
          console.log('🚀 ~ file: ProjectForm.tsx:144 ~ .then ~ data:', data)
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
        '🚀 ~ file: ProjectForm.tsx:167 ~ handleSubmit ~ error:',
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
            />
          ))}
          {/* selects */}
          <Grid container spacing={1} alignItems="stretch">
            {selectFields.map(
              ({name, multiple, values, optionLabelKey, optionIdKey}, key) => {
                const keyItem = name as KeysInForm
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
            }}
          />
          <LoadingButton
            fullWidth
            variant="contained"
            loading={loadingStatus}
            loadingIndicator="Loading…"
            type="submit"
          >
            Create Project
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

export default ProjectForm
