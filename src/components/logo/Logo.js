import Image from 'next/image';
import Link from 'next/link';
// styles
import styles from '../../styles/components/Logo.module.scss';

export default function Logo() {
  return (
    <div className={styles.logo_img}>
      <Image
        src='/svg/SVG_LOGO_TEXT.svg'
        height='46'
        width='500'
        alt='lockerlegends logo'
        objectFit='cover'
        priority
      />
    </div>
  );
}

