'use client';
import Image from 'next/image';
import styles from './LogoCarousel.module.css';

export default function LogoMarquee() {
  const logos = [
    '/images/logo1.png',
    '/images/logo2.png',
    '/images/logo3.png',
    '/images/logo4.png',
    '/images/logo5.png',
  ];

  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marqueeTrack}>
        <div className={styles.marqueeContent}>
          {[...logos, ...logos].map((src, i) => (
            <div key={i} className={styles.logoItem}>
              <Image src={src} alt={`Logo ${i}`} width={160} height={80} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
