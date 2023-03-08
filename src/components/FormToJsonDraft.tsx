// Types
import {StyleObject, FormData} from '../types'
// react
import React, {useEffect} from 'react'
// react-hook-form
import {Controller, useForm} from 'react-hook-form'
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
  const {handleSubmit, register, reset, control} = useForm()

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
            <Controller
              name={name}
              control={control}
              render={({fieldState, field}) => {
                return (
                  <TextField
                    key={index}
                    placeholder={placeholder}
                    variant="standard"
                    type={type || 'text'}
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
