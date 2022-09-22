import { FormDataSet, getFormStructure } from '@utils/providers/formData';
import React, { useEffect, useState } from 'react';

import { validateEmail } from '@utils/helpers/validate_email.helper';
import { validateCredentials } from '@utils/helpers/validate_signinCreds.helper';

import { Button } from '@components/shared/button/Button.component';
import { SignInRequest } from '@root/api/services/sessions.service';
import styles from './login.module.scss';

const initialCredentials: SignInRequest = {
  email: undefined,
  password: undefined,
};

const Login: React.FC = () => {
  const [inActionable, setActionable] = useState<boolean | undefined>(true);
  const [credentials, setCredentials] = useState<SignInRequest>(initialCredentials);
  const [formStructure, setFormStructure] = useState<FormDataSet[] | undefined>();

  const handleOnChange = (event: any) => {
    const target = event.target;
    const targetValue = target.value.trim().length === 0 ? undefined : target.value;
    setCredentials((prevCreds) => ({ ...prevCreds, [target.name]: targetValue }));
    const isValid = validateCredentials({ ...credentials }) && validateEmail(credentials.email) ? false : true;
    setActionable(isValid);
  };

  const handleOnSubmit = async (event: any) => {
    event.preventDefault();
  };

  useEffect(() => {
    setFormStructure(getFormStructure('login'));
    return () => {
      setCredentials(initialCredentials);
    };
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
                required={item.required}
                placeholder={item.placeHolder}
                key={idx}
                onInput={handleOnChange}
                onBlur={handleOnChange}
              />
            );
          })}
        <Button status={'primary'} disabled={inActionable} buttonText="Continue" fullWidth={true} callback={handleOnSubmit} />
      </form>
    </div>
  );
};

export default Login;
