import { XMarkIcon } from '@heroicons/react/24/outline';
import { FormDataSet } from '@root/utils/providers/formData';
import { FC } from 'react';
import { Title } from '../title/Title.component';

import classes from './Dialog.module.css';

interface DialogProps {
  formData?: FormDataSet[];
  disabled?: boolean;
  onChangeCallback?: any;
  onSubmitCallback?: any;
  title: string;
  caption: string;
  showDialog?: any | any;
}
const Dialog: FC<DialogProps> = ({ ...props }) => {
  const { formData, onSubmitCallback, title, caption, showDialog } = props;

  const showForm = formData && onSubmitCallback && onSubmitCallback && showDialog;

  return (
    <div className={classes['dialog']}>
      <div className={classes['dialog-wrapper']}>
        <div className={classes['dialog-header']}>
          <Title text={title} caption={caption} />
          <span className={classes['close-dialog']} onClick={showDialog}>
            <XMarkIcon className={classes['icon']} />
          </span>
        </div>
        <div className={classes['dialog-body']}>{showForm && <form></form>}</div>
        <div className={classes['dialog-actions']}></div>
      </div>
    </div>
  );
};

export { Dialog };
