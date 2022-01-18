import React, { useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { Button } from '@ui';
import { UiStoreContext } from 'store';

import styles from './Banner.module.scss';
import eventImage from './assets/liveEvent.svg';

const Banner = ({ className, description, note }) => {
  const uiContext = useContext(UiStoreContext);

  return (
    <section className={cns(styles.container, className)}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.image}>
            <img src={eventImage} alt="live Event" />
          </div>
          <div className={styles.content}>
            <h4 className={styles.title} dangerouslySetInnerHTML={{ __html: description }} />
            <p className={styles.note}>{note}</p>
            <div className={styles.cta}>
              <Button theme="primary" onClick={() => uiContext.setModal('eventSignup')}>
                Reserve your space now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
