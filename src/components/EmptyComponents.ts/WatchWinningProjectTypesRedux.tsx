// redux
import {useAppDispatch} from '@/store'
import {useEffect} from 'react'
import {fetchWinnerProjectTypes} from '@/store/winnerProjectTypes.slice'

function WatchWinningProjectTypesRedux() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchWinnerProjectTypes())
  }, [dispatch])

  return <></>
}

export default WatchWinningProjectTypesRedux
