import styles from './projects.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';

export default function ToggleButton({
  direction,
  onClick,
  projectNumber,
}: {
  direction: string;
  onClick: (arg: number) => void;
  projectNumber: number;
}) {
  const button =
    direction === 'back' ? (
      <button
        className={`${styles.sliderToggleBtn} ${styles.sliderToggleBtnLeft}`}
        onClick={() => onClick(projectNumber - 1)}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    ) : (
      <button
        className={`${styles.sliderToggleBtn} ${styles.sliderToggleBtnRight}`}
        onClick={() => onClick(projectNumber + 1)}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    );

  return button;
}
