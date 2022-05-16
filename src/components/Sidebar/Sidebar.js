import { motion } from 'framer-motion';
import { pioneers } from '../../content/pioneers';
// styles
import styles from '../../styles/components/Sidebar.module.scss';

export default function Sidebar() {
  return (
    <>
      <div className={styles.sidebar}>
        <ul>
          {pioneers.map(({ id, name, href }, i) => (
            <motion.li
              key={id}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.2 }}
            >
              <a href={href} className={styles.sidebar_link}>
                {name}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
}
