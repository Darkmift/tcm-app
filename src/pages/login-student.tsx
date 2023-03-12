import FormToJson from '@/components/FormToJson'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import React, {useEffect, useState} from 'react'
import {Typography} from '@mui/material'
import {useAppDispatch, useAppSelector} from '@/store'
import {useRouter} from 'next/router'
import LoadingButton from '@mui/lab/LoadingButton'
import {login, loginStudent} from '@/store/user.slice'
import {FormData} from '../types'

const formItems: FormData[] = [
  {
    name: 'username',
    placeholder: 'username',
    Component: TextField,
  },
  {
    name: 'password',
    placeholder: 'password',
    type: 'password',
    Component: TextField,
  },
]

const InitialState = {
  message: '',
  username: '',
  password: '',
}

function LoginStudentPage() {
  const dispatch = useAppDispatch()
  const statusRedux = useAppSelector((state) => state.auth.status === 'loading')
  const isLoggedInRedux = useAppSelector((state) => state.auth.isLoggedIn)
  const router = useRouter()

  const [errors, setErrors] = useState(InitialState)

  useEffect(() => {
    if (isLoggedInRedux) {
      router.push('/')
    }
  }, [isLoggedInRedux, router])

  const logUserIn = ({
    username,
    password,
  }: {
    username: string
    password: string
  }) => {
    dispatch(loginStudent({username, password}))
      .unwrap()
      .then((data: any) => {
        console.log('🚀 ~ file: index.tsx:51 ~ .then ~ data:', data)
        setErrors(InitialState)
      })
      .catch((error: Error) => {
        setErrors((v) => ({...v, message: error.message}))
        console.log('🚀 ~ file: index.tsx:54 ~ .then ~ error:', error)
      })
  }

  return (
    <Container onClick={() => setErrors(InitialState)}>
      <Typography sx={{ml: 3, fontWeight: 900, fontSize: 35}} color="primary">
        STUDENT LOGIN
      </Typography>

      <FormToJson
        formData={formItems}
        submitHandler={logUserIn}
        formButton={
          <LoadingButton
            variant="contained"
            loading={statusRedux}
            loadingIndicator="Loading…"
            type="submit"
          >
            Log In
          </LoadingButton>
        }
      />

      {errors.message && (
        <Typography variant="h6" sx={{mt: 3}} color="red" align="center">
          {errors.message}
        </Typography>
      )}
    </Container>
  )
}

export default LoginStudentPage
