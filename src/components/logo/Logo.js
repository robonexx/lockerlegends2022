import Link from 'next/link';

// styles
import styles from '../../styles/components/Logo.module.scss';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link href='/'>
        <img
          className={styles.logo_img}
          src='/images/LOGO_TEXT.png'
          alt='lockerlegends logo'
        />
      </Link>
    </div>
  );
}
