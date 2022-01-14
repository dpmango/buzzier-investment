import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import styles from './Intro.module.scss';

const Info = ({ className, cols }) => {
  return (
    <div className={cns(styles.intro, className)}>
      <div className="container">
        <div className={styles.box}>
          <div className="container-inner">
            <div className={styles.grid}>
              {cols &&
                cols.length &&
                cols.map((x) => (
                  <div className={styles.col} key={x.id}>
                    <div className="h4-title" dangerouslySetInnerHTML={{ __html: x.title }} />
                    <p className={cns('p-small', styles.description)}>{x.description}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
