import {SLIDER_DATA} from '@/const'
import Video from '@/components/Video'
import MediaCarousel from '@/components/MediaCarousel'
import Container from '@mui/material/Container'
import {useAppSelector} from '../store'
import {Grid} from '@mui/material'
import Image from 'next/image'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  const projectsRedux = useAppSelector((state) => state.projects.projects)
  const pathImage = '/projects/'
  return (
    <Container sx={{display: 'flex', flexDirection: 'column'}}>
      <MediaCarousel>
        {
          SLIDER_DATA.map((slide, index) => (
            <Video key={index} src={slide.image} />
          )) as any
        }
      </MediaCarousel>
      <Grid container spacing={2} p={3}>
        {projectsRedux?.length &&
          projectsRedux.map((project, key) => (
            <Grid item key={key} xs={12} sm={6} md={4} lg={4}>
              <ProjectCard
                id={project.id}
                title={project.name}
                imgName={pathImage + project.image}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  )
}
