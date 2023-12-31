import { useState, useEffect, useRef } from 'react';

import styles from './projects.module.scss';

import ProjectCard from './ProjectCard';
import ToggleButton from './ToggleButton';

interface ProjectData {
  name: string;
  description: string;
  repositoryName: string;
  layout: string;
  repositoryUrl: string;
  url: string;
  techStack: string[];
}

export default function ProjectsSlider({
  projectsInfo,
}: {
  projectsInfo: ProjectData[];
}) {
  const [projectNumber, setProjectNumber] = useSlider();

  const counterValue = `${projectNumber + 1}/${projectsInfo.length}`;

  return (
    <div className={`${styles.projectsSlider} ${styles.slider}`}>
      <span className={styles.sliderCounter}>{counterValue}</span>
      <div
        className={`${styles.sliderCards} ${styles.projectCardsContainer}`}
        id="projectCardsContainer"
      >
        {projectNumber > 0 && (
          <ToggleButton
            direction="back"
            onClick={setProjectNumber}
            projectNumber={projectNumber}
          />
        )}
        <ul className={styles.projectCardsList} id="projectCardsList">
          {projectsInfo.map((projectInfo, index) => {
            const isActive = projectNumber === index;
            return (
              <ProjectCard
                projectData={projectInfo}
                isActive={isActive}
                key={index}
              />
            );
          })}
        </ul>
        {projectNumber < projectsInfo.length - 1 && (
          <ToggleButton
            direction="forth"
            onClick={setProjectNumber}
            projectNumber={projectNumber}
          />
        )}
      </div>
    </div>
  );
}

function useSlider() {
  const [projectNumber, setProjectNumber] = useState(0);

  useEffect(() => {
    function onWidthSizeChange() {
      const containerElem = document.querySelector('#projectCardsContainer');
      const listElem = document.querySelector('#projectCardsList');

      if (containerElem && listElem) {
        const { clientWidth } = containerElem;

        // 100px - half of width of projectCard
        listElem.style.marginLeft = `${clientWidth / 2 - 100}px`;
      }
    }

    onWidthSizeChange();

    window.addEventListener('resize', onWidthSizeChange);

    return () => {
      window.removeEventListener('resize', onWidthSizeChange);
    };
  });

  useEffect(() => {
    function listPositioning() {
      const listElem = document.querySelector('#projectCardsList');
      if (listElem) {
        //220px - width of projectCard + margin-right of projectCard
        listElem.style.translate =
          projectNumber === 0 ? `0px` : `-${220 * projectNumber}px`;
        listElem.style.transition = 'all 1s';
      }
    }

    listPositioning();
  }, [projectNumber]);

  return [projectNumber, setProjectNumber] as const;
}
