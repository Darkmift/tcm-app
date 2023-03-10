import React from 'react'
import {Alert, Snackbar} from '@mui/material'

interface Props {
  open: boolean
  message: string
  handleClose?: (evt: any) => void
  severity: 'error' | 'success' | 'warning' | 'info'
}

const SnackbarComponent: React.FC<Props> = ({
  severity,
  open,
  message,
  handleClose,
}) => {
  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={severity}
        sx={{width: '100%', fontSize: '25px', fontWeight: '900'}}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}

export default SnackbarComponent
