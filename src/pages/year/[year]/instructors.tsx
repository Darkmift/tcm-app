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
  const selectedYearRedux = useAppSelector((state) => state.years.selectedYear)

  const instructorsRedux = useAppSelector(
    (state) => state.instructors.allInstructors
  )
  const selectedInstructor = useAppSelector(
    (state) => state.instructors.selectedInstructor
  )

  const [open, setOpen] = React.useState(false)
  // const handleOpen = () => setOpen(true) //manged by useEffect
  const handleClose = () => {
    dispatch(setSelectedInstructor(''))
    // setOpen(false)
  }
  useEffect(() => {
    setOpen(!!selectedInstructor?.id)
  }, [selectedInstructor])

  if (!instructorsRedux?.length) {
    return (
      <Container>
        <Typography variant="h6">
          There are no instructors for {selectedYearRedux}
        </Typography>
      </Container>
    )
  }

  return (
    <Container>
      <Grid container spacing={4}>
        {instructorsRedux &&
          instructorsRedux.map((instructor) => (
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
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {selectedInstructor && (
          <Box p={2} sx={{display: 'flex', gap: '20px'}}>
            <Box sx={{minWidth: '33%'}}>
              <Image
                src={
                  selectedInstructor.image
                    ? selectedInstructor.image
                    : pathImage + 'default-instructor-img.jpg'
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
