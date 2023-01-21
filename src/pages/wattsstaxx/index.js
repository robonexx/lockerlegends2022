import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../../styles/layout/PageLayout.module.scss';

export default function Wattsstaxx() {
  return (
    <div className={styles.pagelayout}>
      <Head lang='en-EN'>
        <title>Wattsstaxx - LockerLegends</title>
        <meta
          name='description'
          content='history about the wattsriots the concert and importance of the movement'
        />
        <meta property='og:title' content='wattsstaxx the concert' />
      </Head>
      <section>
        <motion.header
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.h1
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            WATTSSTAXX
          </motion.h1>
          <motion.h2
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            “WATTSTAX FESTIVAL & CONCERT“
          </motion.h2>
        </motion.header>

        <motion.div className={styles.image}>
          <Image
            src='/images/staples.png'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='cover'
            objectPosition='center'
            priority
            alt='staples'
          />
        </motion.div>
        <p>
          It is of the utmost importance to understand the significance of this
          concert ,in the movement for unity & equality in the African American
          community during the same time as Social conscious music was sending a
          message , social conscious dances like locking was featured on soul
          train , and was sweeping the intercity streets. 
        </p>

        <p>
          Wattstax a concert held yearly that was made into the 1973 documentary
          film by Mel Stuart that focused on the 1972 Wattstax music
          festival and the African American community of Watts in Los Angeles,
          California. The film was nominated for a Golden Globe award for Best
          Documentary Film in 1974.
        </p>

        <h1>The concert</h1>
        <div className={styles.image}>
          <Image
            src='/images/wattsfist.png'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='cover'
            objectPosition='center'
            priority
            alt='watts concert power fist'
          />
        </div>
        <div className={styles.wrapper_col_2}>
          <p>
            The concert was held at the Los Angeles Memorial Coliseum on August
            20, 1972, and organized by Memphis&apos;s Stax Records to
            commemorate the seventh anniversary of the Watts riots. Wattstax was
            seen by some as &quot;the Afro-American answer to Woodstock&quot;.
            To enable as many members of the black community in L.A. to attend
            as possible, tickets were sold for only $1.00 each. The
            Reverend Jesse Jackson gave the invocation, which included Reverend
            William H. Borders, Sr.&apos;s &quot;I Am - Somebody&quot; poem,
            which was recited in a call and response with the assembled stadium
            crowd. In the film, interspersed between songs are interviews
            with Richard Pryor, Ted Lange (The brother of GoGo brothers family
            member Greg Lange) and others who discuss the black experience in
            America.
          </p>
          <p>
            The film begins with an introduction by Pryor, followed by shots of
            urban life on the streets of Watts, accompanied by the song
            &quot;What You See Is What You Get&quot; by The Dramatics. Mel
            Stuart was not entirely satisfied with the full concert footage and
            added the Pryor interludes between certain songs and live shots of
            urban life in the city. Stuart wanted someone to narrate between the
            scenes to create a transition in a comedic but meaningful way.
            Scenes of the concert venue being set up are accompanied by the song
            &quot;Oh La De Da&quot; by the Staple Singers, and another Staples
            tune, &quot;We the People&quot;, backs scenes of the crowds entering
            the stadium.and clips of dancers, which featured one of the first
            early clips of several dancers featuring a handshake dance that
            became part of the street dance  known as locking, were in the film.
          </p>
        </div>
        <div className={styles.image}>
          <Image
            src='/images/wattshandshake.png'
            layout='responsive'
            height='100%'
            width='100%'
            objectFit='cover'
            objectPosition='center'
            priority
            alt='lockers handshake'
          />
        </div>
        <div className={styles.wrapper}>
          <h2>The handshake of brotherhood</h2>
          <p>
            Later during an interview with Staxx records owner Al Bell ,the
            question was asked  &quot;What is the significance of your use of
            the two dancers in your fim and promotional poster&quot; his answer
            was that handshake and the dance of locking from soul train was the
            visual manifestation of the spoken word
          </p>
        </div>
        <div className={styles.wrapper_col_2}>
          <p>
            The first song played in concert is the &quot;Star-Spangled
            Banner&quot; performed by Kim Weston while the audience sits. Jesse
            Jackson then encourages the audience to raise their right fists in
            the air while he recites his poem &quot;I Am Somebody&quot;. Kim
            Weston follows with a performance of the &quot;Black National
            Anthemv&quot;, &quot;Lift Ev&apos;ry Voice and Sing&quot;. While she
            sings the audience becomes more invigorated, and people stand and
            continue to raise their fists in the air. The scene is inter-cut
            with images from African-American history. Jimmy Jones sings
            &quot;Somebody Bigger Than You and I&quot;.
          </p>
          <p>
            A brief discussion about religion is followed by a performance of
            &quot;Lying on the Truth&quot; by the Gospel band The Rance Allen
            Group, inter-cut with shots of churches around Watts. The song
            &quot;Peace Be Still&quot; is heard, and eventually seen, performed
            by The Emotions in a local church. Next, the film briefly discusses
            Gospel music, and &quot;Old-Time Religion&quot; is performed by
            &quot;The Stax Golden 13&quot;, composed of William Bell, Louise
            McCord, Debra Manning, Eric Mercury, Freddy Robinson, Lee Sain,
            Ernie Hines, Little Sonny, Eddie Floyd, the Newcomers, the Temprees,
            and Frederick Knight. After a brief interlude with Pryor, Melvin Van
            Peebles introduces the Staple Singers, who play &quot;Respect
            Yourself&quot; in concert.
          </p>
        </div>
        <div className={styles.wrapper_2_col}>
          <p>
            The Bar-Kays follow another montage commentary on African-American
            identity. The Bar-Kays saxophonist, Harvey &quot;Joe&quot;
            Hendersonspeaks saying, &quot;Freedom is a road seldom traveled by
            the multitude&quot; (a phrase later made famous when it
            was sampled by Public Enemy in &quot;Show &apos;Em Whatcha
            Got&quot;). The Bar-Kays then play &quot;Son of Shaft.&quot; A
            montage of conversations about unemployment and crime in Watts
            plays.
          </p>
          <div className={styles.image}>
            <Image
              src='/images/barkeyspng.png'
              width='100%'
              height='100%'
              layout='responsive'
              objectFit='cover'
              objectPosition='center'
              priority
              alt='barkeys'
            />
          </div>
        </div>
        <p>
          Albert King plays &quot;I&apos;ll Play The Blues for You&quot; which
          is quickly cut to another conversation with the people of Watts
          about blues musicand depression. An unusual piece of footage is shown
          of performance of &quot;Walking the Backstreet and Crying&quot;
          by Little Milton, presented in the style of a music video, with
          Milton lip-synching the song near a train station with a burning trash
          can next to it.
        </p>
        <div className={styles.wrapper}>
          <p>
            Rufus Thomas talks about a character named &quot;Jody&quot; -
            someone who &quot;is that fella, when you leave home at six
            o&apos;clock, he&apos;s in that house at six-one.&quot; Followed by
            shots of various rich African Americans exiting their expensive cars
            and wearing flamboyant clothing, while the song &quot;Jody&apos;s
            Got Your Girl and Gone&quot; by Johnnie Taylor is being performed in
            a night club. Pryor performs a sketch discussing gambling.
          </p>
          <p>
            <br />
            A montage of couples in Watts is shown while a discussion about
            dating and romance is heard, with &quot;I May Not Be What You
            Want&quot; performed by Mel and Tim in the background. The scene
            then changes to a performance of &quot;Picking Up the Pieces&quot;
            by Carla Thomas. During this song, several red, black and white
            balloons are released in the stadium. More conversations about
            gender roles and romance in the African-American society follow.
            <br />
          </p>
          <motion.div className={styles.image}>
            <Image
              src='/images/funkywomanwattsconcert.png'
              width='100%'
              height='100%'
              layout='responsive'
              objectFit='cover'
              objectPosition='center'
              priority
              alt='funky lady at watts concert'
            />
          </motion.div>
        </div>
        {/* <iframe
          src='https://www.youtube.com/embed/KCFyKRtlLOI'
          title='YouTube video player'
          allow='autoplay; clipboard-write; picture-in-picture'
          allowFullscreen
          frameBorder='0'
        ></iframe> */}

        <div className={styles.wrapper}>
          <p>
            <br />
            In the next segment, Rufus Thomas performs &quot;The Breakdown&quot;
            and &quot;Do the Funky Chicken.&quot; There is another interlude
            with Pryor, and then the hit ballad &quot;If Loving You is Wrong, I
            Don&apos;t Want to be Right&quot; by soul singer Luther Ingram.
            After the final interlude, Isaac Hayes enters the stadium to a large
            audience reaction (the concert took place on his 30th birthday).
            Hayes&apos; performance of &quot;Rolling Down a Mountain&quot; in
            the original version of the film was recorded on a sound stage at a
            later date because MGM refused to allow the film-makers to use
            Hayes&apos; concert performances of Theme from Shaft&quot; and
            &quot;Soulsville&quot;.
          </p>
          <div className={styles.image}>
            <Image
              src='/images/rufusthomas.png'
              width='100'
              height='100'
              layout='responsive'
              objectFit='cover'
              objectPosition='center'
              priority
              alt='Mr Rufus Thomas'
            />
          </div>
        </div>
        <div className={styles.wrapper}>
          <p>
            These songs are restored on Region 1 DVD release of the film. The
            camera pans out at the end of the stadium showing several people
            during the interludes in the film while the speech &quot;I Am
            Somebody&quot; is being shouted again followed by &quot;Lift Every
            Voice and Sing&quot; as the credits roll.
            <br />
          </p>
        </div>
      </section>
    </div>
  );
}
