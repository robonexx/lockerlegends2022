import Head from 'next/head';
import { motion } from 'framer-motion';
import Section_top from '../../layouts/pagelayout/Section_top';

// styles
import styles from '../../styles/pages/About.module.scss';

const About = () => {
  return (
    <>
      <Head lang='en'>
        <title>About Us - LockerLegends</title>
        <meta
          name='description'
          content='About lockerlegends review and purpose '
        />
        <meta property='og:title' content='About us and our purpose' />
      </Head>
      <motion.div
        className={styles.about_main}
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        exit={{ x: -500, opacity: 0 }}
      >
        <Section_top
          pretitle='...'
          headline='lockerlegends'
          subtitle='15 year Review & Purpose!'
        />

        <article className={styles.about_article}>
          <h2>How it started...</h2>
          <p>
            Back in 2003 when we decided to create Lockerlegends, back when we
            saw a need in a then growing new locking community for education and
            the understanding of the importance of the historical history,
            concerning our wonderful world of Locking.
          </p>
          <br />
          <p>
            <span className={styles.we}>We</span> realized that many stories,
            and events in locking history were in accurate, because the true
            background and events surrounding its inception were never
            documented or taught correctly, possibly because some of those who
            profited ,believed that the true history and inclusion of others
            would stifle their dominance of the dances history. <br />
            We recognized the lack of of a wide vision from the many
            perspectives that produced the dance you see today. <br />
            <br />
            One of the most neglected issues was that of the cultural connection
            during the times when the Dance style was developed and its
            acceptance into the commercial world as crossover entertainment.{' '}
            <br />
            Since the inception of this website sight in 2004, We are proud that
            we have been instrumental in the knowledge and awareness of todays
            locking community, We now see many quotes, and post involving our
            writings ,teachings and concepts all over the world. Just google
            locking history & there is probably something taken directly from
            our website posted there. <br />
            <br />
            <span className={styles.we}>We</span> were happy to be involved in
            the first Full week camps taught by original generation Lockers in
            2005, We are happy to see Full Locking camps now in existence, with
            the inclusion of multiple original era Pioneers, We were happy to
            have connected, The LEGENDARY dance and educational television show
            “SOUL TRAIN” train, and its social party dancing with the foundation
            of locking. <br />
            <br />
            <span className={styles.we}>We</span> are proud yo have conducted
            The FIRST ever Social Party Dance class in 2005, TODAY we see Social
            Party Dance classes ( which are called Soul Dances ) taught all over
            the world, We were happy to introduce the world to the awareness of
            Locking before the commercial & performance locking, which has open
            an international awareness to Locking & its connection to its
            streets, Now we see Locking accepted with the other street forms at
            events all over the world.
            <br />
            <br />
            <span className={styles.we}>We</span> exposed many early Lost
            Lockers & their stories & contributions to the world ,including
            Charles Robot , His exposure was of the utmost importance, because
            of his connection to Don Campbell (with the robot shuffle) This has
            allowed the world to understand the connection to Locking with the
            animated styles of Popping..Today we have seen a movement to connect
            the many styles of popping back to its original roots of Northern
            California to Locking and Roboting, of Southern California.
            <br />
            <br />
            <span className={styles.we}>We</span> are happy to see that Locking
            & street dance is again connected to the term MOVEMENT, where we
            were one of the first to teach of the early movement of the 1960s &
            its connection to the purpose of Locking, today we see many new
            school movements , Like Soul Universal, Watts Soul & Locking4life
            who have taken our lead and with many conversations have again
            producing the purpose of unity to our dance… <br />
            <br />
            <span className={styles.we}>We</span> have fought and continue to
            fight the attempt to DISTORT this education, and the movement to
            proclaim Locking a African American Dance art form as a racial
            separation , With the true education of its african american roots ,
            to the true purpose of its acceptance by people of many races ,
            creeds, color and religious backgrounds, showing that this dance had
            a original and continuing social purpose to unite and break down
            racial barriers , which go way beyond, its acceptance as marketable
            commercial entertainment <br />
            <br />
            <span className={styles.we}>We</span> have seen the uniting of the
            Original Era with the 1980s era, and later decades , all the way
            into the international scene, we have worked to explain the changes
            as this dance migrated without true documentation of a true
            foundational history ,we now provide that from a educational & from
            first hand experience , In our effort to preserve,and the attempts
            to pass on this dance as not only a STYLE, but a true ARTFORM!{' '}
            <br />
            <br />
            Today its + 18yrs years of this websites history
          </p>
        </article>
      </motion.div>
    </>
  );
};

export default About;
