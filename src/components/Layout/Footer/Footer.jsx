import React, { useContext, useState, useCallback, useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { observer } from 'mobx-react';
import cns from 'classnames';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useToasts } from 'react-toast-notifications';

import { SvgIcon } from '@ui';

import styles from './Footer.module.scss';

const formInitial = {
  email: '',
};

const Footer = observer(({ className }) => {
  const { addToast } = useToasts();

  const [loading, setLoading] = useState(false);
  const [menuActive, setMenuActive] = useState(null);

  const handleMenuTitleClick = useCallback(
    (id) => {
      if (menuActive === id) {
        setMenuActive(null);
      } else {
        setMenuActive(id);
      }
    },
    [menuActive]
  );

  const handleValidation = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Enter email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  const handleSubmit = useCallback(async (values, { resetForm }) => {
    setLoading(true);

    addToast('Should send email', { appearance: 'success' });

    // await callbackContext
    //   .submitForm({
    //     type: 'Help',
    //     payload: Object.keys(values).map((key) => ({ id: key, content: values[key] })),
    //   })
    //   .then((_res) => {
    //     resetForm();
    //     uiContext.setModal('callbacksuccess');
    //   })
    //   .catch((_error) => {
    //     addToast('Ошибка при отправке', { appearance: 'error' });
    //   });

    setLoading(false);
  }, []);

  return (
    <footer className={cns(styles.footer, className)}>
      <div className="container"></div>
    </footer>
  );
});

export default Footer;
