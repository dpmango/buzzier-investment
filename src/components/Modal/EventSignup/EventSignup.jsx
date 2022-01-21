import React, { useContext, useState, useCallback, useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { observer } from 'mobx-react';
import cns from 'classnames';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useToasts } from 'react-toast-notifications';

import { Modal, Input, Button, Checkbox } from '@ui';
import { UiStoreContext } from '@store';
import styles from './EventSignup.module.scss';

const formInitial = {
  name: '',
  surname: '',
  email: '',
};

const EventSignup = ({ className }) => {
  const { addToast } = useToasts();

  const [units, setUnits] = useState('');
  const [checkedSubscribe, setCheckedSubscribe] = useState(true);
  const [loading, setLoading] = useState(false);

  const uiContext = useContext(UiStoreContext);

  const handleValidation = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Please enter your name';
    } else if (!values.surname) {
      errors.surname = 'Please enter your last name';
    } else if (!values.email) {
      errors.email = 'Please enter your email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Please enter a valid email';
    }
    return errors;
  };

  const handleSubmit = useCallback(async (values, { resetForm }) => {
    setLoading(true);

    addToast('Should signup', { appearance: 'success' });
    uiContext.setModal('eventSignupThanks');
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
    <>
      <Modal name="eventSignup" className={className}>
        <div className={styles.header}>
          Please provide your details and submit them before the event date, and we will send you an invitation link.
        </div>

        <Formik
          initialValues={formInitial}
          validateOnChange={false}
          validate={handleValidation}
          onSubmit={handleSubmit}>
          {({ isSubmitting, setFieldError }) => (
            <Form>
              <div className={styles.formMain}>
                <Field type="text" name="name">
                  {({ field, form: { setFieldValue }, meta }) => (
                    <Input
                      label="First name"
                      placeholder=""
                      value={field.value}
                      error={meta.touched && meta.error}
                      onChange={(v) => {
                        setFieldValue(field.name, v);
                        setFieldError(field.name);
                      }}
                    />
                  )}
                </Field>
                <Field type="text" name="surname">
                  {({ field, form: { setFieldValue }, meta }) => (
                    <Input
                      label="Last name"
                      placeholder=""
                      value={field.value}
                      error={meta.touched && meta.error}
                      onChange={(v) => {
                        setFieldValue(field.name, v);
                        setFieldError(field.name);
                      }}
                    />
                  )}
                </Field>
                <Field type="text" name="email">
                  {({ field, form: { setFieldValue }, meta }) => (
                    <Input
                      label="Email address"
                      type="text"
                      placeholder=""
                      value={field.value}
                      error={meta.touched && meta.error}
                      onChange={(v) => {
                        setFieldValue(field.name, v);
                        setFieldError(field.name);
                      }}
                    />
                  )}
                </Field>
              </div>

              <div className={styles.units}>
                <div className={styles.unitsLabel}>
                  Are you interested in investing in Buzzier at US$25k per unit? If so, how many units would you be
                  interested in?
                </div>
                <div className={styles.unitsRow}>
                  <Checkbox isChecked={units === '0'} onChange={() => setUnits('0')} type="radio" name="investUnits">
                    Just curious
                  </Checkbox>
                  <Checkbox isChecked={units === '1'} onChange={() => setUnits('1')} type="radio" name="investUnits">
                    1 Unit
                  </Checkbox>
                  <Checkbox isChecked={units === '2'} onChange={() => setUnits('2')} type="radio" name="investUnits">
                    2 Units
                  </Checkbox>
                  <Checkbox isChecked={units === '3'} onChange={() => setUnits('3')} type="radio" name="investUnits">
                    3 Units
                  </Checkbox>
                  <Checkbox isChecked={units === '4'} onChange={() => setUnits('4')} type="radio" name="investUnits">
                    4 Units
                  </Checkbox>
                  <Checkbox isChecked={units === '5'} onChange={() => setUnits('5')} type="radio" name="investUnits">
                    5 Units
                  </Checkbox>
                  <Checkbox isChecked={units === '6'} onChange={() => setUnits('6')} type="radio" name="investUnits">
                    More than 6 Units
                  </Checkbox>
                </div>
                <div className={styles.unitsNote}>
                  ⓘ This information is entirely for the purposes of gauging interest and will not be used for any other
                  purpose.
                </div>
              </div>

              <div className={styles.checkbox}>
                <Checkbox isChecked={checkedSubscribe} onChange={() => setCheckedSubscribe(!checkedSubscribe)}>
                  Would you like to receive future emails with updates on Cayman based investment opportunities?
                </Checkbox>
              </div>

              <div className={styles.cta}>
                <Button type="submit">Submit</Button>
                <p>All fields are mandatory.</p>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>

      <Modal name="eventSignupThanks" variant="narrow" className={className}>
        <div className={styles.thanksText}>
          Thank you for your submission, if you would like to request a PPM, additional information will be required.
        </div>
      </Modal>
    </>
  );
};

export default EventSignup;
