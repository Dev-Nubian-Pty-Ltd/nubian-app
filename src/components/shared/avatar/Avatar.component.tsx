import React from 'react';
import classes from './Avatar.module.scss';

interface AvatarProps {
  imageSrc: string | undefined | null;
}
const Avatar: React.FC<AvatarProps> = ({ imageSrc }) => {
  return (
    <div className={classes['avatar']}>
      <div className={classes['app-user-main']}>
        {imageSrc ? (
          <img className={classes['avatar-img']} src={imageSrc} />
        ) : (
          <div className={classes['app-user-main']}>
            <svg className={classes['no-avatar']} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export { Avatar };
