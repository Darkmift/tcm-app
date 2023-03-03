import {SLIDER_DATA} from '@/const'
import Video from '@/components/Video'
import MediaCarousel from '@/components/MediaCarousel'
import Container from '@mui/material/Container'

export default function Home() {
  return (
    <Container sx={{display: 'flex', flexDirection: 'column'}}>
      <MediaCarousel>
        {
          SLIDER_DATA.map((slide, index) => (
            <Video key={index} src={slide.image} />
          )) as any
        }
      </MediaCarousel>
    </Container>
  )
}
