// redux
import {useAppSelector, useAppDispatch} from '@/store'
import {useEffect} from 'react'
import LocalStorageService from '@/Services/LocalStorageService'
import {logFromStorage} from '@/store/user.slice'
import {ROLE_LS_KEY, TOKEN_LS_KEY, USERNAME_LS_KEY} from '@/const'
import HttpService from '@/Services/HttpService'
import {fetchYears} from '@/store/thunks/year.thunk'
import {Role} from '@/types'
import {logout} from '@/store/thunks/user.thunk'

// handle session logic with localstorage etc
function WatchUserRedux() {
  const dispatch = useAppDispatch()
  const kickUser = useAppSelector((state) => state.auth.kickUser)
  // token,role,name set in HttpService->login

  useEffect(() => {
    HttpService.getMetada(2022)
      .then((data) => {
        console.log(
          '🚀 ~ file: _app.tsx:30 ~ HttpService.getMetadat ~ data:',
          data
        )
      })
      .catch((err) => {
        console.log(
          '🚀 ~ file: _app.tsx:35 ~ HttpService.getMetadat ~ err:',
          err
        )
      })
  }, [])

  useEffect(() => {
    dispatch(fetchYears())
    const token = LocalStorageService.get(TOKEN_LS_KEY)
    const role = LocalStorageService.get(ROLE_LS_KEY) as Role
    const username = LocalStorageService.get(USERNAME_LS_KEY)
    if (!!token && !!role && !!username) {
      dispatch(logFromStorage({role, username}))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    if (kickUser) {
      LocalStorageService.delete(TOKEN_LS_KEY)
      LocalStorageService.delete(ROLE_LS_KEY)
      LocalStorageService.delete(USERNAME_LS_KEY)
      dispatch(logout())
    }
  }, [kickUser, dispatch])
  return <></>
}

export default WatchUserRedux
