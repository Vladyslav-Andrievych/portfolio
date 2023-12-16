import ArrowsDown from './ArrowsDown';

import styles from './banner.module.scss';

import { whisperRegular } from '@/src/fonts/fonts';

export default function BannerPrompt() {
  return (
    <div className={styles.prompt}>
      <span className={`${styles.promptText} ${whisperRegular.className}`}>
        Let&apos;s go
      </span>
      <ArrowsDown />
    </div>
  );
}
