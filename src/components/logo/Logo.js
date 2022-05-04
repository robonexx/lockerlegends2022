import Image from 'next/image';
import Link from 'next/link';
// styles
import styles from '../../styles/components/Logo.module.scss';

export default function Logo() {
  return (
    <Image
      src='/images/LOGO_TEXT.png'
      className={styles.logo_img}
      width={200}
      height={46}
      alt='lockerlegends logo'
    />
  );
}
