import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import { Button } from '@ui';
import { UiStoreContext } from 'store';

import styles from './Live.module.scss';
import EventLiveLogo from './assets/event-live-logo.svg';

const Live = ({ className, left, right, cols }) => {
  const uiContext = useContext(UiStoreContext);
  const start = '10/26/2021';
  let diffTime = Math.abs(new Date().valueOf() - new Date(start).valueOf());
  let weeks = diffTime / (24 * 60 * 60 * 1000 * 7);
  let days = (weeks % 1) * 7;
  let hours = (days % 1) * 24;
  [weeks, days, hours] = [Math.floor(weeks), Math.floor(days), Math.floor(hours)];
  let elapsed = weeks + ' weeks | ' + days + ' days | ' + hours + ' hours';

  const [segments, setSegments] = useState(1566024);
  const min = 1;
  const max = 3;
  // 1.6k daily
  useEffect(() => {
    setInterval(() => {
      setSegments((segments) => segments + Math.floor(Math.random() * (max - min + 1)) + min);
    }, 1000 * 10);
  }, []);

  return (
    <section className={cns(styles.container, className)}>
      <div className="container">
        <div className={styles.head}>
          <div className={styles.headLeft}>
            <h3 className={styles.title} dangerouslySetInnerHTML={{ __html: left.title }} />
            {left.subtitle && <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: elapsed }} />}
          </div>
          <div className={styles.headLogo}>
            <img src={EventLiveLogo} alt="live event logo" />
          </div>
          <div className={styles.headRight}>
            <h3 className={styles.title} dangerouslySetInnerHTML={{ __html: right.title }} />
            {right.subtitle && (
              <div
                className={styles.subtitle}
                dangerouslySetInnerHTML={{
                  __html: new Intl.NumberFormat('en-GB').format(segments) + ' content segments',
                }}
              />
            )}
          </div>
        </div>

        <div className={styles.grid}>
          {cols &&
            cols.map((col) => (
              <div className={styles.col} key={col.id}>
                <div className={styles.colTitle}>{col.title}</div>
                <div className={styles.colDescription}>{col.description}</div>
                {col.link.type === 1 ? (
                  <Link className={styles.colLink} to={col.link.to}>
                    <span dangerouslySetInnerHTML={{ __html: col.link.label }} />
                  </Link>
                ) : (
                  <a target={col.link.target} className={styles.colLink} href={col.link.to}>
                    <span dangerouslySetInnerHTML={{ __html: col.link.label }} />
                  </a>
                )}
              </div>
            ))}
        </div>

        <div className={styles.cta}>
          <Button onClick={() => uiContext.setModal('eventSignup')}>Talk to our team at our live event</Button>
        </div>
      </div>
    </section>
  );
};

export default Live;
