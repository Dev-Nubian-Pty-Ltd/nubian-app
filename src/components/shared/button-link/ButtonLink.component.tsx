import React from 'react';
import styles from './Button-link.module.scss';

interface ButtonLink {
  callback?: any;
  linkText?: string;
  icon?: JSX.Element;
}
const ButtonLink: React.FC<ButtonLink> = ({ callback, linkText, icon }) => {
  const buttonType = linkText ? '' : 'btn-icon';
  return (
    <a className={`${styles['button-link']} ${styles[buttonType]}`} onClick={callback}>
      {icon && icon}
      {linkText && <span className={styles['link-text']}>{linkText}</span>}
    </a>
  );
};

export { ButtonLink };
