import styles from './projects.module.scss';

import data from '../../../data/projects';

import ProjectsSlider from './ProjectsSlider';

export default function Projects() {
  const projectsInfo = [...data];

  return (
    <section className={styles.projects}>
      <h2 className={styles.projectsTitle}>Projects</h2>
      <p className={styles.projectsDescription}>
        I worked on these projects while studying at an online university
      </p>
      {/* add this Portfolio, TodoList, js-full-github-user-data, counter-project */}
      <ProjectsSlider projectsInfo={[...projectsInfo]} />
    </section>
  );
}
