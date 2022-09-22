import { FC, useEffect, useRef } from 'react';
import classes from './ProgressBar.module.css';

interface ProgressProps {
  progress: number;
}
const ProgressBar: FC<ProgressProps> = ({ ...props }) => {
  const { progress } = props;
  const barIndicator = useRef<HTMLDivElement | any>();
  useEffect(() => {
    animateProgress(progress);
  }, [progress]);

  const animateProgress = (progress: number) => {
    requestAnimationFrame(() => {
      if (barIndicator.current) {
        barIndicator.current.style.setProperty('--width', `${progress}%`);
      }
    });
  };

  return (
    <div className={classes['progress-container']}>
      <span className={classes['progress-description']}>
        <small>progress</small>
        <small>{`${progress}%`}</small>
      </span>
      <div className={classes['progress-bar']}>
        <span className={classes['progress-indicator']} ref={barIndicator}></span>
      </div>
    </div>
  );
};

export { ProgressBar };
