import GoBackBtn from '@/components/GoBackBtn'
import {Card, Container, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'
import InstructorForm from '@/components/forms/InstructorForm'
import {useAppSelector} from '@/store'
import {Instructor} from '@/types'
import SelectMultipleMUI2 from '@/components/forms/UI/SelectMultipleMUI2'
import InstructorUpdateForm from '@/components/forms/InstructorUpdateForm'
import withProtectedRoute from '@/highOrderComponents/withProtectedRoute'

type Props = {}

function InstructorsDashboard({}: Props) {
  const selectedYear = useAppSelector((state) => state.years.selectedYear)
  const allInstructorsRedux = useAppSelector(
    (state) => state.instructors.allInstructors
  )

  const [selectedInstructor, setSelectedInstructor] =
    useState<Instructor | null>(null)

  useEffect(() => {
    if (!selectedInstructor && allInstructorsRedux?.[0]) {
      setSelectedInstructor(allInstructorsRedux[0])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allInstructorsRedux])

  return (
    <Container sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <GoBackBtn />
      <Card raised sx={{p: 4}}>
        <Typography variant="h4">Add Instructor Form</Typography>
        <InstructorForm />
      </Card>

      {!allInstructorsRedux?.length && (
        <Card raised sx={{p: 4}}>
          <Typography variant="h6">
            There are no instructors for {selectedYear}
          </Typography>
        </Card>
      )}
      {allInstructorsRedux?.length && selectedInstructor ? (
        <Card raised sx={{p: 4}}>
          <Typography variant="h4">Edit Instructor Form</Typography>
          <SelectMultipleMUI2
            value={selectedInstructor}
            handleChange={(evt) => setSelectedInstructor(evt.target.value)}
            multiple={false}
            name=""
            options={allInstructorsRedux}
            optionLabelKey="name"
            optionIdKey="id"
          />
          <InstructorUpdateForm instructor={selectedInstructor} />
        </Card>
      ) : (
        <></>
      )}
    </Container>
  )
}

export default withProtectedRoute(InstructorsDashboard, 'Admin')
