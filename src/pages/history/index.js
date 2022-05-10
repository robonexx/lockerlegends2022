import React from 'react';
import Image from 'next/image';
import Content_container from '../../layouts/pagelayout/Content_container';

import { motion, useViewportScroll, useTransform } from 'framer-motion';

// styles
import styles from '../../styles/layout/Parallax.module.scss';

export default function History() {
  return (
    <div className={styles.parallax_page}>
      <section className={styles.parallax}>
        <Content_container>
          <div>
            <h1>OUR STORY OF THE HISTORY OF LOCKING</h1>
            <h2>
              THIS IS A HISTORY OF THE ORIGINAL FOUNDATION OF A STREET DANCE
              CALLED ”LOCKING”
            </h2>
            {/* <p>
              You can click on the images to go that specific page and read more
            </p> */}
          </div>
        </Content_container>
        <div className={styles.container}>
          <p style={{color: '#ee4e34'}}>:as seen through the eyes of some of the original pioneers</p>
        </div>
        <div className={styles.container}>
          <p>
            NOTE: History is a compilation of historical events, most history is
            passed down legendary information, as seen from various
            perspectives, some are documented information passed down through
            writings or first hand eye witnesses. This information has been the
            results of first hand eye witnesses, and original creators and
            contributors from the ORIGINAL locking era. There are various
            historical accounts of various events in the 4 decades of Lockings
            existence. But there is only ONE Original era, which was seen
            through the many eyes that experienced it, which all came together
            to produce its foundation <br /> <br />
            <p style={{ color: '#ee4e34' }}>...Read and Enjoy</p>
          </p>
        </div>

        <div className={styles.content_2_col}>
          <div className={styles.image}>
            <Image
              src='/images/gogobrotherswatts.png'
              width='100'
              height='100'
              layout='responsive'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
          <div className={styles.container}>
            <p>
              Locking or Campbellocking is a dance art form with improvisational
              move called the lock. These were created by Don Campbell and put
              to a specific rhythm and style in the nightclubs of Los Angeles in
              the early 1970s.
              <br />
              <br />
              <br /> <br />
              <br /> <br />
              This dance and subculture quickly caught on and was soon the rage
              of a new television dance show called Soul Train. Individual
              dancers displayed quick locking and pointing movements along with
              hand slaps and splits.
            </p>
          </div>
        </div>

        <div className={styles.content_2_col}>
          <p>
            Don and his partner, Damita Jo Freeman toured with the Soul Train
            Gang. Shortly after, Don comprised a group of improvisational solo
            style locking dancers (Each dancer would step out do his solo and
            step back in line) keeping time in the background was the only
            source of synchronized dancing this group of solo artist did. They
            were comprised of Don Campbell, Fred “Mr. Penguin” Berry, Charles
            Robot, Slim Robot and Sambo Lock. They were called The “ Campbellock
            Dancers“.
          </p>
          <p>
            Don Campbell along with dancers like Greg “Campbell Jr” Pope, Jimmy
            “Scooby doo” Foster, Fred “Mr. Penguin” Berry ( AKA Rerun),Damita Jo
            Freeman, The Go-Go- Brothers (Tony Lewis and Edwin “Buddy”
            Lombard),Kevin “YoYo”Lombard, James “Skeeter Rabbit” Higgins, Leo
            “Fluky Luke” Williamson, Johnny “Sambo Lock” McCloud,Damita Jo
            Freeman, Charles “Robot” Washington, Bill “Slim Robot” Williams,
            Alpha Anderson, Fredie Maxie, Guy “Shocklock” Evans, Tito Collins,
            Jeffery Daniels, Arnetta “Netta Bug” Johnson. Eugine “F & M
            Henderson...
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.video}>
            <p>Don “Campbellock” Campbell early soul Train Line</p>
            <iframe
              src='https://www.youtube.com/embed/RoH1VGA9-oE'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className={styles.container}>
          <p>
            {' '}
            ...and SEVERAL other old school originals would meet in nightclubs
            like, ” The Citadel” in Hollywood, The Summit on the Hill or
            Mavericks Flats and share steps and moves. after the initial years
            locking when began to grow, Dancers like Adolfo “Shabba doo”
            Quinones , Hayword “Tito Collins , Mike “Peek a boo” Frenke and
            Freddi Maxie and a few Others joined the original club scene
          </p>
        </div>

        <div className={styles.content_2_col}>
          <div className={styles.image}>
            <Image
              src='/images/mavericksflat.png'
              width='100'
              height='100'
              layout='responsive'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
          <p>
            During that era & time, Greg Campbell Jr. Pope “Scooby doo” Foster,
            “, along with the GoGo ,YoYo CoCo brothers Family of Tony and Buddy
            Go-Go and Skeeter Rabbit, Arnetta Johnson . Kevin “yoYo” Lombard.
            sometimes partying with Leo “Fluky Luke” Williamson & Fred Berry at
            house parties, high schools , picniks and social events creating
            steps that were performed in unison. A movement towards group
            dancing was taking place in Watts,Compton & South Central, Los
            Angeles.and then continued interacting with other street dancers
            Like Greg “Captain Crunch” Dandridge & Steve “Sinbad Crane” This was
            evolution of the STREET MOVEMENT OF LOCKING
          </p>
        </div>

        <div className={styles.container}>
          <p style={{ marginTop: '5vh' }}>
            In 1972 The Go-Go brothers (Tony and Buddy along with the Original
            Skeeter Rabbitt & Kevin YoYo ) combined to form the first
            synchronized locking dance group; performing skits and routines in
            both large arenas as well as small high school functions.
            <br />
            In late 1972, early 1973 Scooby Doo and Greg Campbellock Jr.
            combined with the Go- Go Brothers (Tony & Buddy), Skeeter Rabbitt
            (OG) and with female lockers Arnetta Johnson, Lorna Dune & Shelly
            Cepeda formed the first unisex Locking group called, “Creative
            Generation“. This group studied dance, taught, performed and toured
            as members of the Legendary Watts Writers Workshop. Later that
            summer,Is when Don Campbell along with Toni Basil organized and
            introduced the group, “THE LOCKERS”( originally named the
            campbellock dancers after Don Campbell’s first group). “The Lockers”
            was one of the most dynamic, influential groups in the history of
            the dance, comprising both improvisational dancers and synchronized
            dancers to form a group who could attract the culturally diverse
            ,COMMERCIAL audiences
            <br />
            <br />
            Greg “Cambellock Jr” Pope , Had left the Watts writers first group
            “Creative Generation” and helped introduced to the group (The
            Lockers), synchronized locking choreography, which he had learned
            during his Creative Generation experience, at the Watts Writers
            Workshop. Him along with Don Campbell, “Slim Robot”, Fred “Rerun”
            Berry, Fluky Luke, Trained Ballerina & Chorographer Toni Basil,
            along with a young new talent, from Chicago Adolfo “Shabba Doo”
            Quinones. The Dance style of Locking went from just a style to a
            performance artform, and was NOW revealed to the world.
            <br />
            <br />
            During the Original groups existence, in the early 70’s. Other OG
            dancers such as Tony Go-Go and “The Original Skeeter Rabbit” (James
            Higgins)were members who were added and danced as OFFICIAL
            ALTERNATES with the Original Official Group The Lockers,
            <br />
            <br />
            Many dancers have claimed original status ,some even taking pictures
            at events at mavericks today , or at Soul Train reunion Parties, and
            THEY ARE NOT. They may have danced on soul train or went to the
            clubs AFTER that original era , but they want you to think they were
            there right along with the REAL OG’s & they were not original. YES
            they may have been good, and may have done great commercial stuff
            ,but many of them were not back there on that original scene ,when
            locking FIRST developed. we have mentioned most who was & we
            clarified most who were around durng other time periods. if you were
            on the ORIGINAL scene and are not mentioned we would be happy to
            include you , If you want to know who was and who wasn’t just ask ,
            we will post and clarify your confusion… ORIGINAL means ORIGINAL,
            <br />
            <br />
            Please take note : All the way up into the 80s the group The LOCKERS
            was reconstructed many times with various dancers added or dropped
            as members.( see some of the later groups)As the group went through
            many personal & professional transitions, many of the dancers added
            in that time span , were not original era dancers and were not added
            on an OFFICIAL level, but they did dance with various original
            members under the assumption they were dancing with “THE ORIGINAL
            LOCKERS” BEWARE of all of those claiming to have been there !
            <br />
            <br />
            Also, during the early to mid 70s period other urban groups such as
            33RPM and the Ghetto Dancers were also formed (see acknowledgement
            page). These were comprised of various combinations of other old
            school locking (dancers) pioneers. Once the dance was introduced on
            National Television, It set off a dance phenomenon which now began
            spreading from the Los Angeles inner city, to the once segregated
            Suburbs, of Orange County the once segregated surrounding areas,(
            this is how other dancers of different generation came about) And
            eventually the style was seen and began to be imitated across the
            Country. Some of these newly found admirers of the style found
            themselves exposed to the ORIGINAL movement and Identified with the
            Original Foundation, Because the Dance style of Locking had ONLY
            been exposed through site.The Original Culture ,History and
            Foundation was only passed on to those that lived or sought the
            inner city experience.The discovery of the Newly discovered “Dance
            style” enticed supburban groups, promoters, dancers and managers,
            who were normally segregated to flood the scene . Some were driven
            by the love, facination and respect for the artform. Others simply
            ignored any foundatition and only disired to exploit an artform to a
            commercial market. Many of these dancers and groups, who bypassed
            the Foundation to simply imitate the moves as they thought they saw
            them, they were known by the real street sub-culture simply as “SLOP
            lockers”.
            <br />
            <br />
            Note: Many of these groups and individules quickly clammered to
            exploit not just the artform of locking but it’s entire culture and
            roots. Many renamed steps and plagerized entire taped routines. Some
            never learned the internal rules of the sub-culture. They never
            learned or inquired about the brotherhood which made locking great.
            They only attemped to capitalize, exploit and alter the history of
            locking.
            <br />
            <br />
            Many don’t understand what the History &; background has to do with
            the dance of Locking, Many wonder why it just can’t be a dance
            style, show or circus act..WATCH this video WATTS STAX and see what
            the inspiration was and still is for those that KEEP IT REAL
            <br />
            <br />
            By 1973 there were an excess of pioneers known as lockers who made
            their name and reputations in the urban communities and night clubs.
            The few known as the Original members of “The Lockers Group” became
            the internationally famous. But ORIGINAL Dancers Like Guy
            “Shocklock” Evans, Jeffery “Cat Man” Macintire, Eugene “F&M”
            Henderson, Roy “Lie Lock”, “Sneaky T”, Enock “Elmer Fudd”, John
            “Okiedoke” Wilson “Elmer Fud’ Smith (RIP), , Steve “Sinbad” Crane,
            Arnetta “Nettabug” Johnson,Greg “Capt Crunch” Dandridge, Fredi Maxie
            and several others were some of the Street legends, who contributed.
            <br />
            <br />
            By the mid 1970s locking had now been seen by many, and was now
            spreading. Southern California now had the Originating movement, but
            the dance now had migrated from the Inner city to suburban areas,
            such as Orange County California, where some of the originals were
            now accepted and shared the dance style with locals in that area,
            and to the Ventura Valley where those that seen an imitated the
            dance style open the doors to other eyes. But the Original style
            continued to develop in the Southern California Hoods of Watts,
            South Central , Compton and Inglewood, with Other 80s groups and Old
            School legends who bridged the gap between Locking and Popping
            <br />
            <br />
            There were many who danced as members of the group “The Lockers” and
            many more who are refered to as Lockers by virtue of the dance of
            locking, which they have represented
            <br />
            <br />
            In 1974 Jimmy “Scoobydoo Foster toured with a group called
            “Something Special’ introducing Locking along with various other
            dances internationally , into Japan,
            <br />
            <br />
            By 1975 the artform had evolved both socially and professionally and
            in the late 1970’s, “The Original Lockers Group disbanded” and a
            third generation was formed in the mid 1980’s, adding old school
            pioneer “Alpha“Anderson,(who created the alpha floor move) along
            with old schoolers from the mid 70s, Lewis “Deputy” Green, Lionel
            “Big D” Douglas“and Anna “Lollipop” Sanchez, and 2nd generation GoGo
            brothers Manny “Loose Caboose” Tristin this formed the third
            generation “LOCKERS” Group. In the mid 1970’s Jimmy Scooby do Foster
            and a Group called “Something Special “was the first to
            internationally expose Asia to Locking along with other Cultural
            social dances. In the Late 70s Watts groups, such as the second
            generation of Kaptin Krunch (Charles Washington of the FBs) and his
            Funky Bunch followed the legacy of the Inner City Streets, by
            performing on Soul Train and in the 80s and as members of the
            Lockers in a 1984 performance, dancing both Locking & Popping. By
            the mid 1980’s, Tony Go-Go Lewis established a school re-introducing
            the locking dance art in Japan. Today, there is a wave of interest
            to know and understand the history and sub-culture of a true dance
            phenomenon all over the world.
            <br />
            <br />
            By no means were these the only groups or contributors ( There are
            so many) to this dance and subculture that helped to form the multi
            style and cultures of today’s hip hop History of anything begans
            with an inspiration and an action, The inspiration of the artform
            came from a struggle of a people, the and action was put into place
            by Don Campbell, The early history stims from this one person
            through a group of early contributors to a specific area at a
            specific time in history,The innercity of South central Los Angeles,
            Watts & Compton California will always be that inception point in
            history, the issues surrounding those times will always be the
            inspiration.from there it insited a streetdance movement with
            purpose and pride. Today when one speaks of Locking history it can
            include many points of exposure to the style and all create an ever
            expanding chapter Many thanks to Don Campbell and the many other Old
            and New School pioneers.
            <br />
            <br />
            Many ask why can’t Locking just be an act like the circus, why can’t
            it just be entertainment , well it can be entertainment, but not
            like clowns, or minstril , it means much more check out the video
            below, soul and funk music linked to what the influences was that
            made this dance great
            <br />
            <br />
            Any Questions.. please send us an email at info@lockerlegends.net .
          </p>
        </div>
      </section>
    </div>
  );
}

