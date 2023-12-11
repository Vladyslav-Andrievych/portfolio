import styles from './techstack.module.scss';

import data from '../../../data/techStack';

import TechCategory from './TechCategory';

export default function TechStack() {
  const techInfo = Object.entries(data);

  return (
    <section className={styles.techStack}>
      <h2 className={styles.techStackTitle}>Tech Stack</h2>
      {techInfo.map(([category, items], index) => {
        //change key property value to id
        return (
          <TechCategory key={index} categoryName={category} items={items} />
        );
      })}
    </section>
  );
}
