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
            <Image
              className={styles.image}
              src={`/images/${img}`}
              width={380}
              height={300}
              alt={`image of ${name}`}
              priority
            />
          </div>

          <div className={styles.content}>
            <header>
              <b className={styles.og_era}>{aka}</b>
            </header>

            <div className={styles.text}>{desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
