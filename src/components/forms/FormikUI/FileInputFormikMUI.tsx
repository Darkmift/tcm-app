import {FormControl, Grid, TextField} from '@mui/material'
import {Field} from 'formik'
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import {IMAGE_ASSETS_FOLDER_PATH} from '@/const'

type Props = {
  item: string
  touched: any
  errors: any
  onChange: (evt: any) => void
  originalFileSrc?: string
}

function FileInputFormikMUI({
  onChange,
  item,
  touched,
  errors,
  originalFileSrc,
}: Props) {
  const defaultImg =
    IMAGE_ASSETS_FOLDER_PATH + '/projects/default-project-img.jpg'

  // added state to hold the image file url
  const [imageSrc, setImageSrc] = useState<any>(originalFileSrc)

  useEffect(() => {
    setImageSrc(originalFileSrc)
  }, [originalFileSrc])

  // function to convert File object to url
  const getFileUrl = (file: File) => {
    return URL.createObjectURL(file)
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList: FileList | null = event.target.files
    if (fileList && fileList.length > 0) {
      const file: File = fileList[0]

      // set the image source url state
      setImageSrc(getFileUrl(file))

      // call props onChange to pass the File object
      onChange({
        currentTarget: {
          name: item,
          files: [file],
          value: file,
        },
      })
    }
  }

  return (
    <Field name={item}>
      {({field}: {field: any; form: any}) => {
        return (
          <FormControl
            fullWidth
            margin="normal"
            error={touched[item] && Boolean(errors[item])}
          >
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Image
                  width={175}
                  height={175}
                  src={imageSrc || defaultImg}
                  alt={item}
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  sx={{py: 1}}
                  fullWidth
                  variant="standard"
                  id={item}
                  name={field.name}
                  onChange={handleOnChange}
                  // value={field.value || ''}
                  label={field.name.toUpperCase()}
                  type="file"
                  InputLabelProps={{shrink: item === 'image'}}
                  error={touched[item] && Boolean(errors[item])}
                  helperText={touched[item] && errors[item]}
                />
              </Grid>
            </Grid>
          </FormControl>
        )
      }}
    </Field>
  )
}

export default FileInputFormikMUI
