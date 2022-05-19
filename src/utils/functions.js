import { domToReact } from 'html-react-parser';
import Image from 'next/image';

// styles
import styles from '../styles/pages/BlogSlug.module.scss';

// replace image function
export const replaceImage = {
  replace: ({ name, attribs, children }) => {
    if (name === 'figure' && /wp-block-image/.test(attribs.class)) {
      return <>{domToReact(children, replaceImage)}</>;
    }

    if (name === 'img') {
      return (
        <span className={styles.image}>
          <Image
            src={attribs.src}
            width={attribs.width}
            height={attribs.height}
            objectFit='cover'
            layout='responsive'
            priority
            alt={attribs.alt ? attribs.alt : 'please ad featured image '}
          />
        </span>
      );
    }
  },
};

// formatting date function

export function formatDate(date) {
  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  let today = new Date(date);

  const formatted = today.toLocaleDateString('sv-SV', options);
  return formatted;
}

// function meta description (not used yet may 7th) keeping for future use
export function metaDescription(str) {
  return str.replace(/^(.{135}[^\s]*).*/, '$1').trim() + '...';
}

// function remove tags (not used yet may 7th) keeping for future use
export function removeTags(str) {
  return str.toString().replace(/(<([^>]+)>)/gi, '');
}
