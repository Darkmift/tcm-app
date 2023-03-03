import styles from '../styles/Video.module.css'
import Container from '@mui/material/Container'

type Props = {src: string}

function Video({src}: Props) {
  return (
    <Container
      component={'iframe'}
      className={styles['video-frame']}
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

export default Video
