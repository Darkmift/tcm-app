import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import authReducer from './user.slice'
import yearsReducer from './year.slice'
import internshipReducer from './internships.slice'
import instructorsReducer from './instructors.slice'
import membersReducer from './member.slice'
import projectsReducer from './project.slice'
import projectMemberRelationReducer from './projectMemberRelation.slice'
import winnerProjectTypesReducer from './winnerProjectTypes.slice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    years: yearsReducer,
    internships: internshipReducer,
    instructors: instructorsReducer,
    members: membersReducer,
    projects: projectsReducer,
    projectMemberRelation: projectMemberRelationReducer,
    winnerProjectTypes: winnerProjectTypesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export default store

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type AppDispatch = typeof store.dispatch
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

store.subscribe(() => {
  const state = store.getState()
  console.log('🚀 ~ file: index.ts:24 ~ store.subscribe ~ state:', state)

  console.log('Years have changed!')
  // Do something here
})
