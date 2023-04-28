import MediaAddForm from '@/components/forms/MediaForm'
import MediaUpdateForm from '@/components/forms/MediaUpdateForm'
import SelectMultipleMUI2 from '@/components/forms/UI/SelectMultipleMUI2'
import GoBackBtn from '@/components/GoBackBtn'
import {useAppSelector} from '@/store'
import {Media} from '@/types'
import {Card, Container, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'

type Props = {}

function MediaDashboard({}: Props) {
  const mediaRedux = useAppSelector((state) => state.media.media)
  const [mediaToUpdate, setMediaToUpdate] = useState<Media>(mediaRedux[0])

  useEffect(() => {
    if (!mediaToUpdate) {
      mediaRedux?.length && setMediaToUpdate(mediaRedux[0])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaRedux])

  return (
    <Container sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <GoBackBtn />

      <Card raised sx={{p: 4}}>
        <Typography variant="h4">Add Link</Typography>
        <MediaAddForm />
      </Card>

      {mediaToUpdate && (
        <Card raised sx={{p: 4}}>
          <Typography variant="h6">Select Link</Typography>
          <SelectMultipleMUI2
            value={mediaToUpdate}
            handleChange={(evt) => setMediaToUpdate(evt.target.value)}
            multiple={false}
            name=""
            options={mediaRedux}
            optionLabelKey="heading"
            optionIdKey="id"
          />
          <Typography variant="h4">Update Link</Typography>
          {mediaToUpdate && <MediaUpdateForm media={mediaToUpdate} />}
        </Card>
      )}
    </Container>
  )
}

export default MediaDashboard
