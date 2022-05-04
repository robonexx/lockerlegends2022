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
                className={styles.image}
                src={`/images/${img}`}
                width="100%"
                height="100%"
                layout="responsive"
                objectFit='cover'
                alt={`image of ${name}`}
                priority
              />
            </div>
          </div>

          <div className={styles.content}>
            <h1>
              <b className={styles.og_era}>{aka}</b>
            </h1>
            <div className={styles.text}>{desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
