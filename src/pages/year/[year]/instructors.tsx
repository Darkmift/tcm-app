import InstructorCard from '@/components/InstructorCard'
import {useAppSelector} from '@/store'
import {Container, Grid} from '@mui/material'
import React from 'react'

function Instructors() {
  const instructors = useAppSelector(
    (state) => state.instructors.allInstructors
  )
  return (
    <Container>
      <Grid container spacing={4} xs={12}>
        {instructors &&
          instructors.map((instructor) => (
            <Grid key={`${instructor.id}`} item xl={3}>
              <InstructorCard
                imgName={instructor.image}
                title={instructor.name}
                description={instructor.description}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  )
}

export default Instructors
