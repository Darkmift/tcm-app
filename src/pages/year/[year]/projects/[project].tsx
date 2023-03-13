import {useRouter} from 'next/router'
import React, {useEffect} from 'react'
import {useAppSelector} from '../../../../store'
import {selectProjectById} from '../../../../store/project.slice'
import styles from '../../../../styles/ProjectPage.module.css'
import Image from 'next/image'
import {Typography} from '@mui/material'
import {IMAGE_ASSETS_FOLDER_PATH} from '@/const'
import ProjectUpdateForm from '@/components/forms/ProjectUpdateForm'
import GoBackBtn from '@/components/GoBackBtn'

type Props = {}

function ProjectIndex({}: Props) {
  const router = useRouter()
  const projectId = router.query.project
  const projectRedux = useAppSelector(selectProjectById(projectId as string))
  const usernameRedux = useAppSelector((state) => state.auth.username)
  const internship = projectRedux?.expand?.internshipId
  const instructor = projectRedux?.expand?.instructorId

  const pathImage = IMAGE_ASSETS_FOLDER_PATH + '/projects/'
  const alternatePath = pathImage + 'default-project-img.jpg'

  useEffect(() => {
    if (!!projectRedux?.id === false) {
      router.back()
    }
  }, [projectRedux, router])
  return (
    <>
      <GoBackBtn />
      {projectRedux && (
        <div className={styles['project-container']}>
          <Image
            src={(projectRedux.image as string) || alternatePath}
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

      {projectRedux && usernameRedux === projectRedux.id ? (
        <ProjectUpdateForm
          project={projectRedux}
          studentUsername={usernameRedux}
        />
      ) : (
        <></>
      )}
    </>
  )
}

export default ProjectIndex
