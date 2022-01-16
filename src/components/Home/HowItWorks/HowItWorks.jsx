import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import styles from './HowItWorks.module.scss';
import HowAdSvg from './assets/how-ad.svg';
import HowSendSvg from './assets/how-send.svg';
import HowScanSvg from './assets/how-scan.svg';
import HowQrSvg from './assets/how-qr.svg';
import HowIqSvg from './assets/how-iq.svg';

const Assets = {
  ad: HowAdSvg,
  send: HowSendSvg,
  scan: HowScanSvg,
  qr: HowQrSvg,
  iq: HowIqSvg,
};

const HowItWorks = ({ className, title, cols }) => {
  return (
    <section className={cns(styles.container, className)}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
          <div className={styles.grid}>
            {cols &&
              cols.length &&
              cols.map((col) => (
                <div className={styles.col} key={col.id}>
                  <div className={styles.colImage}>
                    <img src={Assets[col.iconId]} />
                  </div>
                  <div className={styles.colTitle} dangerouslySetInnerHTML={{ __html: col.title }} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
