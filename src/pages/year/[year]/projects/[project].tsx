import {useRouter} from 'next/router'
import React, {useEffect} from 'react'
import {useAppSelector} from '../../../../store'
import {selectProjectById} from '../../../../store/project.slice'
import styles from '../../../../styles/ProjectPage.module.css'
import Image from 'next/image'
import {Typography} from '@mui/material'
import {IMAGE_ASSETS_FOLDER_PATH} from '@/const'

type Props = {}

function ProjectIndex({}: Props) {
  const router = useRouter()
  const projectId = router.query.project
  const projectRedux = useAppSelector(selectProjectById(projectId as string))
  const internship = projectRedux?.expand?.internshipId
  const instructor = projectRedux?.expand?.instructorId
  // const intenrShip = useAppSelector(selectProjectById(projectId as string))
  // return <div>{project?.id}</div>
  const pathImage = IMAGE_ASSETS_FOLDER_PATH + '/projects/'

  useEffect(() => {
    if (!!projectRedux?.id === false) {
      router.back()
    }
  }, [projectRedux, router])
  return (
    <>
      {projectRedux && (
        <div className={styles['project-container']}>
          <Image
            src={pathImage + projectRedux.image}
            alt={projectRedux.name}
            width="400"
            height="480"
          />
          <div className={styles['project-section']}>
            <Typography>{projectRedux.name} </Typography>
            <p>{projectRedux.description} </p>
            <p>
              <span className={styles['title']}>Internship: </span>
              {internship?.name || 'Unknown'}{' '}
            </p>
            <p>
              <span className={styles['title']}>Instructor: </span>
              {instructor?.name || 'Unknown'}{' '}
            </p>
            <div className={styles['members-container']}>
              <span className={styles['title']}>Members :</span>
              {projectRedux.members &&
                projectRedux.members.map((member) => {
                  return (
                    <div
                      key={member.name}
                      className={styles['member-container']}
                    >
                      <Typography>{member.name}</Typography>
                      <a
                        className={styles['link']}
                        href={`mailto:${member.email}`}
                      >
                        {member.email}
                      </a>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectIndex
