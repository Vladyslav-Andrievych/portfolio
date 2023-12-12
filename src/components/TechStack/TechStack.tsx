import styles from './techstack.module.scss';

import data from '../../../data/techStack';

import TechCategory from './TechCategory';

export default function TechStack() {
  const techStackInfo = Object.entries(data);

  return (
    <section className={styles.techStack}>
      <h2 className={styles.techStackTitle}>Tech stack</h2>
      {techStackInfo.map(([category, items], index) => {
        //change key property value to id
        return (
          <TechCategory key={index} categoryName={category} items={items} />
        );
      })}
    </section>
  );
}
