import styles from './banner.module.scss';

import { whisperRegular } from '@/src/fonts/fonts';

export default function Banner() {
  return (
    <section className={styles.banner}>
      <h1 className={`${styles.bannerHeader} ${whisperRegular.className}`}>
        &ldquo;This is my attempt to introduce myself as a frontend
        developer...&rdquo;
      </h1>
      <div className={`${styles.bannerPullDown} ${styles.pullDown}`}>
        <span className={styles.pullDownText}>Let&apos;s go</span>
      </div>
    </section>
  );
}
