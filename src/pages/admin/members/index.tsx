import MemberForm from '@/components/forms/MemberForm'
import MemberUpdateForm from '@/components/forms/MemberUpdateForm'
import SelectMultipleMUI2 from '@/components/forms/UI/SelectMultipleMUI2'
import {useAppSelector} from '@/store'
import {Member} from '@/types'
import {Card, Container, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'

type Props = {}

function MembersDashboard({}: Props) {
  const membersRedux = useAppSelector((state) => state.members.members)
  const [memberToUpdate, setMemberToUpdate] = useState<Member>(membersRedux[0])

  useEffect(() => {
    if (!memberToUpdate && membersRedux?.length) {
      setMemberToUpdate(membersRedux[0])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [membersRedux])

  return (
    <Container sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <Card raised sx={{p: 4}}>
        <Typography variant="h4">Add Member Form</Typography>
        <MemberForm />
      </Card>
      {memberToUpdate && (
        <Card raised sx={{p: 4}}>
          <Typography variant="h4">Edit Member Form</Typography>
          <SelectMultipleMUI2
            value={memberToUpdate}
            handleChange={(evt) => setMemberToUpdate(evt.target.value)}
            multiple={false}
            name=""
            options={membersRedux}
            optionLabelKey="name"
            optionIdKey="id"
          />
          <MemberUpdateForm member={memberToUpdate} />
        </Card>
      )}
    </Container>
  )
}

export default MembersDashboard
