// redux
import {useAppDispatch} from '@/store'
import {useEffect} from 'react'
import {fetchInternships} from '@/store/internships.slice'

function WatchInternshipsRedux() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchInternships())
  }, [dispatch])

  return <></>
}

export default WatchInternshipsRedux
