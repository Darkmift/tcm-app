import InstructorCard from '@/components/InstructorCard'
import {IMAGE_ASSETS_FOLDER_PATH} from '@/const'
import {useAppDispatch, useAppSelector} from '@/store'
import {setSelectedInstructor} from '@/store/instructors.slice'
import {Box, Typography, Container, Dialog, Grid} from '@mui/material'
import Image from 'next/image'
import React, {useEffect} from 'react'

function Instructors() {
  const pathImage = IMAGE_ASSETS_FOLDER_PATH + '/instructors/'

  const dispatch = useAppDispatch()
  const instructors = useAppSelector(
    (state) => state.instructors.allInstructors
  )
  const selectedInstructor = useAppSelector(
    (state) => state.instructors.selectedInstructor
  )

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  useEffect(() => {
    setOpen(!!selectedInstructor?.id)
  }, [selectedInstructor])

  return (
    <Container>
      <Grid container spacing={4} xs={12}>
        {instructors &&
          instructors.map((instructor) => (
            <Grid
              key={`${instructor.id}`}
              item
              xl={3}
              onClick={() => dispatch(setSelectedInstructor(instructor.id))}
            >
              <InstructorCard
                imgName={instructor.image}
                title={instructor.name}
                description={instructor.description}
              />
            </Grid>
          ))}
      </Grid>
      <Dialog
        open={!!selectedInstructor?.id && open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {selectedInstructor && (
          <Box p={2} sx={{display: 'flex', gap: '20px'}}>
            <Box sx={{minWidth: '33%'}}>
              <Image
                src={
                  pathImage +
                  (selectedInstructor.image
                    ? selectedInstructor.image
                    : 'default-instructor-img.jpg')
                }
                alt={selectedInstructor.name}
                width={200}
                height={250}
              />
            </Box>
            <Box>
              <Typography
                variant="h6"
                px={1}
                sx={{borderLeft: '5px solid #2474e4', marginBottom: '10px'}}
              >
                {selectedInstructor.name}
              </Typography>
              <Typography>{selectedInstructor.description}</Typography>
            </Box>
          </Box>
        )}
      </Dialog>
    </Container>
  )
}

export default Instructors
