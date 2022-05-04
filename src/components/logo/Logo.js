import Image from 'next/image';
import Link from 'next/link';
// styles
import styles from '../../styles/components/Logo.module.scss';

export default function Logo({ url }) {
  return (
    <div className={styles.logo}>
      <Link href={url}>
        <Image
          className={styles.logo_img}
          width={200}
          height={46}
          src='/images/LOGO_TEXT.png'
          alt='lockerlegends logo'
        />
      </Link>
    </div>
  );
}
