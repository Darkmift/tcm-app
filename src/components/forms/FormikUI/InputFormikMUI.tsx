import {FormControl, TextField} from '@mui/material'
import {Field} from 'formik'
import React from 'react'

type Props = {
  isMultiLine?: boolean
  rowNums?: number
  item: string
  touched: any
  errors: any
}

function InputFormikMUI({isMultiLine, rowNums, item, touched, errors}: Props) {
  return (
    <Field name={item} key={item}>
      {({field}: {field: any}) => (
        <FormControl
          fullWidth
          margin="normal"
          error={touched[item] && Boolean(errors[item])}
        >
          <TextField
            key={item}
            sx={{py: 1}}
            fullWidth
            variant={field.name === 'description' ? 'outlined' : 'standard'}
            id={item}
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            label={field.name.toUpperCase()}
            type="text"
            // InputLabelProps={{shrink: item === 'image'}}
            error={touched[item] && Boolean(errors[item])}
            helperText={touched[item] && errors[item]}
            {...(isMultiLine
              ? {
                  multiline: true,
                  rows: rowNums,
                }
              : {})}
          />
        </FormControl>
      )}
    </Field>
  )
}

export default InputFormikMUI
