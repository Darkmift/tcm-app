import React from 'react'
import {Dialog, Container} from '@mui/material'

type Props = {}

function Modal({}: Props) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container></Container>
      </Dialog>
    </>
  )
}

export default Modal
