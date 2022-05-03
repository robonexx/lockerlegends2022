import Image from 'next/image';

// styles
import styles from '../../styles/components/Logo.module.scss';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image
        className={styles.logo_img}
        width={200}
        height={46}
        src='/images/LOGO_TEXT.png'
        alt='lockerlegends logo'
      />
    </div>
  );
}
