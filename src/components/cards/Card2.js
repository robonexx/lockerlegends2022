import React from 'react'

export default function Card2(key, src, title, href) {
  return (
    <div className={styles.card} key={key}>
    <div className={styles.image}>
     
        <Image
          src={src}
          layout='fill'
          objectFit='cover'
          alt='blog post image'
          priority
        />
    </div>
    
    <h3>{title}</h3>
    <span>{date}</span>
    <Link href={href} passHref>
      <a aria-label={title}></a>
    </Link>
    </div>
  )
}


