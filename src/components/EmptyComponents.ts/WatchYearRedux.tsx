// redux
import {useAppDispatch} from '@/store'
import {useEffect} from 'react'
import {fetchYears} from '@/store/thunks/year.thunk'

function WatchYearRedux() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchYears())
  }, [dispatch])

  return <></>
}

export default WatchYearRedux
