import { FormDataSet, getFormStructure } from '@utils/providers/formData';
import React, { useContext, useEffect, useState } from 'react';

import { validateEmail } from '@utils/helpers/validate_email.helper';
import { validateCredentials } from '@utils/helpers/validate_signinCreds.helper';

import { Button } from '@components/shared/button/Button.component';
import { RepositoryContext } from '@root/api/repository/Repository.context';
import { LoginRequestInput } from '@root/api/services/sessions/dto/sessions/sessions.dto';
import { LoginInput } from '@root/hooks/sessionReducer';
import styles from './login.module.scss';

const initialCredentials: LoginRequestInput = {
  email: undefined,
  password: undefined,
};

const Login: React.FC = () => {
  const { sessionsDataStore } = useContext(RepositoryContext);
  const [inActionable, setActionable] = useState<boolean | undefined>(true);
  const [credentials, setCredentials] = useState<LoginInput>(initialCredentials);
  const [formStructure, setFormStructure] = useState<FormDataSet[] | undefined>();
  const handleOnChange = (event: any) => {
    const target = event.target;
    const targetValue = target.value.trim().length === 0 ? undefined : target.value;
    setCredentials((prevCreds: LoginInput) => ({ ...prevCreds, [target.name]: targetValue }));
    const isValid = validateCredentials({ ...credentials }) && validateEmail(credentials.email) ? false : true;
    setActionable(isValid);
  };

  const handleOnSubmit = async (event: any) => {
    event.preventDefault();
    const result = await sessionsDataStore.signIn(credentials);
    console.log(result);
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
