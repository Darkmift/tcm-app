import HttpService from '@/Services/HttpService'
import BasicTable from '@/components/BasicTable'
import GoBackBtn from '@/components/GoBackBtn'
import {RegisterResult} from '@/types'
import {LoadingButton} from '@mui/lab'

import {Container, TextField, Typography} from '@mui/material'

import React, {useState} from 'react'

type Props = {}

function CreateUsersFromCsv({}: Props) {
  const [csvData, setCsvData] = useState<
    {projectId: string; password: string}[]
  >([])
  const [studentsCreated, setStudentsCreated] = useState<RegisterResult>([])

  const [loading, setLoading] = useState(false)

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const fileList = event.target.files
    if (!fileList) return

    // assuming there's only one file
    const file = fileList[0]

    const reader = new FileReader()
    reader.onload = (event) => {
      const csvContent = event.target!.result as string
      const rows = csvContent.trim().split('\n').splice(1) // exclude first row

      const result = rows.map((row) => {
        const [projectId, password] = row.replace('\r', '').split(',')
        return {projectId, password: password}
      })

      setCsvData(result)
    }

    reader.readAsText(file)
  }

  const createUsers = async () => {
    try {
      setLoading(true)
      const results = []
      for await (const row of csvData) {
        const registerAttemptResult = await HttpService.registerStudent({
          username: row.projectId,
          password: row.password,
        })
        results.push({
          id: registerAttemptResult?.id,
          username: registerAttemptResult?.username,
          password: registerAttemptResult?.password,
          created: !!registerAttemptResult,
        })
      }
      setStudentsCreated(results)
    } catch (error) {
      console.log(
        '🚀 ~ file: create-users-from-csv.tsx:52 ~ createUsers ~ error:',
        error
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <GoBackBtn />
      <Typography variant="h4">Create Students From Csv</Typography>
      <TextField
        name="Csv File Upload"
        type="file"
        inputProps={{accept: '.csv'}}
        onChange={handleFileInputChange}
      />

      {csvData?.length ? (
        <LoadingButton
          variant="contained"
          loading={loading}
          loadingIndicator="Loading…"
          type="submit"
          onClick={createUsers}
        >
          Create Students from csv
        </LoadingButton>
      ) : (
        <>&nbsp;</>
      )}
      {/* Display parsed CSV data */}
      {csvData?.length ? (
        <>
          <Typography variant="h4">CSV ROWS</Typography>
          <BasicTable dataset={csvData} />
        </>
      ) : (
        <></>
      )}

      {studentsCreated?.length ? (
        <>
          <Typography variant="h4">New Users</Typography>
          <BasicTable dataset={studentsCreated} />
        </>
      ) : (
        <></>
      )}
    </Container>
  )
}

export default CreateUsersFromCsv
