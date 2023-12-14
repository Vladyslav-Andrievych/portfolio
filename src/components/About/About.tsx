import styles from './about.module.scss';

import data from '../../../data/about';
//add LinkedIn ...
//add courses property
//just like in about.js file

import DescriptionListItem from './DescriptionListItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVenusMars,
  faUser,
  faLocationDot,
  faEnvelope,
  faCodeMerge,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';

export default function About() {
  const aboutInfo = { ...data };

  return (
    <section className={styles.about}>
      <h2 className={styles.aboutTitle}>About</h2>
      <div className={`${styles.aboutDescription} ${styles.description}`}>
        <ul className={styles.descriptionList}>
          <DescriptionListItem property="sex" value={aboutInfo.sex}>
            <FontAwesomeIcon
              icon={faVenusMars}
              className={styles.descriptionItemIcon}
            />
          </DescriptionListItem>
          <DescriptionListItem property="name" value={aboutInfo.name}>
            <FontAwesomeIcon
              icon={faUser}
              className={styles.descriptionItemIcon}
            />
          </DescriptionListItem>
          <DescriptionListItem property="location" value={aboutInfo.location}>
            <FontAwesomeIcon
              icon={faLocationDot}
              className={styles.descriptionItemIcon}
            />
          </DescriptionListItem>
          <DescriptionListItem property="email" value={aboutInfo.email}>
            <FontAwesomeIcon
              icon={faEnvelope}
              className={styles.descriptionItemIcon}
            />
          </DescriptionListItem>
          <DescriptionListItem property="github" value={aboutInfo.github}>
            <FontAwesomeIcon
              icon={faCodeMerge}
              className={styles.descriptionItemIcon}
            />
          </DescriptionListItem>
          <DescriptionListItem property="education" value={aboutInfo.education}>
            <FontAwesomeIcon
              icon={faGraduationCap}
              className={styles.descriptionItemIcon}
            />
          </DescriptionListItem>
        </ul>
      </div>
    </section>
  );
}
