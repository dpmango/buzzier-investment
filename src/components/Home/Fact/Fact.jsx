import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import styles from './Fact.module.scss';

const Fact = ({ className, label, title }) => {
  return (
    <div className={cns(styles.fact, className)}>
      <div className={styles.factLabel}>{label}</div>
      <div className={styles.factContent} dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );
};

export default Fact;
