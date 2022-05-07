import React from 'react'
import Image from 'next/image'

const AlternateImg = `/images/interview.webp`

export default function sliderItem({title, slug, date, featuredImage}) {
  return (
      <div className={styles.slider_item}>
                    <div className={styles.item} key={slug}>
                      <div className={styles.image}>
                        {featuredImage === null ? (
                          <Image
                            src={AlternateImg}
                            layout='fill'
                            objectFit='cover'
                            alt='blog post image'
                            priority
                          />
                        ) : (
                          <Image
                            src={featuredImage.node.sourceUrl}
                            layout='fill'
                            objectFit='contain'
                            alt='blog post image'
                            priority
                          />
                        )}
                      </div>
                      <h3>{title}</h3>
                      <span>{formatDate(date)}</span>
                      <Link href={`/blog/` + slug} passHref>
                        <a aria-label={title}></a>
                      </Link>
                    </div>
                  )
    </div>
  )
}