/* 
import Image from 'next/image';

import { motion, useViewportScroll, useTransform } from 'framer-motion';

// styles
import styles from '../../styles/layout/Parallax.module.scss';

export default function Terminology() {
  return (
    <motion.div className={styles.parallax_page}>
      <section className={styles.parallax}>
        <div className={styles.container}>
          <div>
            <h1>Soul Train</h1>
            <h2>“say it loud i’m black and i’m proud“</h2>
            <p>LOCKING AND SOUL TRAIN GO HAND IN HAND.</p>
          </div>
          <Image1 speed={0} />
        </div>

        <Content1 speed={-2} />
        <Image2 speed={-1} />
        <Content2 />
        <div className={styles.container}>
          <Image3 speed={1} />
          <Content3 speed={0.5} />
        </div>
        <div className={styles.content}>
          <p>
            Don Cornelius was the shows producer and host a tall, statuesque man
            with a barrelling deep voice and wearing a high Afro natural hair
            style. he exemplified the the success of the social movement of the
            1960s. For the first time the nation was able to look into the night
            club party style scene of the Afro American community.and they saw
            the signature Soul Train Line , which was reminiscent of the old
            cake walk from the baseball negro leagues and second line dancing
            from the south.
            <br />
          </p>
          <p>
            <br />
            In the early days. Soul Train drew a tremendous diverse viewing
            audience, with people tuning in nation wide to view the latest
            fashions or dance moves. here is where new styles were born The show
            not only spotlighted dancers but it was a place where both up and
            comming and established musical talent could be showcased and
            interviewed, however they were not simply interview about their
            musical careers , but sensitive social issues,
          </p>
          <div className={styles.image}>
            <Image
              src='/images/soultrain2.png'
              width='100'
              height='100'
              layout='responsive'
              objectFit='cover'
              objectPosition='center'
              priority
            />
          </div>
        </div>
        <div className={styles.content}>
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
          <Image
            src='/images/soultrainlogo.png'
            width='100'
            height='100'
            layout='responsive'
            objectFit='cover'
            objectPosition='center'
            priority
          />
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
        <div className={styles.container}>
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
        <div className={styles.container}>
          <p>
            The future of Soul Train was uncertain with the announced closing of
            Tribune Entertainment’s syndication division on December 18,
            2007,The show soon after found a new production deal with Trifecta
            Entertainment Group Despite this, in years on air, Soul Train
            currently continue to hold the honor of the longest,
            continuously-running first-run syndicated program Within the
            structure of the program, there have been two enduring
            elements.which became Soul Train trade marks The first was the soul
            train line ,which we mentioned earlier the second was also
            culturally based. It was the “Soul Train Scramble Board”, where two
            dancers were given sixty seconds to unscramble a set of letters
            which form the name of a notable performer or a notable person in
            African American history. In describing the person’s renown, the
            host concludes with the phrase “whose name you should know”. thus
            challenging the kids to learn their African American heritage and
            history.Dancers were required to film two shows per day, four shows
            in a week end, Often changing clothes in bathrooms in between shows
            and fed boxed Golden Bird Chicken Lunches.
            <br />
            <br />
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
        <div className={styles.content_2_col}>
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
          <p>
            Two former dancers, Jody Watley and Jeffery Daniel, enjoyed years of
            success as members of the singing group Shalamar, after they were
            tabbed by Soul Train talent booker/record promoter Dick Griffey to
            replace the group’s original session singers in 1977. The show
            introduced many groups and dancers, Tyrone Proctor, Gary Keyes,
            Little Jo Chisim, Lynn Picket, Pat Davis, Sharon Hill, Fredi Maxie,
            Lenny Jones, Thelma Davis ,Perry Brown and many many others formed
            groups like “Something” Special from the Original Soul Train Gang,
            <br />
          </p>
        </div>
        <div className={styles.container}>
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
        <div className={styles.container}>
          <p>
            The soul train gang tour, with Gary Keyes, Don Campbell, Mr X,Tyrone
            Proctor & Scooby doo Most Performers who appeared on Soul Train
            generally lip-sync their songs to its recorded version,But some of
            the most influential performers such as James Brown chose to perform
            his songs live.performing a complete live concert performance. The
            entire show was dedicated to him and his influences on not just the
            entertainment field but society in general .It must be noted that
            each guest usually performed twice on each program; after their
            first number, they were joined by the program host on-stage for a
            brief interview. But the thoughts and music of “The God Father of
            Soul” was much more important. In Later years Soul Train continued
            into the 80s & 90s, the doors were open to interracial couples and
            dancers of all ethic backgrounds , THESE DOORS WERE OPEN FROM A
            MOVEMENT OF DANCE & MUSIC that was exposed through this historical
            show.The show was known for two popular catch phrases: Referring to
            itself as the “hippest trip in America” at the beginning of the
            show; and for closing the program with, “…We wish you love, peace…
            and SOUL!” Much thanks to Soul Train and Don Cornilius without them
            the world may have never known the passion of a people James Brown.
          </p>
        </div>
        <div className={styles.container}>
          <h1 style={{ color: '#ee4e34' }}>The Damita Jo Freeman Foundation</h1>
          <h1>Soul Train Dancers speak</h1>
        </div>
        <div className={styles.container}>
          <p>
            many of you have watched the soul train awards and wondered where
            are the real stars of that show “THE ORIGINAL DANCERS” well we are
            here because of many distorted depictions and stories of the early
            days on soul train Damita Jo Freeman and Co host Flo Jenkins have
            put panels together tp tell the world the real stories and true
            history of their experience within the show . but the cultural
            movement and the street dance scene that truly inspired its
            acceptance within a society just exiting the civil rights era at the
            end of the 1970s. Myself along with Lockerlegends was proud to be
            asked to participate on 6/2/2019 the second panel event was
            successfully held at Darby Park in the Inglewood section of the
            inner-city where I along with Damita Jo ,Alpha Anderson, Freddie
            Maxie, Thelma Davis, Perry Brown,Creole Creekmore, Lewis”deputy”
            Green,Sharon Hill, Bill “Slim” Williams ,Queen Turner, and Dianne
            Brunner Pukas from yhose original era 1970s shows, spoke as they
            were joined by an audience full of notables. as they began to set
            the record strait. cumulating with a special presentation from
            todays new school locking dancer Rebecca Tsaoism and the famed Soul
            Train Line I want to thank Damita and Flo for taking up the mantle
            to where to share the real with this generation…..educate b4u
            retreat……..Og Skeeter Rabbit Today there are numerous soul train
            pages & organizations existing on the internet , but this page was
            initially written and posted in 2001 when there were no
            international web presence for both locking and Soul Train
          </p>
        </div>
      </section>
    </motion.div>
  );
}

const Image1 = ({ speed }) => {
  const { scrollYProgress } = useViewportScroll();
  const yValue = useTransform(scrollYProgress, [0, 1], [0, 500 * speed]);
  return (
    <motion.div
      className={styles.image}
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ y: yValue }}
    >
      <Image
        src='/images/soultrain.png'
        width='100'
        height='100'
        layout='responsive'
        objectFit='cover'
        objectPosition='center'
        priority
      />
    </motion.div>
  );
};
const Content1 = ({ speed }) => {
  const { scrollYProgress } = useViewportScroll();
  const yValue = useTransform(scrollYProgress, [0, 1], [0, 50 * speed]);
  return (
    <motion.div
      className={`${styles.content}`}
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      style={{ y: yValue }}
    >
      <p style={{ textTransform: 'lowercase' }}>
        ON SOUL TRAINS, MOST INFLUENTIAL SHOW WHICH DEFINED THE PRIDE OF A NEW
        GENERATION, GUEST ARTIST JAMES BROWN, PERFORMED SOME OF HIS MOST
        INSPIRATIONAL LYRICS WHICH SPEARHEADED PRIDE IN THE CIVIL RIGHTS
        MOVEMENT…THER SOME OF THE MOST WELL KNOWN STREETDANCE LEGENDS DISPLAY
        THE CAMPBELLOCK DANCE STYLE. ON THIS CLIP.. YOU WILL FIND.. OG SKEETER
        RABBIT, TONY GOGO, BUDDY GOGO,GREG CAMPBELLOCK JR. FRED “MR. PENGUIN”
        BERRY, SCOOBY DOO, THE ORIGINAL CAPTAIN CRUNCH, FLUKY LUKE,ALPHA
        ANDERSON, CHARLES ROBOT and The first Lady of Locking DAMITA JO FREEMAN
        along with many others.
      </p>
      <p>
        when Locking became extreamly popular Don “Campbellock” Campbell asked
        to be paid to dance on the show. because of this request he was banned
        from the show for a period of time but as you see locking lived on when
        Dancers like Mike “Peekaboo” Frenke, F&M, Bishop CoCo Hall, Alpha
        Anderson, Guy Evans and others continued on even though the show
        attempted to refrain from spotlighting the dance styles Campbellocking
        introduced by Don Campbell & Damita Jo Freeman And The Robot, Introduced
        by Charles and Angie ‘Robot”
        <br />
      </p>
      <p>
        Contrary to what many think from its Hollywood Image. Soul Train
        actually premiered in Chicago on August 17, 1970 as a local daily
        program.The ability to have a Afro American based dance show. attracted
        the attention of the Johnson’s Product Company, a Black owned company
        and the manufacturers of the Afro Sheen line of hair-care products who
        agreed to sponsor the program’s expansion into syndication.
      </p>
    </motion.div>
  );
};
const Content2 = () => (
  <div className={styles.container}>
    <p>
      Soul Train, when we think of that era in streetdance we think of bright
      clothing and extravagant hats, but this was the first time that an Afro
      American owned company, which produced a product for an exclusive market
      had the opportunity to sponsor and advertise on a national ethnic based
      show. Many have asked why were there no hats worn on the early shows .
      Well here is the reason.
      <br />
      <br />
      Johnson’s Products who was the sponsor wanted to expose the hair styles
      that would advertise their products. The show began airing from in
      selected cities across the United States, on a weekly basis, on October 2,
      1971. When it moved into syndication, the program’s home base was also
      shifted to Los Angeles,California and KTTV Studios and the Hollywood era
      began. Some of the dancers were selected but many were chosen from park
      auditions, They were selected from long soul train line style tryouts by
      talent coordinators such as Pam Brown
    </p>
  </div>
);

const Image2 = ({ speed }) => {
  const { scrollYProgress } = useViewportScroll();
  const yValue = useTransform(scrollYProgress, [1, 0], [1, 50 * speed]);

  return (
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
  );
};

const Content3 = ({ speed }) => {
  const { scrollYProgress } = useViewportScroll();
  const yValue = useTransform(scrollYProgress, [1, 0], [0, 150 * speed]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: -100 }}
      exit={{ y: 200 }}
      transition={{ duration: 1 }}
      style={{ y: yValue }}
    >
      <div>
        <h2>THE SOUL TRAIN LINE</h2>
        <p>
          The Cultural fashion and dance scene was already in partial bloom in
          Los Angeles with Dance Shows Like “The Real Don Steel show”, “Hulla
          Baloo” and the National syndicated show “American Bandstand”. But the
          roll of African American Dancers on these show were usually limited.
          and Afro American Couples were often separated or not allowed to dance
          next to each other. even with these restrictions some of the first
          streetdance legends were born with dancers like, Doozer Raye who
          sparked interest as he showed the world his rendition of the high
          kicking “Funky Chicken” on the Real Don Steels dance spotlight. A
          rivalry quickly developed between the new Show, Soul Train and the old
          established shows like American Bandstand, As dancers became popular
          on Soul Train they were often forbidden to be seen on the competitors
          shows. As the older shows and segregated clubs now realized the value
          of the African American dancers creativity. They began to now welcome
          the exposure of these now popular dancers.
        </p>
      </div>
    </motion.div>
  );
};

const Image3 = ({ speed }) => {
  const { scrollYProgress } = useViewportScroll();
  const yValue = useTransform(scrollYProgress, [0, 1], [0, 450 * speed]);

  return (
    <motion.div
      className={styles.image}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      style={{ y: yValue }}
    >
      <Image
        src='/gif/soultrainline.gif'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        priority
      />
    </motion.div>
  );
};

*/
