import Container from '@mui/material/Container'
import React, {useEffect, useState} from 'react'
import {Grid, Typography} from '@mui/material'
import withProtectedRoute from '@/highOrderComponents/withProtectedRoute'
import {useAppSelector} from '@/store'
import {Project} from '@/types'
import SelectMultipleMUI from '@/components/forms/UI/SelectMultipleMUI'

function ProjectsIndex() {
  const selectedYear = useAppSelector((state) => state.years.selectedYear)
  const projectsRedux = useAppSelector((state) => state.projects.projects)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  useEffect(() => {
    if (!selectedProject && projectsRedux?.[0]) {
      setSelectedProject(projectsRedux[0])
    }
  }, [projectsRedux])

  const handleChange = ({
    target: {value},
  }: React.ChangeEvent<{value: unknown}>) => {
    console.log('🚀 ~ file: index.tsx:19 ~ handleChange ~ project:', value)
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography sx={{fontWeight: 900, fontSize: 35}} color="primary">
            PROJECT MANAGEMENT
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {projectsRedux?.length && selectedProject?.id ? (
            <SelectMultipleMUI
              multiple={false}
              value={selectedProject?.id}
              handleChange={handleChange}
              name="Project"
              options={projectsRedux}
              optionLabelKey="name"
              optionValueKey="id"
            />
          ) : (
            <Typography>
              There are no projects...please select another year
            </Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}

export default withProtectedRoute(ProjectsIndex, 'Admin')
