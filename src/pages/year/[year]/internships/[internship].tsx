import styles from '@/styles/Internships.module.css'

import {useAppDispatch, useAppSelector} from '@/store'
import {setSelectedInternship} from '@/store/internships.slice'
import {Box, Container, Grid, Typography} from '@mui/material'
import {useRouter} from 'next/router'
import React, {useEffect} from 'react'
import Image from 'next/image'
import {IMAGE_ASSETS_FOLDER_PATH} from '@/const'
import ProjectCard from '@/components/ProjectCard'

function Internship() {
  const pathImage = IMAGE_ASSETS_FOLDER_PATH + '/instructors/'
  const router = useRouter()
  const {
    query: {internship: internshipId, year},
  } = router
  const internshipImagePath = IMAGE_ASSETS_FOLDER_PATH + '/internships/'
  const projectImagePath = IMAGE_ASSETS_FOLDER_PATH + '/projects/'
  const dispatch = useAppDispatch()
  const selectedInternshipRedux = useAppSelector(
    (state) => state.internships.selectedInternship
  )
  const projectsRedux = useAppSelector((state) =>
    state.projects.projects.filter(
      (p) => p.internshipId === selectedInternshipRedux?.id
    )
  )
  const selectedYearRedux = useAppSelector((state) => state.years.selectedYear)

  useEffect(() => {
    if (internshipId?.length) {
      dispatch(setSelectedInternship(internshipId as string))
    } else {
      router.back()
    }
  }, [internshipId, router, dispatch])

  return (
    <Container>
      {!!selectedInternshipRedux && (
        <>
          <Box className={styles['internships_img']}>
            <Image
              src={internshipImagePath + selectedInternshipRedux.image}
              alt={selectedInternshipRedux.name}
              width={150}
              height={80}
            />
          </Box>
          <Typography
            variant="h6"
            px={1}
            sx={{borderLeft: '5px solid #2474e4', marginBottom: '10px'}}
          >
            {selectedInternshipRedux.name}
          </Typography>

          {selectedInternshipRedux.instructors.length ? (
            <Grid
              container
              spacing={2}
              p={2}
              sx={{display: 'flex', flexDirection: 'column'}}
            >
              <Typography
                variant="h6"
                px={1}
                sx={{
                  borderLeft: '5px solid #2474e4',
                  marginBottom: '10px',
                }}
              >
                Instructors
              </Typography>
              {selectedInternshipRedux.instructors.map(
                (selectedInstructor, key) => (
                  <Grid item key={key} xs={12} sm={6} md={4} lg={4}>
                    <Box p={2} sx={{display: 'flex', gap: '20px'}}>
                      <Box sx={{minWidth: '33%'}}>
                        <Image
                          src={
                            selectedInstructor.image
                              ? selectedInstructor.image
                              : pathImage + 'default-instructor-img.jpg'
                          }
                          alt={selectedInstructor.name}
                          width={100}
                          height={120}
                        />
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          px={1}
                          sx={{
                            borderLeft: '5px solid #2474e4',
                            marginBottom: '10px',
                          }}
                        >
                          {selectedInstructor.name}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                )
              )}
            </Grid>
          ) : (
            <Typography>
              There are no projects associated with{' '}
              {selectedInternshipRedux.name} in {selectedYearRedux}
            </Typography>
          )}

          {projectsRedux.length ? (
            <Grid
              container
              spacing={2}
              p={3}
              sx={{display: 'flex', flexDirection: 'column'}}
            >
              <Typography
                variant="h6"
                px={1}
                sx={{
                  borderLeft: '5px solid #2474e4',
                  marginBottom: '10px',
                }}
              >
                Projects
              </Typography>
              <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                {projectsRedux.map((project, key) => (
                  <Grid item key={project.id} xs={12} sm={6} md={4} lg={4}>
                    <ProjectCard
                      id={project.id}
                      title={project.name}
                      imgName={projectImagePath + project.image}
                    />
                  </Grid>
                ))}
              </Box>
            </Grid>
          ) : (
            <Typography>
              There are no projects associated with{' '}
              {selectedInternshipRedux.name} in {selectedYearRedux}
            </Typography>
          )}
        </>
      )}
    </Container>
  )
}

export default Internship
