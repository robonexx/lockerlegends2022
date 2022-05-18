import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../../styles/pages/Gogo.module.scss';
import Banner from '../../components/banner/Banner';

const ytVidGogoBros = 'k3zHrVyfKGM';

export default function Gogobrothers() {
  return (
    <motion.div
      className={styles.gogo}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Head lang='en'>
        <title>Gogo Brothers - LockerLegends</title>
        <meta
          name='description'
          content='The GoGo Brothers Legacy "A REAL STREET LEGEND” from Watts, California and Verbum Dei High School to around the world'
        />
        <meta
          name='keywords'
          content='LOCKING, GOGO BROHTERS, VERBUM DEI HIGH SCHOOL, WATTS WRITERS WORKSHOP, COCO BROTHERS, LEGACY, OG SKEETER RABBAT, TONY GOGO, BUDDY GOGO, LOOSE CABOOSE'
        ></meta>
        <meta
          property='og:title'
          content='History about the Gogo Brothers family and legacy'
        />
      </Head>
      <section>
        <motion.header>
          <Banner />
        </motion.header>

        <div>
          <motion.p
            initial={{ opacity: 0, y: -1000 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            The GoGo Brothers Legacy ”A REAL STREET LEGEND” from Watts,
            California and Verbum Dei High School to around the world
          </motion.p>
          <iframe
            id='ytplayer'
            className={styles.video}
            type='text/html'
            width='100%'
            height='360'
            src={`https://www.youtube-nocookie.com/embed/${ytVidGogoBros}`}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full'
          ></iframe>
        </div>
        <div>
          <p>The GoGo brothers on Soul Train second season 1972</p>
          <p>
            The first seen Is Greg Cambellock Jr who danced with the GoGo
            brothers at watts writers workshop and then with the Lockers then
            the camera switches to Tony GoGo from the Verb class of 73, he is
            briefly followed by soul train legend lil Joe chasm, Then the camera
            switches to line one where Buddy GoGo in the gold with the stripped
            sox ,class of 73 does early locking moves. the camera briefly
            switches to like two, and then back to line one where Skeeter Rabbit
            with the (class of 73) with the white crossed suspenders, doing kick
            splits ...later in the video can be seen Kevin YoYo from the Verbum
            Dei Class of 74... this is what made up
          </p>
          <h2>The GoGo & YoYo brothers Group</h2>
        </div>
        <div className={styles.images}>
          <Image
            src='/images/gogobrotherswatts.png'
            layout='responsive'
            height='100%'
            width='100%'
            objectFit='cover'
            objectPosition='center'
            priority
          />
        </div>

        <div>
          <p>
            Every now and then there are legends of street culture who can
            transcend street into the commercial or organize the world of sport
            & entertainment.
            <br />
            <br />
            If you go into any basketball gym in this country you can find
            rumors & stories of legends who never made it but should have,
            remarkable recounts of remarkable feats of talent.
            <br />
            <br />
            They are immortalized under colorful street names, with multiple
            stories of everything from drug addiction to racial in opportunities
            as to the reason of a non transition from street to an inclusion of
            fame & wealth, And the same holds true for the legends of
            streetdance They faced the same, the stories of these legends are
            locked in the gyms of nightclubs & house-parties, on street corners
            & parks with remarkable feats of creativity, surrounded by
            remarkable odds of survival.
            <br />
            <br />
            Just as in other social street activities these legends face the
            daily disappointment of watching those of lessor talent ,who learned
            , copied and replicated from them succeed in a world of nepotism &
            politics , where success is based not on the ability but rather on
            the accessibility of the lucky or privileged ! Even Verbum Dei High
            School does not know the influence it has had on the world from the
            U.S. to Japan
          </p>
        </div>
        <div>
          <h2>Tony GoGo carried on the GoGo brothers tradition in Japan</h2>
          <p>
            The term Go-Go Brothers have been connected to the Art form of
            Locking since 1971
          </p>
        </div>
        <motion.div className={styles.image}>
          <Image
            src='/images/tonyg.webp'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='cover'
            objectPosition='center'
            priority
          />
        </motion.div>
        <p>
          Grand Master Locker Tony Go-Go , Co founding member of the original Go
          Go Brothers group has preserved and developed the Go-Go legacy for
          over three decades. After leaving the Original Lockers Group in the
          early 1980s Tony has taught and developed not only The Original Art of
          Locking in Japan for the past two decades but he recognized, created
          and developed a style of Locking in Japan which combined other styles
          along with a Locking Foundation to form a style known as “Lock Fusion”
          when we asked Tony how this came about , He said he noticed some
          tendencies in many of his students to change the angles of the locks
          along with combining moves, often this was done with-out finishing the
          previous move..Tonys’’ background immediately said uh-oh “Slop
          Locking” Then he realized that what had happened was many of these
          students were not fundamentally sound with old school locking
          principals.. The Student which were solid in the Old school original
          style fundamentals could also perform his Lock-fusion style with-out
          the Slop locking effect.. Well we have watched it develop over the
          years and it is unique to the Asian style of Locking . Tony is now
          considered the innovator of the Japanese style of Lock-Fusion.. “That
          sure fit’s the saying educate before you recreate”
        </p>
        <h2>Letter from Tony</h2>
        <p>
          What up to all who respect dance and the true history That goes with
          it I would like to give Big Props To OGSkeeter Rabbit of the Original
          GoGo brothers. Thank you for opening the Locker legends web site Of
          information and for bringing as many lockers and dancers together
          giving us The real truth of how this Movement in our culture Came
          about and what it stands for. Once we had a dream in Watts California
          and Now a beautiful memory Of a dream fulfilled thanks To your
          diligence and the friendship of our brother In Russia Vovan. We luv
          you Always Thanks Mr Higgins and Always love and Respect. Your Brother
          always Tony Gogo.
        </p>
      </section>
    </motion.div>
  );
}
