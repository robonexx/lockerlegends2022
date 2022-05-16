import Head from 'next/head'
import Image from 'next/image';

import { motion, useViewportScroll, useTransform } from 'framer-motion';

// styles
import styles from '../../styles/layout/PageLayout.module.scss';

export default function Terminology({ speed }) {
  /* const { scrollYProgress } = useViewportScroll();
  const yValue = useTransform(scrollYProgress, [0, 1], [0, 50 * speed]); */

  return (
    <motion.div className={styles.pagelayout}>
      <Head lang='en'>
        <title>Street Terminology - LockerLegends</title>
        <meta
          name='description'
          content='Street terminlogy the vocabulary used on the streets'
        />
        <meta property='og:title' content='street terminology vocabulary' />
      </Head>
      <section>
        <motion.header
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            Understanding Street Terminology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            recently read a post from an Og asking the question:{' '}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            about the difference between Hiphop & streetdance 
          </motion.p>
        </motion.header>

        <motion.div
          className={styles.image}
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          /* style={{ y: yValue }} */
        >
          <Image
            src='/images/streetTerm.png'
            width='100'
            height='100'
            layout='responsive'
            objectFit='cover'
            objectPosition='center'
            priority
          />
        </motion.div>
        <div
          className={styles.wrapper}
        >
          <p>
            Obviously this is a issue that has developed since the trailer from
            the Movie “ Beyond Hiphop “ where many from today’s generation , or
            who are not from the culture of origin wrestle with the
            understanding with the evolution  of terminology 
          </p>
          <p>
            To understand the difference between historical actuality and
            today’s terminology , you have to go back into several eras before
            today’s generation. 
            <br />
          </p>
          <p>
            The most recent of these eras is the evolution of today’s commercial
            underground and its events under the term of Hiphop. This is the
            time frame from the end of the 1900s to today. When a lot of the
            educational teachings of what these terms originally meant began to
            emerge. Explaining the changing in various ethnic social eras 
            through the decades into how they are seen & used today. 
          </p>
        </div>
        <div className={styles.wrapper}>
          <p>
            For example:  Hiphop the movement has now become the commercial term
            Hiphop the sound , Hiphop the dance style. Hiphop the fashion look
            ,With not many understanding that Hiphop the dance style evolved
            from many styles which evolved from the term “ streetdance “ an
            issue I address in the movie beyond Hiphop and also just as much of
            the sound of Hiphop the music sound evolved from much of the message
            lyrics, poetry & music of the funk & soul era. Both of these eras
            developed these elements , which together created cultural art forms
            from a social issue movement. with the terms of its expression
            elements. Now confused As the source. 
          </p>
          <p>
            There are many terms, the term movement itself now is confused with
            the technical movements of a dance style confused with the social
            movements for social change. Urban now has replaced inner city or
            hood which satisfies those within the dance & music that want to
            scue  the connection to the black community .. funky evolved form
            it’s Origins of smell & rhythm in certain communities to them it
            means strange or peculiar. Jam evolved from Jazz improvisation to
            mean , simply party. 
          </p>
        </div>

        <div>
          <Image
            src='/images/terminology.png'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='cover'
            objectPosition='center'
            priority
          />
        </div>

        <div
          className={styles.wrapper}>
          <p>
            Even in my experience with the making of film “beyond Hiphop” I had
            to continually explain to the producer that I was talking about a
            different thing in referring to the movement while he was referring
            to the ascetic look or sound. So when you ask what is the difference
            between Hiphop & streetdance the understanding of what you are
            really asking varies from generation depending on the historical
            education into terminology they have received  & understand!
          </p>
          <br /> <br />
          <p>
            The post I refer to actually make my point that even some who are
            today’s Ogs saw only a dance and are just now seeing the difference
            as it developed into a true cultural art forms. And the affect it
            would have on today’s generation without educational teaching ! 
          </p>
          <br /> <br />
          <p>
            And it is the vary reason I have said from the beginning “ Educate
            before you recreate “ 
          </p>
        </div>
      </section>
    </motion.div>
  );
}
