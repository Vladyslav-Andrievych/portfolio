import styles from './about.module.scss';

import data from '../../../data/about';

export default function About() {
  const aboutInfo = Object.entries(data);

  return (
    <section className={styles.about}>
      <h2 className={styles.aboutTitle}>About</h2>
      <div className={`${styles.aboutDescription} ${styles.description}`}>
        <ul className={styles.descriptionList}>
          {aboutInfo.map(([property, value], index) => {
            //change key property value to id
            return (
              <li className={styles.descriptionItem} key={index}>
                <span className={styles.descriptionItemProperty}>
                  {property}
                </span>
                <span className={styles.descriptionItemValue}>{value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
