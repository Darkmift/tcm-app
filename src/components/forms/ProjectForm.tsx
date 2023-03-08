import React from 'react'
import {Formik, Form, Field} from 'formik'
import {FormControl, Button, Grid, TextField} from '@mui/material'
import * as Yup from 'yup'
import {
  Member
} from '@/types'
import {useAppSelector} from '@/store'
import SelectMultipleMUI from './UI/SelectMultipleMUI'
import SelectMultipleMUI2 from './UI/SelectMultipleMUI2'

type Props = {}

function ProjectForm({}: Props) {
  const yearsRedux = useAppSelector((state) => state.years.years)
  const memberRedux = useAppSelector((state) => state.members.members)
  const internshipsRedux = useAppSelector(
    (state) => state.internships.internships
  )
  const instructorsRedux = useAppSelector(
    (state) => state.instructors.allInstructors
  )

  function isObject(val: any): boolean {
    return (
      val != null && typeof val === 'object' && Array.isArray(val) === false
    )
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    description: Yup.string(),
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
    image: File | null
    name: string
    year: string[] | null
    members: string[]
    instructorId: string[] | null
    internshipId: string[] | null
  } = {
    description: '',
    image: null,
    name: '',
    year: [],
    members: [],
    instructorId: [],
    internshipId: [],
  }

  const handleSubmit = (values: any) => {
    console.log(
      '🚀 ~ file: ProjectForm.tsx:78 ~ handleSubmit ~ values:',
      values
    )
  }

  const simpleFields = ['name', 'description']
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

  const validate = (values: any) => {
    // for some fucking reason I need this to properly submit
    return {}
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validate={validate}
    >
      {({errors, touched}) => (
        <Form>
          {/* text fields */}
          {simpleFields.map((item) => {
            const keyItem = item as KeysInForm
            return (
              <Field name={item} key={item}>
                {({field}: {field: any}) => (
                  <FormControl
                    fullWidth
                    margin="normal"
                    error={touched[keyItem] && Boolean(errors[keyItem])}
                  >
                    <TextField
                      key={item}
                      sx={{py: 1}}
                      fullWidth
                      variant={
                        field.name === 'description' ? 'outlined' : 'standard'
                      }
                      id={item}
                      name={field.name}
                      value={field.value}
                      onChange={field.onChange}
                      label={field.name.toUpperCase()}
                      type="text"
                      // InputLabelProps={{shrink: item === 'image'}}
                      error={touched[keyItem] && Boolean(errors[keyItem])}
                      helperText={touched[keyItem] && errors[keyItem]}
                      {...(field.name === 'description'
                        ? {
                            multiline: true,
                            rows: 4,
                          }
                        : {})}
                    />
                  </FormControl>
                )}
              </Field>
            )
          })}
          {/* selects */}
          <Grid container spacing={1} alignItems="stretch">
            {selectFields.map(
              ({name, multiple, values, optionLabelKey, optionIdKey}, key) => {
                const keyItem = name as KeysInForm
                return (
                  <Grid item xs={6} key={key} alignItems="center">
                    <Field name={name}>
                      {(props: any) => {
                        return (
                          <FormControl
                            fullWidth
                            margin="normal"
                            error={touched[keyItem] && Boolean(errors[keyItem])}
                          >
                            <SelectMultipleMUI2
                              multiple={multiple}
                              value={props.field.value}
                              handleChange={props.field.onChange}
                              name={props.field.name}
                              options={values}
                              optionLabelKey={optionLabelKey}
                              optionIdKey={optionIdKey}
                              error={
                                touched[keyItem] && Boolean(errors[keyItem])
                              }
                              helperText={touched[keyItem] && errors[keyItem]}
                            />
                          </FormControl>
                        )
                      }}
                    </Field>
                  </Grid>
                )
              }
            )}
          </Grid>
          {/* image file */}
          <Field name="image">
            {(props: any) => (
              <FormControl
                fullWidth
                margin="normal"
                error={touched.image && Boolean(errors.image)}
              >
                <TextField
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
          </Field>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default ProjectForm
