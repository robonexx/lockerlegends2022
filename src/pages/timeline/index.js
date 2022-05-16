import Head from 'next/head'
import {motion} from 'framer-motion'
import ResponsiveGrid from '../../components/responsiveGrid/ResponsiveGrid';
import RGridItem from '../../components/responsiveGrid/RGridItem';
import { items } from '../../content/items';

// styles
import styles from '../../styles/pages/Timeline.module.scss'

export default function Timeline() {
  return (
    <div className={styles.timeline}>
      <Head lang='en'>
        <title>Timeline - LockerLegends</title>
        <meta
          name='description'
          content='the locking time line and evolution'
        />
        <meta property='og:title' content='About locking history timeline of the artform' />
      </Head>
      <h1>
        TIMELINE OF LOCKING!
      </h1>
      <p>This page will be updates shortly until then follow the links and enjoy</p>
      <p>Wanna read about history? Check any other link below</p>
      <ResponsiveGrid>
        {items.map(({ title, img, url, id, slug }, i) => (
          <motion.div key={id}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.4, duration: 0.3 }}
          >
            <RGridItem
              title={title}
              featuredImage={img}
              url={url}
              slug={slug}
            />
          </motion.div>
        ))}
      </ResponsiveGrid>
    </div>
  );
}
