// redux
import {useAppDispatch} from '@/store'
import {useEffect} from 'react'
import { fetchAllInstructors } from '@/store/instructors.slice'

function WatchInstructorsRedux() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllInstructors())
  }, [dispatch])

  return <></>
}

export default WatchInstructorsRedux
