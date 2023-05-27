import React, {useEffect, useRef, useState} from 'react'
import {Formik, Form, Field} from 'formik'
import {FormControl, Grid, TextField, Typography} from '@mui/material'
import * as Yup from 'yup'
import {Instructor, Internship, Member, Project, Year} from '@/types'
import {useAppDispatch, useAppSelector} from '@/store'
import {
  createProject,
  updateProject,
  updateStudentProject,
} from '@/store/project.slice'
import isObject from '../../../utilities/isObject'
import processImage from '../../../utilities/ProcessImage'
import InputFormikMUI from './FormikUI/InputFormikMUI'
import SelectFormikMUI from './FormikUI/SelectFormikMUI'
import {LoadingButton} from '@mui/lab'
import AutoCloseSnackBar from './UI/AutoCloseSnackBar'
import urlToFile from '../../../utilities/urlToFile'
import FileInputFormikMUI from './FormikUI/FileInputFormikMUI'

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Name is required'),
  image: Yup.mixed(),
  year: Yup.number()
    .min(2000, 'year is too early')
    .max(2100, 'year is too late'),
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

const simpleFields = ['name', 'description', 'year']

const validate = (values: any) => {
  // for some fucking reason I need this to properly submit
  return {}
}

type Props = {project: Project; studentUsername?: string}

function ProjectUpdateForm({project, studentUsername}: Props) {
  const initialValues: {
    description: string
    image: File | null | undefined | string
    name: string
    year: number
    members: Member[]
    instructorId: Instructor[] | null
    internshipId: Internship[] | null
  } = {
    description: project.description,
    image: undefined,
    name: project.name,
    year: project.year as number,
    members: project.members as Member[],
    instructorId:
      project.expand && (project.expand?.instructorId as Instructor)
        ? [project.expand.instructorId]
        : [],
    internshipId:
      project.expand && (project.expand?.internshipId as Internship)
        ? [project.expand.internshipId]
        : [],
  }

  useEffect(() => {
    async function setImageFromUrl() {
      try {
        const url = project.image as string
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
      '🚀 ~ file: ProjectUpdateForm.tsx:115 ~ ProjectUpdateForm ~ project.image:',
      project.image
    )
    setImageFromUrl()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project.image])

  const dispatch = useAppDispatch()
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
      const projectFormData = {
        ...project,
        ...structuredClone(values),
      } as Project

      if ((projectFormData.image as File)?.size) {
        console.log(
          '🚀 ~ file: ProjectUpdateForm.tsx:186 ~ handleSubmit ~ projectFormData.image:',
          projectFormData.image
        )
        const imageData = await processImage({
          title: projectFormData.name,
          collectionName: 'projects',
          imageFile: projectFormData.image as unknown as File,
          studentUsername,
          studentProject: project,
        })
        if (imageData === null) throw new Error('Failed to save image')
        projectFormData.image = imageData.url
      }

      if (studentUsername?.length) {
        dispatch(updateStudentProject(projectFormData))
          .unwrap()
          .then((data) => {
            console.log('🚀 ~ file: ProjectForm.tsx:144 ~ .then ~ data:', data)
            setSnackBarState({
              severity: 'success',
              open: true,
              msg: 'update complete',
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
        return
      }

      dispatch(updateProject(projectFormData))
        .unwrap()
        .then((data) => {
          console.log('🚀 ~ file: ProjectForm.tsx:144 ~ .then ~ data:', data)
          setSnackBarState({
            severity: 'success',
            open: true,
            msg: 'update complete',
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
      {(props) => {
        const {errors, touched, setFieldValue} = props
        console.log(
          '🚀 ~ file: ProjectUpdateForm.tsx:242 ~ ProjectUpdateForm ~ props:',
          props
        )

        return (
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
                (
                  {name, multiple, values, optionLabelKey, optionIdKey},
                  key
                ) => {
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
                  console.log(
                    '🚀 ~ file: ProjectUpdateForm.tsx:292 ~ ProjectUpdateForm ~ file:',
                    file
                  )
                  setFieldValue('image', file)
                },
                item: 'image',
                touched,
                errors,
                originalFileSrc: project.image as string,
              }}
            />

            {/* <Field name="image">
            {(props: any) => (
              <FormControl
                fullWidth
                margin="normal"
                error={touched.image && Boolean(errors.image)}
              >
                <TextField
                  inputRef={fileInputRef}
                  sx={{py: 1}}
                  fullWidth
                  variant="standard"
                  id="image"
                  name={props.field.name}
                  onChange={(event) => {
                    const file = (event.currentTarget as any).files[0]
                    props.form.setFieldValue('image', file)
                  }}
                  label={props.field.name.toUpperCase()}
                  type="file"
                  InputLabelProps={{shrink: true}}
                  error={touched.image && Boolean(errors.image)}
                  helperText={touched.image && errors.image}
                />
              </FormControl>
            )}
          </Field> */}
            <LoadingButton
              fullWidth
              variant="contained"
              loading={loadingStatus}
              loadingIndicator="Loading…"
              type="submit"
            >
              Update Project
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
        )
      }}
    </Formik>
  )
}

export default ProjectUpdateForm
