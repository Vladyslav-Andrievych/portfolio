import styles from './banner.module.scss';

export default function ArrowsDown() {
  return (
    <div className={styles.arrowsDown}>
      <div className={styles.arrow}>
        <div className={styles.arrowLine}></div>
        <div className={styles.arrowLine}></div>
      </div>
      <div className={styles.arrow}>
        <div className={styles.arrowLine}></div>
        <div className={styles.arrowLine}></div>
      </div>
    </div>
  );
}
