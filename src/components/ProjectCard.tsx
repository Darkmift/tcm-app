/* eslint-disable @next/next/no-img-element */
// import Arrow from 'components/icons/ArrowLeft'
// import Image from 'components/Image'
// import Text from 'components/Text'
import styles from '../styles/ProjectCard.module.css'
// import {GiArchiveResearch, GiPodiumWinner} from 'react-icons/gi'
import Tooltip from '@mui/material/Tooltip'
import {useRouter} from 'next/router'
import {useMemo} from 'react'
import Link from 'next/link'
import {Box, Typography} from '@mui/material'
import Arrow from './icons/ArrowLeft'
import { useAppSelector } from '../store'
// import Link from 'components/Link'

// const iconsWinners = {
//   1: GiPodiumWinner,
//   2: GiArchiveResearch,
// }

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
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
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
        <img
          src={imgName}
          style={{height: '265px'}}
          className={styles['project-card-img']}
          alt={title}
        />
        <Typography
          sx={{display: 'flex', alignSelf: 'flex-start', alignItems: 'center'}}
        >
          <span>{title} </span>
          <Arrow className={''} width={25} height={25} />
        </Typography>
      </Box>
    </Link>
  )
}

export default ProjectCard
