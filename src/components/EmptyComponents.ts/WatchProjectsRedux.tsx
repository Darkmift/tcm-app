// redux
import {useAppDispatch, useAppSelector} from '@/store'
import {useEffect} from 'react'
import {fetchProjects} from '@/store/project.slice'

function WatchProjectsRedux() {
  const dispatch = useAppDispatch()
  const selectedYear = useAppSelector((state) => state.years.selectedYear)

  useEffect(() => {
    dispatch(fetchProjects(selectedYear))
  }, [dispatch, selectedYear])

  return <></>
}

export default WatchProjectsRedux
