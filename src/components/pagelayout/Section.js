import React from 'react'
import styles from '../../styles/components/Section.module.scss'

export default function Section(props) {
  return (
      <div className={styles.page_section}>
          {props.children}
    </div>
  )
}
