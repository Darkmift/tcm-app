import styles from '@/styles/InstructorCard.module.css'
import {useDispatch} from 'react-redux'
import {Box, Typography} from '@mui/material'
import {IMAGE_ASSETS_FOLDER_PATH} from '@/const'
import Image from 'next/image'

type Props = {
  imgName: string
  title: string
  description: string
}

function InstructorCard({imgName, title, description}: Props) {
  const pathImage = IMAGE_ASSETS_FOLDER_PATH + '/instructors/'
  const dispatch = useDispatch()
  const onOpenInstructorModal = () => {}
  return (
    <Box
      onClick={onOpenInstructorModal}
      sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
    >
      <div className={styles['second-img-border']}>
        <div className={styles['img-border']}>
          <Image
            width={500}
            height={500}
            src={pathImage + (imgName ? imgName : 'default-instructor-img.jpg')}
            alt={title}
          />
        </div>
      </div>
      <Typography variant="h6" align="center">
        {title}
      </Typography>
    </Box>
  )
}

export default InstructorCard
