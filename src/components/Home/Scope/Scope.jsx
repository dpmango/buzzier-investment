import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { Button } from '@ui';
import styles from './Scope.module.scss';

const Scope = ({ className, title, list }) => {
  return (
    <section className={cns(styles.container, className)}>
      <div className="container">
        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />

        <div className={styles.grid}>
          {list &&
            list.map((label, idx) => (
              <div className={styles.col} key={idx}>
                <div className={styles.colContent}>{label}</div>
              </div>
            ))}
        </div>

        <div className={styles.cta}>
          <Button type="link" to="/event">
            Learn more at our live event
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Scope;
