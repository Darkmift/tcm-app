import {FormControl, TextField} from '@mui/material'
import {Field} from 'formik'
import React from 'react'
import SelectMultipleMUI2 from '../UI/SelectMultipleMUI2'

type Props = {
  isMultiLine?: boolean
  item: string
  touched: any
  errors: any
  options: any[]
  optionLabelKey: string
  optionIdKey: string
}

function SelectFormikMUI({
  optionLabelKey,
  optionIdKey,
  isMultiLine,
  options,
  item,
  touched,
  errors,
}: Props) {
  return (
    <Field name={item} key={item}>
      {({field}: {field: any}) => (
        <FormControl
          fullWidth
          margin="normal"
          error={touched[item] && Boolean(errors[item])}
        >
          <SelectMultipleMUI2
            multiple={!!isMultiLine}
            value={field.value}
            handleChange={field.onChange}
            name={field.name}
            options={options}
            optionLabelKey={optionLabelKey}
            optionIdKey={optionIdKey}
            error={touched[item] && Boolean(errors[item])}
            helperText={touched[item] && errors[item]}
          />
        </FormControl>
      )}
    </Field>
  )
}

export default SelectFormikMUI
