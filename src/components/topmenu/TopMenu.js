import LockerlegendsLogo from '../logo/LockerlegendsLogo';
import ContactBtn from '../contactBtn/ContactBtn';
import { AiFillMail } from 'react-icons/ai';

// styles
import styles from '../../styles/components/TopMenu.module.scss';

export default function TopMenu() {
  return (
    <div className={styles.top_menu}>
      <LockerlegendsLogo />
      <h3 className={styles.subtitle}>Educate before you Recreate</h3>
      <ContactBtn title='Contact' icon={<AiFillMail />} url='/contact' />
    </div>
  );
}
