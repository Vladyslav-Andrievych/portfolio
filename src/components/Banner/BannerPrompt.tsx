import ArrowsDown from './ArrowsDown';

import styles from './banner.module.scss';

import { robotoBold } from '@/src/fonts/fonts';

export default function BannerPrompt() {
  return (
    <div className={styles.prompt}>
      <span className={`${styles.promptText} ${robotoBold.className}`}>
        Let&apos;s go
      </span>
      <ArrowsDown />
    </div>
  );
}
