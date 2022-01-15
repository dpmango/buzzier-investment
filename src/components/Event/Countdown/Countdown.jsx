import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { Button } from '@ui';
import styles from './Countdown.module.scss';

const Countdown = ({ className, title, deadline, helper }) => {
  const [tickerId, setTickerId] = useState(0);

  const countdownCalculated = useMemo(() => {
    const total = Date.parse(deadline) - Date.parse(new Date());

    let seconds = Math.floor((total / 1000) % 60),
      minutes = Math.floor((total / (1000 * 60)) % 60),
      hours = Math.floor((total / (1000 * 60 * 60)) % 24),
      days = Math.floor(total / (1000 * 60 * 60 * 24));

    days = days < 10 ? '0' + days : days;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }, [deadline, tickerId]);

  useEffect(() => {
    setTimeout(() => {
      setTickerId(Number(tickerId) + 1);
    }, 1000);
  }, [tickerId]);

  return (
    <div className={cns(styles.container, className)}>
      <div className="container">
        <h3 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />

        <div className={styles.grid}>
          <div className={cns(styles.col)}>
            <div className={styles.colValue}>
              <span>{countdownCalculated.days}</span>
            </div>
            <div className={styles.colLabel}>Days</div>
          </div>
          <div className={cns(styles.col)}>
            <div className={styles.colValue}>
              <span>{countdownCalculated.hours}</span>
            </div>
            <div className={styles.colLabel}>Hours</div>
          </div>
          <div className={cns(styles.col)}>
            <div className={styles.colValue}>
              <span>{countdownCalculated.minutes}</span>
            </div>
            <div className={styles.colLabel}>Minutes</div>
          </div>
          <div className={cns(styles.col)}>
            <div className={styles.colValue}>
              <span>{countdownCalculated.seconds}</span>
            </div>
            <div className={styles.colLabel}>Seconds</div>
          </div>
        </div>

        <div className={styles.cta}>
          <Button theme="primary">Reserve your space now</Button>
        </div>

        <div className={styles.helperText}>{helper}</div>
      </div>
    </div>
  );
};

export default Countdown;
