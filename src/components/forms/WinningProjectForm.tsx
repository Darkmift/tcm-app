import React, {useEffect, useRef, useState} from 'react'
import {Formik, Form, Field} from 'formik'
import {Box, FormControl, Grid, TextField, Typography} from '@mui/material'
import * as Yup from 'yup'
import {Project, Year} from '@/types'
import {useAppDispatch, useAppSelector} from '@/store'
import {createProject} from '@/store/project.slice'
import isObject from '../../../utilities/isObject'
import processImage from '../../../utilities/ProcessImage'
import InputFormikMUI from './FormikUI/InputFormikMUI'
import SelectFormikMUI from './FormikUI/SelectFormikMUI'
import {LoadingButton} from '@mui/lab'
import AutoCloseSnackBar from './UI/AutoCloseSnackBar'
import HttpService from '@/Services/HttpService'

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  year: Yup.string().required('Year is required'),
  project: Yup.mixed().test('is-project', 'Select an project', (value) => {
    console.log(
      '🚀 ~ file: WinningProjectForm.tsx:19 ~ project:Yup.mixed ~ value:',
      value
    )
    if (isObject(value) === false) {
      return true
    }

    return !value || ('id' in value && 'name' in value)
  }),
})

const simpleFields = ['year', 'title']

const validate = (values: any) => ({})

type Props = {}

function WinningProjectForm({}: Props) {
  const dispatch = useAppDispatch()
  const selectedYearRedux = useAppSelector((state) => state.years.selectedYear)
  const projectsRedux = useAppSelector((state) => state.projects.projects)

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
  const [initialValues, setInitialValues] = useState<{
    project: Project | null
    title: string
    year: string
  }>({
    project: null,
    title: '',
    year: '',
  })

  useEffect(() => {
    setInitialValues({...initialValues, year: '' + selectedYearRedux})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYearRedux])

  const selectFields = [
    {
      name: 'project',
      multiple: false,
      values: projectsRedux,
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

      HttpService.addWinnerProject({
        title: values.title,
        year: values.year,
        projectId: values.project.id,
      })
        .then((data) => {
          console.log('🚀 ~ file: ProjectForm.tsx:144 ~ .then ~ data:', data)
          setSnackBarState({
            severity: 'success',
            open: true,
            msg: 'created with id: ' + data?.id,
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
      {({errors, touched, setFieldValue, values}) => (
        <Form>
          {/* text fields */}
          {simpleFields.map((item) => (
            <InputFormikMUI
              key={item}
              isMultiLine={false}
              rowNums={4}
              item={item}
              touched={touched}
              errors={errors}
            />
          ))}
          {/* selects */}

          <Grid container spacing={1} alignItems="stretch">
            {projectsRedux?.length ? (
              selectFields.map(
                ({name, values, optionLabelKey, optionIdKey}, key) => {
                  return (
                    <Grid item xs={6} key={key} alignItems="center">
                      <SelectFormikMUI
                        {...{
                          optionLabelKey,
                          optionIdKey,
                          isMultiLine: false,
                          options: values,
                          item: name,
                          touched,
                          errors,
                        }}
                      />
                    </Grid>
                  )
                }
              )
            ) : (
              <Box sx={{padding: 5}}>
                <Typography>
                  {values.year
                    ? `There are no projects for ${values.year}`
                    : 'Please select a year'}
                </Typography>
              </Box>
            )}
          </Grid>

          <LoadingButton
            fullWidth
            variant="contained"
            loading={loadingStatus}
            loadingIndicator="Loading…"
            type="submit"
          >
            Create Winning Project
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

export default WinningProjectForm
