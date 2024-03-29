import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
  getLatestPosts,
  getPostCategoryInterviews,
  getPostCategoryStreetdance,
} from '../lib/posts/get-posts';
import Hero from '../layouts/hero/Hero';
import GridItem from '../components/Grid/GridItem';
import Grid from '../components/Grid/Grid';
// icons
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { GiPeaceDove } from 'react-icons/gi';

// styles
import styles from '../styles/pages/Home.module.scss';
import ReadMoreBtnIn from '../components/readmorebtn/ReadMoreBtnOut';
import { motion } from 'framer-motion';

export default function Home({ posts, interviews, streetdance }) {
  return (
    <>
      <Head lang='en'>
        <title>LockerLegends - educate before you recreate</title>
        <meta
          name='description'
          content='The official locking website of the streetdance pioneers hiphop streetdance funk soul history knowledge curriculum'
          key='desc'
        />
      </Head>
      <motion.div
        className={styles.home_main}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0 }}
      >
        <Hero />

        <div className={styles.home_wrapper}>
          <div className={styles.section}>
            <h1>EDUCATE B4U RECREATE</h1>
            <h2>
              Over 15 years Lockerlegends have served your Locking educational
              need
            </h2>
            <br />
            <p>
              THE ART-FORM & CULTURE OF A STREET DANCE IS MUCH MORE THAN THE
              MOVES THAT CREATE THE DANCE ITSELF. <br /> THE ORIGINAL DANCE
              STYLE CALLED LOCKING HAS DEEP ROOTS WITHIN A ERA, WHICH MENT SO
              MUCH TO THE UNITY AND DE SEGREGATION OF A PEOPLE… READ… LEARN...
            </p>
            <h2>
              and understand what brought about the evolution of words like soul
              and funk..
            </h2>

            <ReadMoreBtnIn
              title='What is funk?'
              srcUrl='/blog/what-does-funk-or-funky-really-mean'
            />
            <br />
            <br />
            <p>
              Understand the DANCERS that contributed to the Original foundation
              of this dance & opened the door to what exist today as <br />
            </p>
            <br />
            <h2>“THE STREET DANCE OF LOCKING”</h2>
            <br />
            <p>
              Read about the social party that is a foundation to locking...
            </p>
            <br />
            <div className={styles.image}>
              <Image
                src='/images/socialdance2.png'
                alt='social party dancing'
                width='100%'
                height='100%'
                layout='responsive'
                objectFit='cover'
                objectPosition='center'
                priority
              />
            </div>
            <ReadMoreBtnIn
              srcUrl='/socialparty'
              title='Click! to read about the social party era!'
            />
            <h2 style={{ textAlign: 'center' }}>
              ! Help us solidify this from just a dance into a ART-FORM to be
              passed down to future generations !
            </h2>
          </div>

          <div className={styles.section}>
            <h1>FROM CAMBELLOCKING to LOCKING</h1>
            <h2>History of Locking</h2>
            <p>
              Don &quot;Campbellock&quot; Campbell, the Creator of
              Campbellocking
            </p>
            <div className={styles.image}>
              <Image
                src='/images/donflying.jpg'
                alt='Don flying'
                width='100%'
                height='100%'
                layout='responsive'
                objectFit='cover'
                objectPosition='center'
                priority
              />
            </div>
            <ReadMoreBtnIn
              srcUrl='/history'
              title='Learn more about LOCKING!'
            />
          </div>

          <div className={styles.section}>
            <h2> WHAT IS A LOCKER ?</h2>
            <p>
              - A LOCKER has been, for decades anyone who subscribes to the
              Locking lifestyle and is a student of the dance of Locking.
              <br />
              - The Lockers is the name of the group. Being considered A LOCKER
              is something that we all treasure and this term has been in
              existance prior to organized proffessional groups
              <br />
              Much love & respect to all our LOCKER brothers and sisters around
              the world.
            </p>
          </div>

          <div className={styles.section}>
            <h2>
              THE WORLDS FIRST SYCHRONIZED LOCKING GROUP “THE ORIGINAL GOGO
              BROTHERS 1971/1973
            </h2>
            <p>
              Watts streetmovement of Locking was not only inspired by Don
              Campbell, but by the social Issues of the 1960s. This movement
              produced the first group ever.. pictured Left to Right Tony “GoGo”
              Lewis, James “SkeeterRabbit” Higgins and Edwin “Buddy GoGo”
              Lombard..from the GoGo, YoYo and CoCo Watts Brothers Family
            </p>
            <ReadMoreBtnIn srcUrl='/gogobrothers' title='The GOGO BROTHERS' />
          </div>

          <div className={styles.section}>
            <br />
            <h1>Editorials</h1>
            <p style={{ color: '#888' }}>
              Read the latest editorial, about the dance locking, the culture,
              interviews and more...
            </p>
          </div>

          <div className={styles.posts}>
            <h2>Latest Posts:</h2>
            <Grid>
              {posts.map(({ node }, idx) => {
                return (
                  <div key={idx}>
                    <GridItem props={node} />
                  </div>
                );
              })}
            </Grid>
          </div>
          <div className={styles.section}>
            <h2>HOW DID THIS DANCE ARTFORM HAPPEN?</h2>

            <h2>WHAT INSPIRED THIS DANCE?</h2>
            <h2>IS IT A MOVEMENT OR JUST A DANCE?</h2>

            <h1>The social connection to the era</h1>
            <p>
              Independent record companies such as Staxx, Motown and The Sounds
              of Philadelphia echoed the sounds which reflected the unity, pride
              and the struggles of our communities. They exposed the soulful
              harmony of well choreographed vocal groups and gave us the direct
              heart pounding inspirational music and lyrics of various bands.
              <br />
              <br />
              During these times, the struggle was revealed through the social
              conscious music sung by artists like Marvin Gaye, James
              Brown,Curtis Mayfield andIssac Hayes.
            </p>
            <ReadMoreBtnIn
              srcUrl='/wattsstaxx'
              title='Read about... WHATTSSTAXX'
            />
          </div>
          <div style={{ width: '100%', margin: '0 auto' }}></div>
          <div className={styles.image}>
            <Image
              src='/images/wattsriots.png'
              alt='watts riots'
              width='100%'
              height='100%'
              layout='responsive'
              objectFit='cover'
              objectPosition='center'
              priority
            />
          </div>

          <h2
            style={{
              textAlign: 'left',
              color: 'white',
              padding: '0 0 2rem 4rem',
              width: '90%',
            }}
          >
            “YOU CANNOT KNOW WHERE YOU ARE GOING UNLESS YOU KNOW WHERE YOU BEEN”
          </h2>

          <p
            style={{
              textAlign: 'right',
              color: 'white',
              padding: '0 4rem 2rem 0',
            }}
          >
            unknown authors quote
          </p>

          <div className={styles.section}>
            <p>
              The inner city communities of the United States were marked with
              racial and social unrest during the civil rights movement of the
              1960’s. This generation saw leaders such as Malcolm X, Dr. Martin
              Luther King, Robert Kennedy and John Kennedy assassinated and,
              those times and struggles were reflected in this music.
            </p>
            <p>
              In that time There was also a new generation of early rap and
              revolutionary poetry that was put to beats by groups such as the
              Last Poets and Gil Scott Heron. During those times, the rhythmic
              freedom in the African American community could only be found in
              the inner cities segregated night clubs or in community house
              parties. The turn of the decade brought about a pride in the
              accomplishments made during the civil rights struggles.
              <br />
              <br />
              The BOLD generation of the 1970’s was now free to express itself.
              SOUL TRAIN became the portal and revealed to the world its’
              creativity. Funk music spearheaded the charge and Afro American
              youth boldly displayed their pride, with large Afro hair styles
              and colorful creative clothing. During this time, an art form was
              born.
              <br />
              <br />
              This art form created a subculture which has influenced and
              transitioned the eras of Funk, Disco and Hip Hop through three
              decades. Yes! The art form first known as “Campbellocking” and now
              simmply as LOCKING
            </p>
          </div>
          <div className={styles.posts}>
            <h2>Streetdance:</h2>
            <Grid>
              {streetdance.map(({ node }, idx) => {
                return (
                  <div key={idx}>
                    <GridItem props={node} />
                  </div>
                );
              })}
            </Grid>
          </div>

          <div className={styles.section}>
            <h1>The Damita Jo Freeman Foundation</h1>
            <h2>Soul Train Dancers speak</h2>
            <p>
              many of you have watched the soul train awards and wondered where
              are the real stars of that show “THE ORIGINAL DANCERS” well we are
              here because of many distorted depictions and stories of the early
              days on soul train Damita Jo Freeman and Co host Flo Jenkins have
              put panels together tp tell the world the real stories and true
              history of their experience within the show . but the cultural
              movement and the street dance scene that truly inspired its
              acceptance within a society just exiting the civil rights era at
              the end of the 1970s. Myself along with Lockerlegends was proud to
              be asked to participate on 6/2/2019 the second panel event was
              successfully held at Darby Park in the Inglewood section of the
              inner-city where I along with Damita Jo ,Alpha Anderson, Freddie
              Maxie, Thelma Davis, Perry Brown,Creole Creekmore, Lewis”deputy”
              Green,Sharon Hill, Bill “Slim” Williams ,Queen Turner, and Dianne
              Brunner Pukas from yhose original era 1970s shows, spoke as they
              were joined by an audience full of notables. as they began to set
              the record strait. cumulating with a special presentation from
              todays new school locking dancer Rebecca Tsaoism and the famed
              Soul Train Line
            </p>
            <ReadMoreBtnIn
              srcUrl='/soultrain'
              title='Check out the SOUL TRAIN page here...'
            />
            <h2>
              I want to thank Damita and Flo for taking up the mantle to where
              to share the real with this generation... <br />
              Educate b4u retreat... <br />
              Og Skeeter Rabbit
            </h2>
          </div>
          <div className={styles.posts}>
            <h2>Interviews:</h2>
            <Grid>
              {interviews.map(({ node }, idx) => {
                return (
                  <div key={idx}>
                    <GridItem props={node} />
                  </div>
                );
              })}
            </Grid>
          </div>
          <div className={styles.section}>
            <h3>
              More editorials on the editorial (blog) page, read about the
              history, culture and dance of the artform locking
            </h3>
          </div>

          <div className={styles.section}>
            <h2>In loving memory...</h2>
            <p>
              ...to the ones who contributed to the dance, artform and culture
              of locking. <br />
              The artists that inspired us and who brought soul, funk and
              insipiration to the communities.
              <br />
              To the ones who will forever be in our hearts and never forgotten,
              we have done this memorial page to honor these Legends!
            </p>

            <ReadMoreBtnIn srcUrl='/memorial' title='Memorial page' />
          </div>
          <div className={styles.section}>
            <div>
              <h2>Got questions?</h2>
              <p>
                we have spent many hours & helped many along the way & now would
                ask all who have benefitted & enjoyed our site to take a few
                moments post a comment, about what the site has meant to you
                <br /> - join our Lockerlegends Facebook page
              </p>
              <br />
              <br />
              <Link
                href={{
                  pathname: 'https://www.facebook.com/groups/158481954185947',
                }}
                target='_blank'
                passHref
              >
                <div className={styles.icons}>
                  <AiOutlineFacebook className={styles.icon} />
                  <span>LockerLegends on FB</span>
                  <AiOutlineUsergroupAdd className={styles.icon} />
                </div>
              </Link>
              §<br />
              <br />
              <p>
                Then just ask to join the Lockerlegends Group, we would love for
                you to share what you think about our website there.
              </p>
              <br />
            </div>
          </div>
          <p
            style={{
              margin: '2rem 0',
              textAlign: 'center',
              color: '#888',
              backgroundColor: 'black',
              padding: '4px 8px',
            }}
          >
            More content will be added, stay tuned and hope you&apos;ll like our
            new look!
          </p>
          <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>
            ENJOY THE WEBSITE!
          </h2>
        </div>
      </motion.div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getLatestPosts();
  const interviews = await getPostCategoryInterviews();
  const streetdance = await getPostCategoryStreetdance();

  return {
    props: {
      posts: posts.edges,
      interviews: interviews.edges,
      streetdance: streetdance.edges,
    },
    revalidate: 60,
  };
}
