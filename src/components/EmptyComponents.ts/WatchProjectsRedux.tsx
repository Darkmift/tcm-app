// redux
import {useAppDispatch} from '@/store'
import {useEffect} from 'react'
import { fetchProjects } from '@/store/project.slice'

function WatchProjectsRedux() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProjects())
  }, [dispatch])

  return <></>
}

export default WatchProjectsRedux
