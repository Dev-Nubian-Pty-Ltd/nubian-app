import { PlusIcon } from '@heroicons/react/24/outline';
import React from 'react';
import classes from './Button-link.module.scss';

interface ButtonLink {
  callback?: any;
  linkText?: string;
}
const ButtonLink: React.FC<ButtonLink> = ({ callback, linkText }) => {
  return (
    <a className={classes['button-link']} onClick={callback}>
      <PlusIcon className={`icon ${classes['icon']}`} />
      {linkText && <span className={classes['link-text']}>{linkText}</span>}
    </a>
  );
};

export default ButtonLink;
