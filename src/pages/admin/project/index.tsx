import Container from '@mui/material/Container'
import React, {useEffect, useState} from 'react'
import {Card, Grid, Typography} from '@mui/material'
import withProtectedRoute from '@/highOrderComponents/withProtectedRoute'
import {useAppSelector} from '@/store'
import {Project} from '@/types'
import SelectMultipleMUI2 from '@/components/forms/UI/SelectMultipleMUI2'
import ProjectForm from '@/components/forms/ProjectForm'
import ProjectUpdateForm from '@/components/forms/ProjectUpdateForm'
import GoBackBtn from '@/components/GoBackBtn'

function ProjectsIndex() {
  const selectedYear = useAppSelector((state) => state.years.selectedYear)
  const projectsRedux = useAppSelector((state) => state.projects.projects)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  useEffect(() => {
    if (!selectedProject && projectsRedux?.[0]) {
      setSelectedProject(projectsRedux[0])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectsRedux])

  return (
    <Container sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <GoBackBtn />
      <Card raised sx={{p: 4}}>
        <Typography variant="h4">Add Project Form</Typography>
        <ProjectForm />
      </Card>

      {!projectsRedux?.length && (
        <Card raised sx={{p: 4}}>
          <Typography variant="h6">
            There are no projects for {selectedYear}
          </Typography>
        </Card>
      )}

      {projectsRedux?.length && selectedProject ? (
        <Card raised sx={{p: 4}}>
          <Typography variant="h4">Edit Project Form</Typography>
          <SelectMultipleMUI2
            value={selectedProject}
            handleChange={(evt) => setSelectedProject(evt.target.value)}
            multiple={false}
            name=""
            options={projectsRedux}
            optionLabelKey="name"
            optionIdKey="id"
          />
          <ProjectUpdateForm project={selectedProject} />
        </Card>
      ) : (
        <></>
      )}
    </Container>
  )
}

export default withProtectedRoute(ProjectsIndex, 'Admin')
