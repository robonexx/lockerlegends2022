import React from 'react';
import FaqList from '../../components/faqbox/FaqList';
import styles from '../../styles/pages/StepsAndMoves.module.scss';

export default function Steps() {
  return (
    <div className={styles.steps_wrapper}>
      <div className={styles.container_top}>
        <h1>THE STEPS & MOVES OF LOCKING</h1>
        <h4>
          Lockerlegends has often been told that moves created by pioneers other
          than Don Campbell should not be associated with Locking, We find that
          amazing, as all over the world people are teaching and doing the basic
          moves that they have seen the Pioneers do for decades.
        </h4>
        <h2>THE FOUNDATION</h2>
        <h4>
          Many People are confused about what steps and moves make up what we
          know as The Original Foundation of locking
          <br />
          Where and how were they developed? & why are they done the way that
          they are?
          <br />
          <br />
          …The following is a list of some of the basic moves steps and gestures
          as they were developed by the various old school pioneers of the
          locking era. Most of this foundation was developed between the time
          Don Campbell introduced the first Locking movements in the early
          1970s, and when the various Original Groups including the Lockers
          refined their performances in 1974. We call this the EVOLUTIONARY
          STAGE.. After those dates enthusiast developed groups and routines
          around the world. But most of their movements could only be based on
          quick visuals of what were thought to be the basics of the dance .
          There was an assumption that locking was based only on moves and
          rythem, with no purpose , background or fundamentals. In todays world
          of mass media there is the ability to learn what, why and how the
          artform and subculture of the dance affected the actual moves
          themselves. …
        </h4>
        <h2>THE VERY EARLY STAGES OF LOCKING</h2>
        <h4>
          as Don Campbell exibited it back then, looked very different from
          today’s style it only comprised of.. Pacing or Timing, arm Locks,
          Giving 5, Back front claps, basic STRAIT points, splits, dives and
          Basic knee drops Basic Locks...
        </h4>
        <h2>THE SYCHRONIZED DANCE STEPS OF LOCKING</h2>
        <h4>
          Many of these steps were the product and the contributions of many
          Locking Pioneers. some were even from other dancers of diffrent dance
          styles. Again, technically these steps are not Locks, But they have
          been associated with the Dance of Locking for years. And they have
          been comprised to complete the evolution of the dance art form of
          LOCKING, These steps have been done alone. But they were often done in
          Duos, Trios, and by couples in the night clubs. to form a unison
          effect. This was the inspiration that existed prior to these steps
          being introduced into Locking performances, as routiens...
        </h4>
      </div>
      <div className={styles.faq_section}>
        <FaqList />
      </div>
    </div>
  );
}
