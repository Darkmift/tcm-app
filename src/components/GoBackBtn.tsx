import {Button, Typography} from '@mui/material'
import React from 'react'
import {useRouter} from 'next/router'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

type Props = {}

function GoBackBtn({}: Props) {
  const router = useRouter()

  return (
    <Button
      onClick={() => router.back()}
      sx={{
        display: 'flex',
        maxWidth: '175px',
        alignItems: 'center',
      }}
      variant="outlined"
    >
      <ArrowBackIcon />
      <Typography sx={{mt: '3px', mx: 2}}>Go Back</Typography>
    </Button>
  )
}

export default GoBackBtn
