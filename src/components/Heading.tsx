import React from 'react'
import styles from '../styles/Heading.module.css'

const validHeadingLevels = ['1', '2', '3', '4', '5', '6']

interface HeadingProps {
  children: React.ReactNode
  level: '1' | '2' | '3' | '4' | '5' | '6'
  className?: string
}

function Heading({children, level, className}: HeadingProps) {
  const tagName = validHeadingLevels.includes(level) ? 'h' + level : 'h2'

  return React.createElement(
    tagName,
    {className: `${className} ${styles.heading}`},
    children
  )
}

Heading.defaultProps = {
  level: '2',
  className: '',
}

export default Heading
