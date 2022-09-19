import { FC, useRef } from 'react';
import classes from './Textarea.module.scss';

interface TextareaProps {
  name: string;
  callback?: any;
}
const Textarea: FC<TextareaProps> = ({ callback, name }) => {
  const textAreaRef = useRef<HTMLElement | any>();

  const adjustHeight = (value: any) => {
    const numberOfLineBreaks = (value.match(/\n/g) || []).length;
    const newHeight = 36 + numberOfLineBreaks * 16 + 12 + 12;
    return newHeight;
  };

  const handleOnChange = async (event: any) => {
    const target = event.target;
    textAreaRef.current.style.height = adjustHeight(textAreaRef.current.value) + 'px';
    if (callback) await callback(target);
  };

  return (
    <div className={classes['message-input-group']}>
      <textarea placeholder={'message...'} ref={textAreaRef} onChange={(e) => handleOnChange(e)} name={name} />
    </div>
  );
};

export default Textarea;
