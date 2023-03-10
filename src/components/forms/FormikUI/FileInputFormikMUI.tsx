import {FormControl, TextField} from '@mui/material'
import {Field} from 'formik'
import React from 'react'

type Props = {
  item: string
  touched: any
  errors: any
}

function FileInputFormikMUI({item, touched, errors}: Props) {
  return (
    <Field name={item}>
      {({field, form}: {field: any; form: any}) => (
        <FormControl
          fullWidth
          margin="normal"
          error={touched[item] && Boolean(errors[item])}
        >
          <TextField
            sx={{py: 1}}
            fullWidth
            variant="standard"
            id={item}
            name={field.name}
            onChange={(event) => {
              const file = (event.currentTarget as any).files[0]
              form.setFieldValue('image', file)
            }}
            value={field.value}
            label={field.name.toUpperCase()}
            type="file"
            InputLabelProps={{shrink: item === 'image'}}
            error={touched[item] && Boolean(errors[item])}
            helperText={touched[item] && errors[item]}
          />
        </FormControl>
      )}
    </Field>
  )
}

export default FileInputFormikMUI
