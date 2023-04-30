import SelectMultipleMUI2 from '@/components/forms/UI/SelectMultipleMUI2'
import WinningProjectForm from '@/components/forms/WinningProjectForm'
import WinningProjectUpdateForm from '@/components/forms/WinningProjectUpdateForm'
import GoBackBtn from '@/components/GoBackBtn'
import HttpService from '@/Services/HttpService'
import {useAppSelector} from '@/store'
import {Project, WinnerProject} from '@/types'
import {Card, Container, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'

type Props = {}

function WinningProjectsDashBoard({}: Props) {
  const selectedYearRedux = useAppSelector((state) => state.years.selectedYear)
  const [winningProjects, setWinningProjects] = useState<WinnerProject[]>([])
  const [selectedWinningProject, setSelectedWinningProject] =
    useState<WinnerProject>()
  const [refetchList, setRefetchList] = useState(false)

  useEffect(() => {
    HttpService.getAllWinnerProjects()
      .then((winnerProjects) => {
        console.log(
          '🚀 ~ file: index.tsx:21 ~ .then ~ winnerProjects:',
          winnerProjects
        )
        setWinningProjects(
          winnerProjects.filter((p) => p.year === '' + selectedYearRedux)
        )
        if (winnerProjects.length) {
          setSelectedWinningProject(winnerProjects[0])
        }
      })
      .catch((error) => {
        console.log(
          '🚀 ~ file: winningProjects.tsx:18 ~ useEffect ~ error:',
          error
        )

        setWinningProjects([])
      })
  }, [selectedYearRedux, refetchList])

  return (
    <Container sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <GoBackBtn />

      <Card raised sx={{p: 4}}>
        <Typography variant="h4">Add Winning Project</Typography>
        <WinningProjectForm />
      </Card>

      <Card raised sx={{p: 4}}>
        <Typography variant="h6">Select Winning Prjoect</Typography>
        {winningProjects?.length ? (
          <SelectMultipleMUI2
            value={selectedWinningProject || undefined}
            handleChange={(evt) => setSelectedWinningProject(evt.target.value)}
            multiple={false}
            name=""
            options={winningProjects}
            optionLabelKey="title"
            optionIdKey="id"
          />
        ) : (
          <Typography variant="h4">
            No projects for {selectedYearRedux}
          </Typography>
        )}
        {selectedWinningProject && (
          <>
            <Typography variant="h4">Update Winning Project</Typography>
            <WinningProjectUpdateForm
              triggerUpdate={() => setRefetchList((v) => !v)}
              winningProject={selectedWinningProject}
            />
          </>
        )}
      </Card>
    </Container>
  )
}

export default WinningProjectsDashBoard
