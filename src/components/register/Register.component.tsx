import { FormDataSet, getFormStructure } from '@utils/providers/formData';
import React, { useEffect, useState } from 'react';

import styles from './Register.module.scss';

const Register: React.FC = () => {
  const [formStructure, setFormStructure] = useState<FormDataSet[] | undefined>();

  useEffect(() => {
    setFormStructure(getFormStructure('register'));
  }, []);

  return (
    <div className={styles['auth-form']}>
      <form action="">
        {formStructure &&
          formStructure.map((item, idx) => {
            return (
              <input
                type={item.type}
                name={item.name}
                autoFocus={item.autoFocus}
                required={item.required}
                placeholder={item.placeHolder}
                key={idx}
              />
            );
          })}
      </form>
    </div>
  );
};
export default Register;
