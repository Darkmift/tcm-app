// redux
import {useAppDispatch, useAppSelector} from '@/store'
import {useEffect} from 'react'
import { getAllMembers } from '@/store/member.slice'

function WatchMembersRedux() {
  const dispatch = useAppDispatch()
  const selectedYearRedux = useAppSelector(state=>state.years.selectedYear)

  useEffect(() => {
    dispatch(getAllMembers())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYearRedux])

  return <></>
}

export default WatchMembersRedux
