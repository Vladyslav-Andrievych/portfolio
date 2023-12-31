import styles from './projects.module.scss';

import Link from 'next/link';

interface ProjectData {
  name: string;
  description: string;
  repositoryName: string;
  layout: string;
  repositoryUrl: string;
  url: string;
  techStack: string[];
}

export default function ProjectCard({
  projectData,
  isActive,
}: {
  projectData: ProjectData;
  isActive: boolean;
}) {
  return (
    <li
      className={`
                ${styles.projectCardsListItem} 
                ${styles.projectCard}
                `}
      style={isActive ? { transform: 'translate(0, -20px)' } : {}}
    >
      <h4 className={styles.projectCardTitle}>{projectData.name}</h4>
      <p className={styles.projectCardDescription}>
        {`${projectData.description}. ${projectData.layout}`}
      </p>
      <Link href="/" className={styles.projectCardLink}>
        See more
      </Link>
    </li>
  );
}
