// redux
import {useAppDispatch} from '@/store'
import {fetchMedia} from '@/store/media.slice'
import {useEffect} from 'react'

function WatchMediaRedux() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchMedia())
  }, [dispatch])

  return <></>
}

export default WatchMediaRedux
