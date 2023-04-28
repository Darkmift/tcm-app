import GoBackBtn from '@/components/GoBackBtn'
import InternShipForm from '@/components/forms/InternshipForm'
import InternShipUpdateForm from '@/components/forms/InternshipUpdateForm'
import SelectMultipleMUI2 from '@/components/forms/UI/SelectMultipleMUI2'
import withProtectedRoute from '@/highOrderComponents/withProtectedRoute'
import {useAppSelector} from '@/store'
import {Internship} from '@/types'
import {Card, Container, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'

type Props = {}

function InternshipDashboard({}: Props) {
  const selectedYear = useAppSelector((state) => state.years.selectedYear)
  const internshipsRedux = useAppSelector(
    (state) => state.internships.internships
  )

  const [selectedInternship, setSelectedInternship] =
    useState<Internship | null>(null)

  useEffect(() => {
    if (selectedInternship) {
      const intenrship = internshipsRedux.find(
        (i) => selectedInternship.id === i.id
      )
      if (intenrship?.id) {
        setSelectedInternship(intenrship)
      }
    } else if (internshipsRedux?.[0]) {
      setSelectedInternship(internshipsRedux[0])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [internshipsRedux])

  useEffect(() => {
    console.log(
      '🚀 ~ file: index.tsx:33 ~ InternshipDashboard ~ selectedInternship:',
      selectedInternship
    )
  }, [selectedInternship])

  return (
    <Container sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <GoBackBtn />
      <Card raised sx={{p: 4}}>
        <Typography variant="h4">Add Internship Form</Typography>
        <InternShipForm />
      </Card>

      {!internshipsRedux?.length && (
        <Card raised sx={{p: 4}}>
          <Typography variant="h6">
            There are no internships for {selectedYear}
          </Typography>
        </Card>
      )}

      {internshipsRedux?.length && selectedInternship ? (
        <Card raised sx={{p: 4}}>
          <Typography variant="h4">Edit Internship Form</Typography>
          <SelectMultipleMUI2
            value={selectedInternship}
            handleChange={(evt) => setSelectedInternship(evt.target.value)}
            multiple={false}
            name=""
            options={internshipsRedux}
            optionLabelKey="name"
            optionIdKey="id"
          />
          <InternShipUpdateForm internship={selectedInternship} />
        </Card>
      ) : (
        <></>
      )}
    </Container>
  )
}

export default withProtectedRoute(InternshipDashboard, 'Admin')
