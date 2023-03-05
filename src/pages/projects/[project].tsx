import {useRouter} from 'next/router'
import React from 'react'
import {useAppSelector} from '../../store'
import {selectProjectById} from '../../store/project.slice'

type Props = {}

function ProjectIndex({}: Props) {
  const router = useRouter()
  const projectId = router.query.project
  console.log('🚀 ~ file: [project].tsx:10 ~ ProjectIndex ~ router:', router)
  const project = useAppSelector(selectProjectById(projectId as string))
  return <div>{project?.id}</div>
}

export default ProjectIndex
