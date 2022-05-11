import Image from 'next/image';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

// styles
import styles from '../../styles/layout/PageLayout.module.scss';

export default function Terminology({ speed }) {
  const { scrollYProgress } = useViewportScroll();
  const yValue = useTransform(scrollYProgress, [0, 1], [0, 500 * speed]);

  /* 
  initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      style={{ y: yValue }}
      
  */

  return (
    <motion.div className={styles.pagelayout}>
      <section>
        <motion.header
        initial={{y: -200, opacity: 0}} animate={{y:0, opacity: 1}} transition={{duration: 0.4}}>
          <motion.h1 initial={{x: -200, opacity: 0}} animate={{x:0, opacity: 1}} transition={{delay: 0.4, duration: 0.4}}>
            Soul Train
          </motion.h1>
          <motion.h2 initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{delay: 0.6, duration: 0.4}}>
            “say it loud i’m black and i’m proud“
          </motion.h2>
        </motion.header>

        <motion.div
          className={styles.image}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -100 }}
          transition={{ duration: 1 }}
          style={{ y: yValue }}
        >
          <Image
            src='/images/soultrain.png'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='cover'
            objectPosition='center'
            priority
          />
        </motion.div>

        <div className={styles.wrapper}>
          <p>
            ON SOUL TRAINS, MOST INFLUENTIAL SHOW WHICH DEFINED THE PRIDE OF A
            NEW GENERATION, GUEST ARTIST JAMES BROWN, PERFORMED SOME OF HIS MOST
            INSPIRATIONAL LYRICS WHICH SPEARHEADED PRIDE IN THE CIVIL RIGHTS
            MOVEMENT…THER SOME OF THE MOST WELL KNOWN STREETDANCE LEGENDS
            DISPLAY THE CAMPBELLOCK DANCE STYLE. ON THIS CLIP.. YOU WILL FIND..
            OG SKEETER RABBIT, TONY GOGO, BUDDY GOGO,GREG CAMPBELLOCK JR. FRED
            “MR. PENGUIN” BERRY, SCOOBY DOO, THE ORIGINAL CAPTAIN CRUNCH, FLUKY
            LUKE,ALPHA ANDERSON, CHARLES ROBOT and The first Lady of Locking
            DAMITA JO FREEMAN along with many others.
          </p>

          <p>
            when Locking became extreamly popular Don “Campbellock” Campbell
            asked to be paid to dance on the show. because of this request he
            was banned from the show for a period of time but as you see locking
            lived on when Dancers like Mike “Peekaboo” Frenke, F&M, Bishop CoCo
            Hall, Alpha Anderson, Guy Evans and others continued on even though
            the show attempted to refrain from spotlighting the dance styles
            Campbellocking introduced by Don Campbell & Damita Jo Freeman And
            The Robot, Introduced by Charles and Angie ‘Robot”
          </p>
          <p>
            Contrary to what many think from its Hollywood Image. Soul Train
            actually premiered in Chicago on August 17, 1970 as a local daily
            program.The ability to have a Afro American based dance show.
            attracted the attention of the Johnson’s Product Company, a Black
            owned company and the manufacturers of the Afro Sheen line of
            hair-care products who agreed to sponsor the program’s expansion
            into syndication.
          </p>
        </div>

        <motion.div
          className={styles.image}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ y: yValue }}
        >
          <Image
            src='/images/soultrain2.png'
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
            Soul Train, when we think of that era in streetdance we think of
            bright clothing and extravagant hats, but this was the first time
            that an Afro American owned company, which produced a product for an
            exclusive market had the opportunity to sponsor and advertise on a
            national ethnic based show. Many have asked why were there no hats
            worn on the early shows . Well here is the reason.
            <br />
            <br />
            Johnson’s Products who was the sponsor wanted to expose the hair
            styles that would advertise their products. The show began airing
            from in selected cities across the United States, on a weekly basis,
            on October 2, 1971. When it moved into syndication, the program’s
            home base was also shifted to Los Angeles,California and KTTV
            Studios and the Hollywood era began. Some of the dancers were
            selected but many were chosen from park auditions, They were
            selected from long soul train line style tryouts by talent
            coordinators such as Pam Brown
          </p>
        </div>
        <motion.div
          className={styles.image}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          style={{ y: yValue }}
        >
          <Image
            src='/gif/soultrainline.gif'
            layout='responsive'
            height='100%'
            width='100%'
            objectFit='cover'
            objectPosition='center'
            priority
          />
        </motion.div>
        <motion.div
          className={styles.wrapper}
          /*   speed={1.5}
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: -100 }}
      exit={{ y: 200 }}
      transition={{ duration: 1 }}
      style={{ y: yValue }} */
        >
          <h2>THE SOUL TRAIN LINE</h2>
          <p>
            The Cultural fashion and dance scene was already in partial bloom in
            Los Angeles with Dance Shows Like “The Real Don Steel show”, “Hulla
            Baloo” and the National syndicated show “American Bandstand”. But
            the roll of African American Dancers on these show were usually
            limited. and Afro American Couples were often separated or not
            allowed to dance next to each other. even with these restrictions
            some of the first streetdance legends were born with dancers like,
            Doozer Raye who sparked interest as he showed the world his
            rendition of the high kicking “Funky Chicken” on the Real Don Steels
            dance spotlight. A rivalry quickly developed between the new Show,
            Soul Train and the old established shows like American Bandstand, As
            dancers became popular on Soul Train they were often forbidden to be
            seen on the competitors shows. As the older shows and segregated
            clubs now realized the value of the African American dancers
            creativity. They began to now welcome the exposure of these now
            popular dancers.
          </p>
        </motion.div>
        <div className={styles.wrapper_col_2}>
          <p>
            Don Cornelius was the shows producer and host a tall, statuesque man
            with a barrelling deep voice and wearing a high Afro natural hair
            style. he exemplified the the success of the social movement of the
            1960s. For the first time the nation was able to look into the night
            club party style scene of the Afro American community.and they saw
            the signature Soul Train Line , which was reminiscent of the old
            cake walk from the baseball negro leagues and second line dancing
            from the south.
          </p>
          <p>
            In the early days. Soul Train drew a tremendous diverse viewing
            audience, with people tuning in nation wide to view the latest
            fashions or dance moves. here is where new styles were born The show
            not only spotlighted dancers but it was a place where both up and
            comming and established musical talent could be showcased and
            interviewed, however they were not simply interview about their
            musical careers , but sensitive social issues,
          </p>
        </div>
        <div className={styles.wrapper}>
          <p>
            This cultural and social influence was never more evident than in
            the James Brown live Soul Train performance of 1972. in what may
            have been considered Soul Trains defining show. as guest performer
            James Brown explained his desire to improve the education at
            historically black colleges,and ended his show with the strong
            lyrics of his song “Say it Loud I’m Black and I’m Proud”as dancers
            Like Damita Jo Freeman joined him on stage. When that show ended
            with Don Cornelius raising his unity fist, the world now knew that
            this was not just a show about dance steps and clothes, but a show
            of purpose and substance. the african american educational process
            continued , as the soul train scramble board contest was the source
            for education on prominent african americans from all walks of life.
          </p>
          <div className={styles.image}>
            <Image
              src='/images/soultrainlogo.png'
              width='100%'
              height='100%'
              layout='responsive'
              objectFit='cover'
              objectPosition='center'
              priority
            />
          </div>
          <p>
            Don Cornelius retired as host in 1993, and the show used guest host
            from that time until 1997, comedian Mystro Clark hosted for
            two-years. Clark , and was then replaced by actor Shemor Moore in
            1999. In 2003, There was another change when actor Dorian Gregory,
            took over and hosted through 2006. then the show aired in reruns
            until it finally ended its run as The Best of Soul Train for its
            final two seasons. But Locking and other creative dance style
            continued to be exposed.featuring many great dancers and musical
            artist.
          </p>
        </div>
        <div className={styles.wrapper}>
          <p>
            {' '}
            The show is known for its tremendous sense of pride it bestowed on
            the African American community with its influence of new dances and
            fashions, In the earlier years it was the stripped sox and wild
            social gestures of dances like Locking , Roboting, and waacking,
            which highlighted the cultural street dance movement and inspired a
            nation wide streetdance explosion that exist worldwide today. The
            show featured animated opening titles and sequences between musical
            performances ,featuring the popular cartoon train created, written
            and produced by various unknown cartoon studios.
            <br />
          </p>
          <p>
            <br />
            It spurred several professional dance groups such as “The Lockers”
            exposed performances developed from the party and street styles of
            Locking and Roboting & from that,later styles like Popping was
            exposed through performances by the Electronic Boogaloo (aka
            Electric boogaloo Lockers,) and the continuation through the 80s as
            locking and popping continued to evolved carried on the show by The
            1980s by Charles “Charley woo” Washington and a group from Compton’s
            “Kaptin Krunch & the funky Bunch”
            <br />
          </p>
          <p>
            <br />
            The motto which exclaimed Soul Train’s longevity,was in the show’s
            opening sequence. it stated it is the “longest-running, first-run,
            nationally-syndicated program in television history,” with over
            1,100 episodes produced from the show’s debut through the 2005-06
            season. Production of first-run episodes was suspended at the
            conclusion of the 2005-06 season, this was the show’s 35th year of
            production. From 2006 to 2007, the program aired archived episodes
            and the show was called, “The Best of Soul Train”.
          </p>
        </div>
        <div className={styles.wrapper}>
          <p>
            The future of Soul Train was uncertain with the announced closing of
            Tribune Entertainment’s syndication division on December 18,
            2007,The show soon after found a new production deal with Trifecta
            Entertainment Group Despite this, in years on air, Soul Train
            currently continue to hold the honor of the longest,
            continuously-running first-run syndicated program Within the
            structure of the program, there have been two enduring
            elements.which became Soul Train trade marks The first was the soul
            train line, which we mentioned earlier the second was also
            culturally based. It was the “Soul Train Scramble Board”, where two
            dancers were given sixty seconds to unscramble a set of letters
            which form the name of a notable performer or a notable person in
            African American history.
            <br />
            <br />
            In describing the person’s renown, the host concludes with the
            phrase “whose name you should know”. thus challenging the kids to
            learn their African American heritage and history.Dancers were
            required to film two shows per day, four shows in a week end, Often
            changing clothes in bathrooms in between shows and fed boxed Golden
            Bird Chicken Lunches.
          </p>
          <p>
            A camaraderie and brotherhood was built up that came across in the
            filming of the shows. . In addition,The earlier pioneers of the show
            created many opportunities for later dancers to go on in
            professional careers, along with many the in studio group of dancers
            (as we mention in this website) who either formed groups or went on
            to become streetdance or professional legends.
            <br />
            <br />
            we saw the show move on to become more diverse and multi
            cultural.The 1980’s continued on with dancers continually developing
            careers and popularity from the shows exposure , such as The ‘Soul
            Brothers” crew, Louie “Ski Carr , Karim Evans, it bridged the
            interracial Gaps as dancers like Susan Song and others were now
            exposed to soul train popularity. And future celebrities were, like
            Rosie Perez, Carmen Electra, Nick Cannon, MC Hammer, Jermain
            Steward, Fred “Rerun” Berry, Pebbles, and NFL legend Walter Payton.
            these are just a few who became famous & were among those who got
            noticed dancing on the program over the years. But the show had many
            street & club known legends & dancers ,who made their mark on Soul
            Train..
            <br />
            <br />
          </p>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Image
              src='/images/jodyjeffrey.png'
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
              Two former dancers, Jody Watley and Jeffery Daniel, enjoyed years
              of success as members of the singing group Shalamar, after they
              were tabbed by Soul Train talent booker/record promoter Dick
              Griffey to replace the group’s original session singers in 1977.
              The show introduced many groups and dancers, Tyrone Proctor, Gary
              Keyes, Little Jo Chisim, Lynn Picket, Pat Davis, Sharon Hill,
              Fredi Maxie, Lenny Jones, Thelma Davis ,Perry Brown and many many
              others formed groups like “Something” Special from the Original
              Soul Train Gang,
              <br />
            </p>
          </div>
        </div>
        <div className={styles.wrapper}>
          <p>
            <br />
            and Dances that still exist and being taught today Like “Waacking”
            were introduced on the show. Many also believe that Waacking was
            part of the Locking explosion,But it was not. although it was
            introduced during the same era. it evolved from the social parties
            of the Gay community. and was later confused as a part of locking
            from its exposure in movies such as “Breaking” The term Punking
            (which was a derogatory term used to discribe the gay people) was
            added to the dance as strait dancers mimicked the waacking style.
          </p>
        </div>
        <div className={styles.wrapper}>
          <p>
            The soul train gang tour, with Gary Keyes, Don Campbell, Mr X,Tyrone
            Proctor & Scooby doo Most Performers who appeared on Soul Train
            generally lip-sync their songs to its recorded version,But some of
            the most influential performers such as James Brown chose to perform
            his songs live.performing a complete live concert performance. The
            entire show was dedicated to him and his influences on not just the
            entertainment field but society in general
          </p>
          <p>
            It must be noted that each guest usually performed twice on each
            program; after their first number, they were joined by the program
            host on-stage for a brief interview. But the thoughts and music of
            “The God Father of Soul” was much more important. In Later years
            Soul Train continued into the 80s & 90s, the doors were open to
            interracial couples and dancers of all ethic backgrounds , THESE
            DOORS WERE OPEN FROM A MOVEMENT OF DANCE & MUSIC that was exposed
            through this historical show.The show was known for two popular
            catch phrases: Referring to itself as the “hippest trip in America”
            at the beginning of the show; and for closing the program with, “…We
            wish you love, peace… and SOUL!” Much thanks to Soul Train and Don
            Cornilius without them the world may have never known the passion of
            a people James Brown.
          </p>
        </div>
        <div className={styles.wrapper}>
          <h1 style={{ color: '#ee4e34' }}>The Damita Jo Freeman Foundation</h1>
          <h1 style={{ color: 'white' }}>Soul Train Dancers speak :</h1>
        </div>
        <div className={styles.wrapper}>
          <p>
            many of you have watched the soul train awards and wondered where
            are the real stars of that show “THE ORIGINAL DANCERS” well we are
            here because of many distorted depictions and stories of the early
            days on soul train Damita Jo Freeman and Co host Flo Jenkins have
            put panels together tp tell the world the real stories and true
            history of their experience within the show . but the cultural
            movement and the street dance scene that truly inspired its
            acceptance within a society just exiting the civil rights era at the
            end of the 1970s.
          </p>
          <p>
            Myself along with Lockerlegends was proud to be asked to participate
            on 6/2/2019 the second panel event was successfully held at Darby
            Park in the Inglewood section of the inner-city where I along with
            Damita Jo ,Alpha Anderson, Freddie Maxie, Thelma Davis, Perry
            Brown,Creole Creekmore, Lewis”deputy” Green,Sharon Hill, Bill “Slim”
            Williams ,Queen Turner, and Dianne Brunner Pukas from yhose original
            era 1970s shows, spoke as they were joined by an audience full of
            notables. as they began to set the record strait. cumulating with a
            special presentation from todays new school locking dancer Rebecca
            Tsaoism and the famed Soul Train Line I want to thank Damita and Flo
            for taking up the mantle to where to share the real with this
            generation…..educate b4u retreat……..Og Skeeter Rabbit Today there
            are numerous soul train pages & organizations existing on the
            internet , but this page was initially written and posted in 2001
            when there were no international web presence for both locking and
            Soul Train
          </p>
        </div>
      </section>
    </motion.div>
  );
}

/* 
const Image2 = ({ speed }) => {
  const { scrollYProgress } = useViewportScroll();
  const yValue = useTransform(scrollYProgress, [1, 0], [1, 50 * speed]);

  return (
    
  );
};
 */
/* const Image3 = ({ speed }) => {
  const { scrollYProgress } = useViewportScroll();
  const yValue = useTransform(scrollYProgress, [0, 1], [0, 450 * speed]);

  return (
    
  );
}; */
