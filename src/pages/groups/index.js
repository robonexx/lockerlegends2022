import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '../../styles/layout/PageLayout.module.scss';

export default function Groups() {
  return (
    <div className={styles.pagelayout}>
      <Head lang='en'>
        <title>Groups & Dancers - LockerLegends</title>
        <meta
          name='description'
          content='Information history about the dancers and groups that was active in the 70s'
        />
        <meta property='og:title' content='Information about groups and dancers' />
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
            GROUPS & DANCERS
          </motion.h1>
          <motion.h2
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            “Old school" ACKNOWLEDGEMENT ROOM
          </motion.h2>
        </motion.header>

        <motion.div className={styles.image}>
          <Image
            src='/images/wildandpeaceful.png'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='cover'
            objectPosition='center'
            priority
          />
        </motion.div>
        <p>
          Many of these groups and dancers were lost in the history, As most of
          he time we only recognized those we have seen on television or in
          movies, But many of these are real street pioneers. Some of which
          existed before The Group “The Lockers” ever formed. These dancers were
          actually the inspirations from the streets, They inspired the
          performances of Locking that you were able to see on stage and screen,
          Many were dancers who were influenced by the social movement of the
          1960s, and passed on that inspiration, Others were inspired by some of
          the pioneer dancers who became, commercial professional performers,and
          only after the stage had been developed. But they all deserve
          recognition for there contributions…On this page you will find both
          the recognition for what was done on the streets and parties, as well
          as what was done on the stage.
        </p>
        <h1>CREATIVE GENERATION</h1>
        <p>
          In the 1960’s The Watts Writers Workshop was formed to develop
          entertainment talent in the inner cities of Watts, Compton and Los
          Angeles. In 1972 they recognized the beginning stages of the artform
          of locking. The Watts Writers Workshop invited several known Locking
          dancers to study, teach and perform for their workshop. This was to be
          the first unisex locking dance group and the creation of many
          synchronized routines Members : Tony Lewis, Edwin Lombard ( The GoGo
          Bros), James Higgins( Skeeter Rabbit), Greg Pope (Campbellock Jr,),
          Jimmy Foster (Scooby Doo), Arnetta Johnson, (NettaBug) Fredie Maxie,
          Lorna Dune & Shelly Cepeda ( These Female Lockers were known as the
          Toota Woota Sisters).
        </p>

        <h2>Ghetto Dancers</h2>
        <motion.div className={styles.image}>
          <Image
            src='/images/ghettodancers.png'
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
            Formed in 1973. These locking dancers were pioneers who came from
            the true source. They performed (as a group) on the TV show American
            Bandstand and were well respected in the inner city nightclubs and
            on the locking dance circuit. They were often seen at Maverick’s
            Flat, The Summit on the Hill and Blueberry Hill Nightclubs. This
            group performed with Kool and the Gang and at the tribute to Quincy
            Jones celebration.and “The Tonight Show” Hosted by Steve Allen
            Members: Greg Dandridge ” Captain Crunch”, Eugene Henderson “F&M”,
            Steve Crane “Sinbad” Morris Bailey “Cisco Kid”, Kenny Henderson
            “FleaLock”
          </p>
          <p>
            In 1975 members F & M and FleaLock left the group and The original
            Skeeter Rabbit performed two shows with the Ghetto Dancers Group,
            The picture above was taken at A tribute show for Quincy Jones Show,
            Standing, Steve “Sinbad” Crane, Morris “Cisco Kid” Bailey. Greg
            “Captain Crunch” Dandridge, (Floor) James “Skeeter Rabbit” Higgins
          </p>
        </div>

        <motion.div className={styles.wrapper}>
          <p>
            Morris Bailey better Known as “Cisco Kid” with the Early Pioneer
            Locking group “The GhettoDancers” He was an Early Soul Train Dancer
            and a regular at Clubs like Blueberry Hill and Mavricks Flats in the
            Early 70s he will be forever missed by those that were there from
            the beginning of the Locking movement and were able to see his
            energy,love and contribution to the Dance of Locking.
          </p>
        </motion.div>

        <div className={styles.wrapper_col_2}>
          <motion.div className={styles.image}>
            <Image
              src='/images/33rpm.png'
              layout='responsive'
              height='100%'
              width='100%'
              objectFit='cover'
              objectPosition='center'
              priority
            />
          </motion.div>
          <p>
            The Group 33 RPM organized in 1974 toured with Sid and Marty Kroft
            and performed on the wide world of sports Globe Trotters anniversary
            show. This group performed high level quick moving synchronized
            routines. right picture: ( Pictured left to right) “The Lionel (”Big
            D” ) Douglas, James Higgins (Skeeter Rabbit) “John Wilson (”Okie
            Doke”) Michael Frenke (”Peek a boo” ), ,(single picture)Haywood
            (”Tito”) Collins . (Not Pictured), Tony “Go Go” Lewis, Also not
            pictured is manager and alternate dancer Cameron “Cam” Walker
          </p>
        </div>
        <h2>The Alphabet Kids</h2>
        <div className={styles.wrapper_2_col}>
          <p>
            This group was formed by Haywood “Tito” Collins Pictured (on the far
            right) in 1974 this group was significant in the early locking
            market showing how locking had affected the younger generation and
            had become a movement , this group was the first Locking group to
            compete and WIN the Television Gong Show in 1975 , shown here with
            dancer John St Cier ( far left) the group would often incorporate
            various soul train dancers such as “Tick” and Mr. X into their act.
            They were managed by AIMEE ENTERTAINMEN
          </p>
          <div className={styles.image}>
            <Image
              src='/images/alphabetkids.png'
              width='100%'
              height='100%'
              layout='responsive'
              objectFit='cover'
              objectPosition='center'
              priority
            />
          </div>
        </div>
        <h2>“THE SOMETHING SPECIAL” dance group</h2>
        <p>
          A unique group of soul train dancers which featured early Locking
          icons Jimmy “Scooby Doo Foster ” & Pat Davis, although this group was
          not a classical Locking crew , as they exhibited many of the early
          dancing styles , Locking was featured by two of the best,
        </p>
        <div className={styles.image}>
          <Image
            src='/images/somethingspecial.png'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='cover'
            objectPosition='center'
            priority
          />
        </div>
        <h2>Wild And Peaceful</h2>
        <div className={styles.wrapper_2_Col}>
          <p>
            The above Group Formed in 1974 out of LA Jefferson High School, with
            streetdancers from South central Los Angeles, They became well known
            throughout the Los Angeles Street circuit for their involvement with
            High school show competitions
          </p>
          <div className={styles.image}>
            <Image
              src='/images/wildandpeaceful2.png'
              width='100%'
              height='100%'
              layout='responsive'
              objectFit='cover'
              objectPosition='center'
              priority
            />
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Image
              src='/images/thelockerslline.png'
              width='100'
              height='100'
              layout='responsive'
              objectFit='cover'
              objectPosition='center'
              priority
            />
          </div>
          <p>
            MANY HAVE DANCED AND HAVE EARNED THE RIGHT TO TELL THE WORLD THEY
            WERE WITH THE LOCKERS GROUP
          </p>
          <p>
            There were several generations which had members who danced with the
            group “the Lockers” In 1974 James “SkeeterRabbit’ Higgins was added
            and performed with them during the “Frank Sanatra” Tour 1974, In
            1976 Tony GoGo was added and performed with the group,
          </p>
        </div>
        <div className={styles.wrapper_2_col}>
          <div className={styles.image}>
            <Image
              src='/images/thelockerslate.png'
              width='100'
              height='100'
              layout='responsive'
              objectFit='cover'
              objectPosition='center'
              priority
            />
          </div>
          <p>
            Although the Original Professional Group was legally signed to ICM
            management. Don Campbell would sometimes assemble impromptu groups
            of pioneers together to perform live, at various functions, often at
            Hollywood Funtions such as the Hollywood Theater owners Christmas
            Events and the Friers club parties,They would perform as “The
            Lockers” This included pioneers such as Fred Berry, Mike “Peekaboo”
            Frenke, Tito Collins, Skeeter Rabbit, Tick, Mr X and others , By the
            end of the 1970’s The original Group had gone through various
            changes, and The name “The Lockers had been used by various members
            of the Original Group. during the late 70s up until resent times,
            They have assembled to perform at various times in history. using
            names like “The Original or Fabulous LOCKERS, also during the 1980s
            several other combinations of originals and post Soul Train dancers
            was put together, Below see some of the Later generations..
          </p>
        </div>

        <p>
          The above group formed in the late 1970s after Fred Berry & Toni Basil
          left ,and when the Original Lockers Trio of Greg Cambellock Jr, Leo
          Flukey Luke & Shabbadoo, broke away forming their own faction of
          Lockers , in the above group you see Original early 70s Members Slim,
          Tony GoGo & Don Campbell, along with original era pioneer Alpha
          Anderson, and Orange County talent Lewis “The Deputy” Green. “Stan the
          man”
        </p>

        <div className={styles.wrapper}>
          <p>
            Later in the early 1980s , by that time Don Campbell re constructed
            several versions ,with several members under the Group name “THE
            LOCKERS”
            <br /> <br />
            TOP: Lional “BigD” Douglas, Don Campbell,BELOW” Lewis “Deputy Green,
            Anna “Lollipop” Sanchez, Greg Campbellock Jr. and Alpha Anderson..
            This group was put together in the Late 1970s after the evolutionary
            period
          </p>
          <div className={styles.image}>
            <Image
              src='/images/lockerslate70s2png.png'
              width='100'
              height='100'
              layout='responsive'
              objectFit='cover'
              objectPosition='center'
              priority
            />
          </div>
        </div>
        <h1>THERE WERE MANY OTHERS</h1>
        <p>
          who were from the inner city or soul train scene before the dance
          desegregated and migrated to suburban cities like Orange County & The
          San Fernando Valley
        </p>
        <div className={styles.wrapper_2_col}>
          <p>
            Here is a list of other Pre commercial era dancers They are
            ORIGINALS from the early Locking stages. They are either connected
            by there involvement with Soul Train or the initial Night Clubs of
            that era. Some are only known by nickname but we want to recognize
            their involvement in the evolution of the art.
          </p>
          <p>
            Leo Walker “Shaboo” second generation Yo-Yo brother , Singer and
            choreographer , Pat Davis – original Member of the Soul Train Gang
            ,Sneaky T – Early original pioneer ,Jeffery “Cat Man”Macintire –
            Early 70s pioneer ,Roy “LieLock” Early Pioneer ,SamboLock “one of
            the first Pioneers ,Bishop Hall & Reggie Co-Co “Bang Bang” very
            early locking pioneer “,Sweet T” early soul Train and locking dancer
            ,Guy “Shocklock” Evans , Jackie Penn, Rose January, Arnetta Johnson,
            Shelly Cepeda, Lorna Dune, Seaside,Hotdog, Bob “Fuji Malone, Enoch
            “Elmer Fud” & Peter G and the mid 70s “Which a Way dancers” many
            members of the early GoGo & YoYo brothers family ,..
          </p>
        </div>
        <h2>ALL REAL STREET LEGENDS - from the original era</h2>
        <p>
          After the evolutionary period in the early 1970s the dance was
          spreading, by two means, personal migration opened the doors in
          Southern California, with the acceptance of integration, but it also
          continued to be passed down in the Original inner-city areas where it
          originated, 80s Old school legends can be found in Orange County,
          Ventura Valley and South Central Los Angeles hoods as well as other
          cities throughout the USA
        </p>
        <p>Where dancers saw and imitated the lockers 7 their performances</p>
        <p>It’s called “THE POST ERA GENERATION OF LOCKING”</p>
        <p>
          Below are a list of dancers who came after the original era, some were
          from areas which had now opened up from prior segregation and made
          names for themselves in their locking communities
          <br />
          These are The Old schoolers from different generations of Los Angeles
        </p>
        <h2>AFTER THE ORIGINAL EVOLUTIONARY ERA</h2>
        <p>Cam Walker</p>
        <p>Denny Terrio</p>
        <p>
          The Late 70s & 80s Inner City Oldschooles from Watts,Compton & South
          Central & Long Beach as the dance migrated to the suburbs it was also
          passed down to inner city groups
        </p>
        <p>
          Lockers from late 70s & 80s , who went on to become members of the
          Electric Boogaloos
        </p>
        <p>Suga Pop</p>
        <p>Stephan Nichols</p>
        <p>KAPTIN KRUNCH & THE FUNKY BUNCH (1980s Compton)</p>
        <div className={styles.image}>
          <Image
            src='/images/captaincrunch.png'
            width='100'
            height='100'
            layout='responsive'
            objectFit='cover'
            objectPosition='center'
            priority
          />
        </div>
        <p>Charles (Kaptin Krunch) Washington</p>
        <p>John “Scooby Two”Robinson</p>
        <p>
          The Orange County (OC) Generation of Locking scene began around 1973
          and after the initial & original inner-city movement created a locking
          market,Its exposure came through soul train, & the migration to
          suburban eras by some original Soul Train & Lockers members .. The
          Orange county scene also produced commercial oportunity, for groupd
          like (OC) Funky Bunch, Dance Machine, leading into the Las Vegas
          dancing scene of the 1980s, The many notables from that performance
          era were
        </p>
        <p>Lewis Green “Deputy”</p>
        <p>Lional Douglas “Big D”</p>
        <p>Anna “Lollipop” Sanchez</p>
        <p>Manny “Loose Caboose” Tristan</p>
        <p>Steve ” Sugarfoot” Notario</p>
        <p>Tony “Crackerjack” Pierce</p>
        <p>Vince Harper</p>

        <div className={styles.wrapper}>
          <p>
            The San Fernando Valley locking scene took flight beginning in the
            late 1970s after exposure to locking through soul train & Locking
            performances, this locking scene opened the door by its close
            connection to entertainment industry of Hollywood, That Valley style
            of Locking influenced the Michael Jackson style & the Breaking
            movies of the 1980s, which featured original Locker Adolpho “Shabba
            doo” Queonneis
            <br />
            <br />
            Paul & Tom Sanchez
            <br />
            <br />
            Richard “Richie Rich”Lenchner
            <br />
            <br />
            Shawn “panda’ Whittington
          </p>

          <p>
            Although many were not from the ORIGINAL ERA which produced &
            created Locking , these dancers contributed to the continued
            evolving of the dance throughout the later 70s into the 80s & shy
            todays standards are still considerers “OLD SCHOOL PIONEERS”…much
            respect to these other dances
          </p>
          <p>
            By Mid to late1970’s the dance had also migrated from Orange County
            to Las Vegas, through the production of groups by promoter Jeff
            Kutiage, who formed the group Dance Machine , and later produced the
            Las Vegas Show Splash, through this Dancers like Frank Sundance Sams
            ,Ricochet Rabbit, Steve Notorio, Tony Crackerjack pierce, Vince
            Happer and others were developed this show ran for over 20yrs
          </p>
        </div>
        <p>
          Anyone with information on any of these dancers or any forgotten “True
          Pioneers”
          <br />
          <br />
          Please send any info or comments to feedback@lockerlegends.net
        </p>
      </section>
    </div>
  );
}
