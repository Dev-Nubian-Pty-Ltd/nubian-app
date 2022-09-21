import React from 'react';
import classes from './Title.module.scss';

interface TitleProps {
  text: string | null | undefined;
  caption?: string | any;
  style?: any;
}
const Title: React.FC<TitleProps> = ({ text, caption, style }) => {
  return (
    <h3 className={classes['title']} style={style}>
      {text}
      {caption && <small className={classes['caption']}>{caption}</small>}
    </h3>
  );
};

export { Title };
