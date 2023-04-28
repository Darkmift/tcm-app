import {IMAGE_ASSETS_FOLDER_PATH, SLIDER_DATA} from '@/const'
import Video from '@/components/Video'
import MediaCarousel from '@/components/MediaCarousel'
import Container from '@mui/material/Container'
import {useAppDispatch, useAppSelector} from '../store'
import {Grid, Typography} from '@mui/material'
import ProjectCard from '../components/ProjectCard'
import NavbarDropDown from '../components/layout/navbarDropDown'
import {useMemo} from 'react'
import {FunctionWithOptionalPayload, LinkConfig, NavBarClick} from '../types'
import {setYear} from '../store/year.slice'

export default function Home() {
  const pathImage = IMAGE_ASSETS_FOLDER_PATH + '/projects/'
  const dispatch = useAppDispatch()
  const yearsRedux = useAppSelector((state) => state.years.years)

  const projectsRedux = useAppSelector((state) => state.projects.projects)
  const mediaRedux = useAppSelector((state) => state.media.media)
  const selectedYearRedux = useAppSelector((state) => state.years.selectedYear)

  const yearsAsRoutes = useMemo(
    () =>
      yearsRedux.map((y) => ({
        name: y.year + '',
        pathTo: `/year/${y.year}`,
        id: y.id,
      })),
    [yearsRedux]
  )

  const handleYearNavigation: FunctionWithOptionalPayload<
    LinkConfig,
    NavBarClick
  > = (payload, evt) => {
    if (evt?.preventDefault) {
      evt.preventDefault()
    }
    if (payload?.name) {
      dispatch(setYear(payload.name))
    }
  }

  return (
    <Container sx={{display: 'flex', flexDirection: 'column'}}>
      {mediaRedux?.length ? (
        <MediaCarousel>
          {
            mediaRedux.map((slide, index) => (
              <Video key={index} src={slide.url} />
            )) as any
          }
        </MediaCarousel>
      ) : (
        <>No Media</>
      )}
      <Grid container spacing={2} p={3}>
        {projectsRedux?.length ? (
          projectsRedux.map((project, key) => (
            <Grid item key={key} xs={12} sm={6} md={4} lg={4}>
              <ProjectCard
                id={project.id}
                title={project.name}
                imgName={project.image as string}
              />
            </Grid>
          ))
        ) : (
          <Grid container spacing={2} p={3}>
            <Grid item xs={12}>
              <Typography align="center" variant="h3">
                There are No Projects for {selectedYearRedux}
              </Typography>
            </Grid>

            <Grid container item xs={12}>
              <Grid item xs={4}></Grid>
              <Grid item xs={8}>
                <NavbarDropDown
                  links={yearsAsRoutes}
                  btnVariant="contained"
                  sx={{
                    menuItem: {
                      display: 'flex',
                      width: '25vw',
                      py: 1,
                      justifyContent: 'center',
                      gap: '15px',
                    },
                    btn: {
                      color: 'white',
                      fontWeight: 400,
                      alignSelf: 'center',
                      width: '50%',
                      textAlign: 'center',
                      py: 2,
                      mx: 1,
                      my: 1,
                      display: 'block',
                    },
                    box: {py: 2},
                  }}
                  dropDownName="YEARS"
                  onDropDownOptionClick={handleYearNavigation}
                />
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Container>
  )
}
