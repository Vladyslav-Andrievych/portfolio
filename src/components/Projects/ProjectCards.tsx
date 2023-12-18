import styles from './projects.module.scss';

import ProjectCard from './ProjectCard';

interface ProjectData {
  name: string;
  description: string;
  repositoryName: string;
  layout: string;
  repositoryUrl: string;
  url: string;
  techStack: string[];
}

export default function ProjectCards({
  projectsInfo,
}: {
  projectsInfo: ProjectData[];
}) {
  return (
    <div className={`${styles.projectsCardsContainer} ${styles.projectCards}`}>
      {projectsInfo.map((projectInfo, index) => {
        return (
          <ProjectCard
            key={index}
            name={projectInfo.name}
            description={projectInfo.description}
            layoutDesciption={projectInfo.layout}
          />
        );
      })}
    </div>
  );
}
