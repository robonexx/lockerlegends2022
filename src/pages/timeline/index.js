import Head from 'next/head'
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
        {items.map(({ title, img, url, id, slug }) => (
          <div key={id}>
            <RGridItem
              title={title}
              featuredImage={img}
              url={url}
              slug={slug}
            />
          </div>
        ))}
      </ResponsiveGrid>
    </div>
  );
}
