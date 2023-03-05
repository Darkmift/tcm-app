import {useRouter} from 'next/router'
import React from 'react'
import {useAppSelector} from '../../../../store'
import {selectProjectById} from '../../../../store/project.slice'
import styles from '../../../../styles/ProjectPage.module.css'
import Image from 'next/image'
import {Typography} from '@mui/material'

type Props = {}

function ProjectIndex({}: Props) {
  const router = useRouter()
  const projectId = router.query.project
  const project = useAppSelector(selectProjectById(projectId as string))
  console.log("🚀 ~ file: [project].tsx:15 ~ ProjectIndex ~ project:", project)

  const internship = project?.expand?.internshipId
  const instructor = project?.expand?.instructorId
  // const intenrShip = useAppSelector(selectProjectById(projectId as string))
  // return <div>{project?.id}</div>
  const pathImage = '/projects/'
  return (
    <>
      {project && (
        <div className={styles['project-container']}>
          <Image
            src={pathImage + project.image}
            alt={project.name}
            width="400"
            height="480"
          />
          <div className={styles['project-section']}>
            <Typography>{project.name} </Typography>
            <p>{project.description} </p>
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
              {project.members &&
                project.members.map((member) => {
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
