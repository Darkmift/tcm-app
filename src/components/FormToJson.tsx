// Types
import {StyleObject, FormData} from '../types'
// react
import React from 'react'
// react-hook-form
import {useForm} from 'react-hook-form'
// mui
import {Button, Container, TextField} from '@mui/material'

type Props = {
  formData: FormData[]
  style?: StyleObject
  submitBtnText?: string
  submitHandler: (data: any) => void
  formButton?: any
}

function FormToJson({
  formData,
  submitBtnText,
  style = {},
  submitHandler,
  formButton = null,
}: Props) {
  const {handleSubmit, register} = useForm()

  const saveData = (data: any) => {
    if (submitHandler) {
      console.log('🚀 ~ file: FormToJson.js:11 ~ saveData ~ data:', data)
      submitHandler(data)
    } else {
      console.warn('submit method not implemented', {data})
    }
  }

  return (
    <Container
      component="form"
      style={style}
      onSubmit={handleSubmit(saveData)}
      sx={{pt: '20px', display: 'flex', flexDirection: 'column', gap: '30px'}}
    >
      {formData.map(
        (
          {
            Component,
            extraProps = {},
            name,
            type,
            items,
            placeholder,
            isDropdown,
          },
          index
        ) => {
          return isDropdown ? (
            <Component
              key={index}
              name={name}
              items={items}
              register={register}
              {...extraProps}
            />
          ) : (
            <TextField
              key={index}
              placeholder={placeholder}
              variant="standard"
              type={type || 'text'}
              {...register(name, {required: true})}
              {...extraProps}
              sx={{
                minHeight: 25,
                '& .MuiTextField-root': {width: '25ch'},
                ...extraProps?.sx,
              }}
              inputProps={{
                style: {
                  padding: 10,
                  ...extraProps?.inputProps?.style,
                },
              }}
            />
          )
        }
      )}
      {formButton ? (
        formButton
      ) : (
        <Button variant="contained" type="submit">
          {submitBtnText || 'Submit'}
        </Button>
      )}
    </Container>
  )
}
export default FormToJson
