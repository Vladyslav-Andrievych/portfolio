import styles from './projects.module.scss';

import Link from 'next/link';

export default function ProjectCard({
  name,
  description,
  layoutDesciption,
}: {
  name: string;
  description: string;
  layoutDesciption: string;
}) {
  return (
    <div className={styles.projectCard}>
      <h4 className={styles.projectCardTitle}>{name}</h4>
      <p className={styles.projectCardDescription}>
        {`${description}. ${layoutDesciption}`}
      </p>
      <Link href="/" className={styles.projectCardLink}>
        See more
      </Link>
    </div>
  );
}
