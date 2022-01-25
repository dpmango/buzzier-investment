import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { Button } from '@ui';
import { UiStoreContext } from 'store';
import styles from './Benefits.module.scss';

const Benefits = ({ className, title, subtitle, cols, more }) => {
  const uiContext = useContext(UiStoreContext);

  return (
    <section className={cns(styles.container, className)}>
      <div className="container">
        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
        {subtitle && <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: subtitle }} />}

        <div className={styles.grid}>
          {cols &&
            cols.length &&
            cols.map((col) => (
              <div className={styles.col} key={col.id}>
                <div className={styles.colTitle}>{col.title}</div>
                <div className={styles.colDescription}>{col.description}</div>
              </div>
            ))}
        </div>

        <div className={styles.more}>
          <div className={styles.moreTitle}>{more.title}</div>
          <Button className={styles.moreCta} onClick={() => uiContext.setModal('eventSignup')}>
            {more.link.label}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
