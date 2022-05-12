import React from 'react'

import styles from '../../styles/components/ReadMoreBtn.module.scss'

export default function ReadMoreBtnOut(props) {
  return (
      <button className={styles.btn_special}>
          <a href={props.srcUrl} target='_blank'>
              {props.title}
          </a>
      </button>
  )
}
