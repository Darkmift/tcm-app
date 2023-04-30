import BasicTable from '@/components/BasicTable'
import StudentForm from '@/components/forms/StudentForm'
import GoBackBtn from '@/components/GoBackBtn'
import HttpService from '@/Services/HttpService'
import {Container, Typography} from '@mui/material'
import {Http2ServerResponse} from 'http2'
import React, {useEffect, useState} from 'react'

type Props = {}

function ManageStudents({}: Props) {
  const [students, setStudents] = useState([])

  useEffect(() => {
    HttpService.getAllStudents()
      .then(({students}) => {
        console.log(
          '🚀 ~ file: manage-students.tsx:16 ~ .then ~ response:',
          students
        )
        setStudents(students)
      })
      .catch((error) => {
        console.error(
          '🚀 ~ file: manage-students.tsx:16 ~ HttpService.getAllStudents ~ error:',
          error
        )
        setStudents([])
      })
  }, [])

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        gap: '20px',
      }}
    >
      <GoBackBtn />
      <Typography variant="h4">Existing Users</Typography>
      <BasicTable dataset={students} />
      <Typography variant="h4">Add User</Typography>
      <StudentForm />
    </Container>
  )
}

export default ManageStudents
