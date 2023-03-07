// redux
import {useAppDispatch, useAppSelector} from '@/store'
import {useEffect} from 'react'
import {fetchInternships} from '@/store/internships.slice'

function WatchInternshipsRedux() {
  const dispatch = useAppDispatch()
  const selectedYearRedux = useAppSelector(state=>state.years.selectedYear)

  useEffect(() => {
    dispatch(fetchInternships(selectedYearRedux))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYearRedux])

  return <></>
}

export default WatchInternshipsRedux
