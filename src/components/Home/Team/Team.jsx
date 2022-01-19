import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { Button } from '@ui';
import { UiStoreContext } from 'store';
import styles from './Team.module.scss';

const Team = ({ className, title, cols }) => {
  const uiContext = useContext(UiStoreContext);

  return (
    <section className={cns(styles.container, className)}>
      <div className="container">
        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
        <div className={styles.grid}>
          {cols &&
            cols.length &&
            cols.map((col) => (
              <div className={styles.col} key={col.id}>
                <div className={styles.colImage}>
                  <img src={col.image} />
                </div>
                <div className={styles.colContent}>
                  <div className={styles.colTitle} dangerouslySetInnerHTML={{ __html: col.title }} />
                  <div className={styles.colPosition}>{col.position}</div>
                  <div className={styles.extra}>{col.extra}</div>
                </div>
              </div>
            ))}
        </div>

        <div className={styles.cta}>
          <Button onClick={() => uiContext.setModal('eventSignup')}>Learn more at our live event</Button>
        </div>

        {/* {loading && ()} */}
      </div>
    </section>
  );
};

export default Team;
