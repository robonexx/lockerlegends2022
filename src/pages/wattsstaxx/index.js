import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../../styles/layout/PageLayout.module.scss';

export default function index() {
  return (
    <div className={styles.pagelayout}>
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
        <motion.div className={styles.image}>
          <Image
            src='/images/wattsfist.png'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='cover'
            objectPosition='center'
            priority
          />
        </motion.div>
        <div className={styles.wrapper_col_2}>
          <p>
            The concert was held at the Los Angeles Memorial Coliseum on August
            20, 1972, and organized by Memphis's Stax Records to commemorate the
            seventh anniversary of the Watts riots. Wattstax was seen by some as
            "the Afro-American answer to Woodstock". To enable as many members
            of the black community in L.A. to attend as possible, tickets were
            sold for only $1.00 each. The Reverend Jesse Jackson gave the
            invocation, which included Reverend William H. Borders, Sr.'s "I Am
            - Somebody" poem, which was recited in a call and response with the
            assembled stadium crowd. In the film, interspersed between songs are
            interviews with Richard Pryor, Ted Lange (The brother of GoGo
            brothers family member Greg Lange) and others who discuss the black
            experience in America.
          </p>
          <p>
            The film begins with an introduction by Pryor, followed by shots of
            urban life on the streets of Watts, accompanied by the song "What
            You See Is What You Get" by The Dramatics. Mel Stuart was not
            entirely satisfied with the full concert footage and added the Pryor
            interludes between certain songs and live shots of urban life in the
            city. Stuart wanted someone to narrate between the scenes to create
            a transition in a comedic but meaningful way. Scenes of the concert
            venue being set up are accompanied by the song "Oh La De Da" by
            the Staple Singers, and another Staples tune, "We the People", backs
            scenes of the crowds entering the stadium.and clips of dancers,
            which featured one of the first early clips of several dancers
            featuring a handshake dance that became part of the street dance
             known as locking, were in the film.
          </p>
        </div>
        <motion.div className={styles.image}>
          <Image
            src='/images/wattshandshake.png'
            layout='responsive'
            height='100%'
            width='100%'
            objectFit='cover'
            objectPosition='center'
            priority
          />
        </motion.div>
        <motion.div className={styles.wrapper}>
          <h2>The handshake of brotherhood</h2>
          <p>
            Later during an interview with Staxx records owner Al Bell ,the
            question was asked  "What is the significance of your use of the two
            dancers in your fim and promotional poster" his answer was that
            handshake and the dance of locking from soul train was the
            visual manifestation of the spoken word
          </p>
        </motion.div>
        <div className={styles.wrapper_col_2}>
          <p>
            The first song played in concert is the "Star-Spangled Banner"
            performed by Kim Weston while the audience sits. Jesse Jackson then
            encourages the audience to raise their right fists in the air while
            he recites his poem "I Am Somebody". Kim Weston follows with a
            performance of the "Black National Anthem", "Lift Ev'ry Voice and
            Sing". While she sings the audience becomes more invigorated, and
            people stand and continue to raise their fists in the air. The scene
            is inter-cut with images from African-American history. Jimmy
            Jones sings "Somebody Bigger Than You and I".
          </p>
          <p>
            A brief discussion about religion is followed by a performance of
            "Lying on the Truth" by the Gospel band The Rance Allen Group,
            inter-cut with shots of churches around Watts. The song "Peace Be
            Still" is heard, and eventually seen, performed by The Emotions in a
            local church. Next, the film briefly discusses Gospel music, and
            "Old-Time Religion" is performed by "The Stax Golden 13", composed
            of William Bell, Louise McCord, Debra Manning, Eric Mercury, Freddy
            Robinson, Lee Sain, Ernie Hines, Little Sonny, Eddie Floyd, the
            Newcomers, the Temprees, and Frederick Knight. After a brief
            interlude with Pryor, Melvin Van Peebles introduces the Staple
            Singers, who play "Respect Yourself" in concert.
          </p>
        </div>
        <div className={styles.wrapper_2_col}>
          <p>
            The Bar-Kays follow another montage commentary on African-American
            identity. The Bar-Kays saxophonist, Harvey "Joe" Hendersonspeaks
            saying, "Freedom is a road seldom traveled by the multitude" (a
            phrase later made famous when it was sampled by Public Enemy in
            "Show 'Em Whatcha Got"). The Bar-Kays then play "Son of Shaft." A
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
            />
          </div>
        </div>
        <p>
          Albert King plays "I'll Play The Blues for You" which is quickly cut
          to another conversation with the people of Watts about blues
          musicand depression. An unusual piece of footage is shown of
          performance of "Walking the Backstreet and Crying" by Little Milton,
          presented in the style of a music video, with Milton lip-synching the
          song near a train station with a burning trash can next to it.
        </p>
        <div className={styles.wrapper}>
          <p>
            Rufus Thomas talks about a character named "Jody" - someone who "is
            that fella, when you leave home at six o'clock, he's in that house
            at six-one." Followed by shots of various rich African Americans
            exiting their expensive cars and wearing flamboyant clothing, while
            the song "Jody's Got Your Girl and Gone" by Johnnie Taylor is being
            performed in a night club. Pryor performs a sketch
            discussing gambling.
          </p>
          <p>
            <br />
            A montage of couples in Watts is shown while a discussion about
            dating and romance is heard, with "I May Not Be What You Want"
            performed by Mel and Tim in the background. The scene then changes
            to a performance of "Picking Up the Pieces" by Carla Thomas. During
            this song, several red, black and white balloons are released in the
            stadium. More conversations about gender roles and romance in the
            African-American society follow.
            <br />
          </p>
          <p>
            <br />
            In the next segment, Rufus Thomas performs "The Breakdown" and "Do
            the Funky Chicken." There is another interlude with Pryor, and then
            the hit ballad "If Loving You is Wrong, I Don't Want to be Right" by
            soul singer Luther Ingram. After the final interlude, Isaac
            Hayes enters the stadium to a large audience reaction (the concert
            took place on his 30th birthday). Hayes' performance of "Rolling
            Down a Mountain" in the original version of the film was recorded on
            a sound stage at a later date because MGM refused to allow the
            film-makers to use Hayes' concert performances of "Theme from Shaft"
            and "Soulsville".
          </p>
        </div>
        {/* <iframe
          src='https://www.youtube.com/embed/KCFyKRtlLOI'
          title='YouTube video player'
          allow='autoplay; clipboard-write; picture-in-picture'
          allowFullscreen
          frameBorder='0'
        ></iframe> */}

        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Image
              src='/images/rufusthomas.png'
              width='100'
              height='100'
              layout='responsive'
              objectFit='cover'
              objectPosition='center'
              priority
            />
          </div>
          <div className={styles.wrapper}>
            <p>
              These songs are restored on Region 1 DVD release of the film. The
              camera pans out at the end of the stadium showing several people
              during the interludes in the film while the speech "I Am Somebody"
              is being shouted again followed by "Lift Ev'ry Voice and Sing" as
              the credits roll.
              <br />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
