import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import { Button } from '@ui';

import styles from './Live.module.scss';
import EventLiveLogo from './assets/event-live-logo.svg';

const Live = ({ className, left, right, cols }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  return (
    <section className={cns(styles.container, className)}>
      <div className="container">
        <div className={styles.head}>
          <div className={styles.headLeft}>
            <h3 className={styles.title} dangerouslySetInnerHTML={{ __html: left.title }} />
            {left.subtitle && <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: left.subtitle }} />}
          </div>
          <div className={styles.headLogo}>
            <img src={EventLiveLogo} alt="live event logo" />
          </div>

          <div className={styles.headRight}>
            <h3 className={styles.title} dangerouslySetInnerHTML={{ __html: right.title }} />
            {right.subtitle && <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: right.subtitle }} />}
          </div>
        </div>

        <div className={styles.grid}>
          {cols &&
            cols.map((col) => (
              <div className={styles.col} key={col.id}>
                <div className={styles.colTitle}>{col.title}</div>
                <div className={styles.colDescription}>{col.description}</div>
                <Link className={styles.colLink} to={col.link.to}>
                  <span dangerouslySetInnerHTML={{ __html: col.link.label }} />
                </Link>
              </div>
            ))}
        </div>

        <div className={styles.cta}>
          <Button type="link" to="/event">
            Talk to our team at our live event
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Live;
