// redux
import {useAppDispatch} from '@/store'
import {useEffect} from 'react'
import LocalStorageService from '@/Services/LocalStorageService'
import {logFromStorage} from '@/store/user.slice'
import {ROLE_LS_KEY, TOKEN_LS_KEY, USERNAME_LS_KEY} from '@/const'
import {Role} from '@/types'

// handle session logic with localstorage etc
function WatchUserRedux() {
  const dispatch = useAppDispatch()

  // login from LS on app load
  useEffect(() => {
    const token = LocalStorageService.get(TOKEN_LS_KEY)
    const role = LocalStorageService.get(ROLE_LS_KEY) as Role
    const username = LocalStorageService.get(USERNAME_LS_KEY)
    if (!!token && !!role && !!username) {
      dispatch(logFromStorage({role, username}))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <></>
}

export default WatchUserRedux
