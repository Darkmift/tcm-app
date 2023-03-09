import SelectMultipleMUI2 from '@/components/forms/UI/SelectMultipleMUI2'
import YearForm from '@/components/forms/YearForm'
import YearUpdateForm from '@/components/forms/YearUpdateForm'
import withProtectedRoute from '@/highOrderComponents/withProtectedRoute'
import {useAppSelector} from '@/store'
import {Year} from '@/types'
import {Card, Container, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'

type Props = {}

function YearAdd({}: Props) {
  const yearsRedux = useAppSelector((state) => state.years.years)
  const [yearToUpdate, setYearToUpdate] = useState<Year>(yearsRedux[0])

  useEffect(() => {
    if (!yearToUpdate) {
      yearsRedux?.length && setYearToUpdate(yearsRedux[0])
    }
  }, [yearsRedux])

  useEffect(() => {
    console.log(
      '🚀 ~ file: index.tsx:15 ~ YearAdd ~ yearToUpdate:',
      yearToUpdate
    )
  }, [yearToUpdate])

  return (
    <Container sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <Card raised sx={{p: 4}}>
        <Typography variant="h4">Add Year</Typography>
        <YearForm />
      </Card>

      {yearToUpdate && (
        <Card raised sx={{p: 4}}>
          <Typography variant="h6">Select year</Typography>
          <SelectMultipleMUI2
            value={yearToUpdate}
            handleChange={(evt) => setYearToUpdate(evt.target.value)}
            multiple={false}
            name=""
            options={yearsRedux}
            optionLabelKey="year"
            optionIdKey="id"
          />
          <Typography variant="h4">Update Year</Typography>
          <YearUpdateForm year={yearToUpdate} />
        </Card>
      )}
    </Container>
  )
}

export default withProtectedRoute(YearAdd, 'Admin')
