// redux
import {useAppDispatch, useAppSelector} from '@/store'
import {useEffect} from 'react'
import { fetchAllInstructors } from '@/store/instructors.slice'

function WatchInstructorsRedux() {
  const dispatch = useAppDispatch()
  const selectedYearRedux = useAppSelector(state=>state.years.selectedYear)

  useEffect(() => {
    dispatch(fetchAllInstructors(selectedYearRedux))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYearRedux])

  return <></>
}

export default WatchInstructorsRedux
