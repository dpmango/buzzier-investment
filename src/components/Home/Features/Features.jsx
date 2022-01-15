import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import styles from './Features.module.scss';
import FeatureAdSvg from './assets/feature-ad.svg';
import FeatureOpen from './assets/feature-open.svg';
import FeatureBalance from './assets/feature-balance.svg';
import FeatureSecure from './assets/feature-secure.svg';

const FeatureImages = {
  ad: FeatureAdSvg,
  open: FeatureOpen,
  balance: FeatureBalance,
  secure: FeatureSecure,
};

const Features = ({ className, title, cols }) => {
  return (
    <div className={cns(styles.container, className)}>
      <div className="container">
        <div className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
        <div className={styles.grid}>
          {cols &&
            cols.length &&
            cols.map((col) => (
              <div className={styles.col} key={col.id}>
                <div className={styles.colImage}>
                  <img src={FeatureImages[col.iconId]} />
                </div>
                <h1 className={styles.colTitle} dangerouslySetInnerHTML={{ __html: col.title }} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
