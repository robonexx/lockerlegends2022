import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
// styles
import styles from '../styles/pages/Home.module.scss';
import ReadMoreBtnIn from '../components/readmorebtn/ReadMoreBtnOut';

export default function Home({ posts, interviews, streetdance }) {
  return (
    <>
      <Head lang='en'>
        <title>LockerLegends</title>
      </Head>
      <div className={styles.home_main}>
        <Hero />
        <div className={styles.home_wrapper}>
          <div className={styles.section}>
            <h1>EDUCATE B4U RECREATE</h1>
            <p>
              Over 15 years Lockerlegends have served your Locking educational
              need
            </p>
            <br />
            <p>
              THE ART-FORM & CULTURE OF A STREET DANCE IS MUCH MORE THAN THE
              MOVES THAT CREATE THE DANCE ITSELF. <br /> THE ORIGINAL DANCE
              STYLE CALLED LOCKING HAS DEEP ROOTS WITHIN A ERA, WHICH MENT SO
              MUCH TO THE UNITY AND DE SEGREGATION OF A PEOPLE… READ… LEARN...
              <span style={{ color: '#ee4e34', fontWeight: 'bold' }}>
                {' '}
                and understand what brought about the evolution of words like
                soul and funk..
              </span>{' '}
              <br />
              <br />
              Understand the DANCERS that contributed to the Original foundation
              of this dance & opened the door to what exist today as <br />
              <br /> “THE STREET DANCE OF LOCKING” <br />
              <br />
              Help us solidify this from just a dance into a ART-FORM to be
              passed down to future generations!
            </p>
          </div>

          <div className={styles.section}>
            <p>Read about locking, culture, interviews and more...</p>
            <br />
            <h1>Editorials</h1>
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
              During these times, the struggle was revealed through the social
              conscious music sung by artists like Marvin Gaye, James
              Brown,Curtis Mayfield andIssac Hayes.
            </p>
          </div>
          <div className={styles.image}>
            <Image
              src='/images/wattsriots.png'
              width='100%'
              height='100%'
              layout='responsive'
              objectFit='cover'
              objectPosition='center'
              priority
            />
          </div>
          <div className={styles.section}>
            <h2>
              “YOU CANNOT KNOW WHERE YOU ARE GOING UNLESS YOU KNOW WHERE YOU
              BEEN”
            </h2>
            <p style={{ textAlign: 'right' }}>unknown authors quote</p>
          </div>
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
              accomplishments made during the civil rights struggles. The BOLD
              generation of the 1970’s was now free to express itself. SOUL
              TRAIN became the portal and revealed to the world its’ creativity.
              Funk music spearheaded the charge and Afro American youth boldly
              displayed their pride, with large Afro hair styles and colorful
              creative clothing. During this time, an art form was born. This
              art form created a subculture which has influenced and
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
              More editorials on the editorial(blog) page, read about the
              history, culture and dance of the artform locking
            </h3>
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
          <div className={styles.section}>
            <h1>FROM CAMBELLOCKING to LOCKING</h1>
            <h2>History of Locking</h2>
            <ReadMoreBtnIn srcUrl='/history' title='Learn more...' />
          </div>
          <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>
            ENJOY THE WEBSITE!
          </h2>
        </div>
      </div>
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
  };
}
