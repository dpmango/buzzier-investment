import React, { useContext, useState, useCallback, useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { observer } from 'mobx-react';
import cns from 'classnames';

import { Modal, Input, Button, Checkbox } from '@ui';
import { UiStoreContext } from '@store';
import styles from './Assumptions.module.scss';

const Assumptions = ({ className }) => {
  const uiContext = useContext(UiStoreContext);

  return (
    <Modal name="assumptions">
      <div className={cns(styles.container, className)}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Assumptions</div>

          <div className={styles.sectionGrid}>
            <div className={styles.row}>
              <span className={styles.rowLabel}>Office hours per day</span>
              <span className={styles.rowValue}>8</span>
            </div>
            <div className={styles.row}>
              <span className={styles.rowLabel}>Weeks worked per year</span>
              <span className={styles.rowValue}>48</span>
            </div>
            <div className={styles.row}>
              <span className={styles.rowLabel}>Days per week</span>
              <span className={styles.rowValue}>5</span>
            </div>
            <div className={styles.row}>
              <span className={styles.rowLabel}>Ad hours per day</span>
              <span className={styles.rowValue}>2</span>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>Limitations of offer</div>

          <div className={styles.sectionGrid}>
            <div className={styles.row}>
              <span className={styles.rowLabel}>Min shareholding</span>
              <span className={styles.rowValue}>0.792%</span>
            </div>
            <div className={styles.row}>
              <span className={styles.rowLabel}>Weeks worked per year</span>
              <span className={styles.rowValue}>4.75%</span>
            </div>
            <div className={styles.row}>
              <span className={styles.rowLabel}>Min share purchase</span>
              <span className={styles.rowValue}>$25,000</span>
            </div>
            <div className={styles.row}>
              <span className={styles.rowLabel}>Max share purchase</span>
              <span className={styles.rowValue}>$750,000</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Assumptions;
