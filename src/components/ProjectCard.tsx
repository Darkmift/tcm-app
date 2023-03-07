import styles from '../styles/ProjectCard.module.css'
import Tooltip from '@mui/material/Tooltip'
import {useMemo} from 'react'
import Link from 'next/link'
import {Box, Typography} from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import {useAppSelector} from '../store'

type Prop = {
  id: string
  title: string
  imgName: string
  projectWinner?: any
}

function ProjectCard({id, title, imgName, projectWinner}: Prop) {
  const Icon = useMemo(
    () => projectWinner /*&& iconsWinners[projectWinner.id]*/,
    [projectWinner]
  )
  const selectedYear = useAppSelector((state) => state.years.selectedYear)

  return (
    <Link href={`/year/${selectedYear}/projects/${id}`}>
      <Box
        sx={{
          transition: 'all .4s ease-in-out',
          backgroundColor:'white',
          backgroundImage: `url(${imgName})`,
          height: '275px',
          backgroundSize: '350px 275px',
          backgroundRepeat: 'no-repeat',
          width: '350px',
          objectFit: 'fill',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'end',
          '&:hover': {transform: 'scale(1.05)'},
        }}
      >
        {projectWinner && Icon && (
          <Tooltip title={projectWinner.name}>
            <span
              data-id={projectWinner.id}
              className={styles['project-icon_winner']}
            >
              {Icon()}
            </span>
          </Tooltip>
        )}
        <Typography
          sx={{
            display: 'flex',
            alignSelf: 'flex-start',
            marginBottom: '30px',
            backgroundColor: 'rgba(62,62,60,0.6)',
            borderLeft: '0.5rem solid #2474e4',
          }}
        >
          <span style={{color: 'white', margin: '0 20px 0 15px'}}>{title}</span>
          <ArrowForwardIosIcon sx={{backgroundColor: 'white'}} />
        </Typography>
      </Box>
    </Link>
  )
}

export default ProjectCard
