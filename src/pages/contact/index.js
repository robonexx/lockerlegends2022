import Head from 'next/head';

// styles
import styles from '../../styles/pages/Contact.module.scss';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <Head lang='en'>
        <title>Contact Us - LockerLegends</title>
        <meta name='description' content='contact information ' />
        <meta property='og:title' content='Contact lockerlegends' />
      </Head>

      <h2>This page will be updated shortly</h2>
      <h1>CONTACT US!</h1>
      <h2>OG SKEETER RABBIT</h2>
      <p>skeeterrabbit@lockerlegends.net</p>
      <h1> </h1>
      <h2>
        If you have issues with the website or any questions about the site
      </h2>
      <p>robertwagar@gmail.com</p>
      <h2></h2>
    </div>
  );
}
