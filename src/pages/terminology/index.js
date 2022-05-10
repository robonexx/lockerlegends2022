import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { motion, useViewportScroll, useTransform } from 'framer-motion';

// styles
import styles from '../../styles/layout/Parallax.module.scss';

export default function Terminology() {
  return (
    <motion.div className={styles.parallax_page}>
      <section className={styles.parallax}>
        <div className={styles.info_container}>
          <div>
            <h1>Soul Train</h1>
            <h2>“say it loud i’m black and i’m proud“</h2>
            <p>LOCKING AND SOUL TRAIN GO HAND IN HAND.</p>
          </div>
          <Image1 speed={0} />
        </div>

        <Content1 speed={-2} />
        <Image2 speed={-1} />
      </section>
    </motion.div>
  );
}

const Image1 = ({ speed }) => {
  const { scrollYProgress } = useViewportScroll();
  const yValue = useTransform(scrollYProgress, [0, 1], [0, 500 * speed]);
  return (
    <motion.div className={styles.image}>
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
      className={styles.content}
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
        agreed to sponsor the program’s expansion into syndication. Soul Train.
        when we think of that era in streetdance we think of bright clothing and
        extravagant hats , but this was the first time that an Afro American
        owned company , which produced a product for an exclusive market. had
        the opportunity to sponsor and advertise on a national ethnic based
        show, Many have asked why were there no hats worn on the early shows .
        Well here is the reason.
      </p>
    </motion.div>
  );
};
const Content2 = () => (
  <div className={styles.content}>
    <p>
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
  const yValue = useTransform(scrollYProgress, [1, 0], [0, 200 * speed]);

  return (
    <motion.div
      className={styles.image}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ y: 200}}
      transition={{ duration: 1 }}
      style={{ y: yValue }}
    >
      <Image
        src='/images/soultrain2.png'
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

const Content3 = () => (
  <div className={styles.content}>
    <h2>THE SOUL TRAIN LINE</h2>
    <p>
      The Cultural fashion and dance scene was already in partial bloom in Los
      Angeles with Dance Shows Like “The Real Don Steel show”, “Hulla Baloo” and
      the National syndicated show “American Bandstand”. But the roll of African
      American Dancers on these show were usually limited. and Afro American
      Couples were often separated or not allowed to dance next to each other.
      even with these restrictions some of the first streetdance legends were
      born with dancers like, Doozer Raye who sparked interest as he showed the
      world his rendition of the high kicking “Funky Chicken” on the Real Don
      Steels dance spotlight. A rivalry quickly developed between the new Show,
      Soul Train and the old established shows like American Bandstand, As
      dancers became popular on Soul Train they were often forbidden to be seen
      on the competitors shows. As the older shows and segregated clubs now
      realized the value of the African American dancers creativity. They began
      to now welcome the exposure of these now popular dancers.
    </p>
  </div>
);

const Image3 = () => (
  <div className={styles.image}>
    <Image
      src='/gif/soultrainline.gif'
      width='100'
      height='100'
      layout='responsive'
      objectFit='cover'
      objectPosition='center'
      priority
    />
  </div>
);
