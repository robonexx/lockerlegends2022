import React from 'react';
import Image from 'next/image';
import { pioneers } from '../../content/pioneers';
import styles from '../../styles/components/Hof.module.scss';

// styles

export default function Hof() {
  return (
    <div className={styles.hof_wrapper}>
      {pioneers.map(({ name, desc, aka, id, img }) => (
        <div className={styles.main_section} id={id} key={id}>
          <div className={styles.left_side}>
            <h2>{name}</h2>
            <div className={styles.image}>
              <Image
                src={`/images/${img}`}
                priority
                layout='fill'
                /* objectFit='cover' */
                alt={`image of ${name}`}
              />
            </div>
          </div>

          <div className={styles.content}>
            <h1 className={styles.og_era}>{aka}</h1>
            <div className={styles.text}>{desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
