import InstructorCard from '@/components/InstructorCard'
import ProjectCard from '@/components/ProjectCard'
import {IMAGE_ASSETS_FOLDER_PATH} from '@/const'
import HttpService from '@/Services/HttpService'
import {useAppSelector} from '@/store'
import {WinnerProject} from '@/types'
import {Box, Container, Grid, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'

function WinningProjects() {
  const selectedYearRedux = useAppSelector((state) => state.years.selectedYear)
  const [winningProjects, setWinningProjects] = useState<WinnerProject[]>([])

  useEffect(() => {
    HttpService.getAllWinnerProjects()
      .then((winnerProjects) => {
        setWinningProjects(
          winnerProjects.filter((p) => p.year === '' + selectedYearRedux)
        )
      })
      .catch((error) => {
        console.log(
          '🚀 ~ file: winningProjects.tsx:18 ~ useEffect ~ error:',
          error
        )

        setWinningProjects([])
      })
  }, [selectedYearRedux])

  return (
    <Container sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <Typography variant="h6">Winning Projects</Typography>

      {winningProjects.length ? (
        winningProjects.map((project: WinnerProject, index: number) => (
          <Box key={index}>
            <ProjectCard
              id={project.expand.projectId.id}
              title={project.title}
              imgName={
                project.expand.projectId.imageUrl ||
                (project.expand.projectId.image as string)
              }
              projectWinner={''}
            />
          </Box>
        ))
      ) : (
        <Typography align="center" variant="h3">
          There are No Projects for {selectedYearRedux}
        </Typography>
      )}
    </Container>
  )
}

export default WinningProjects
