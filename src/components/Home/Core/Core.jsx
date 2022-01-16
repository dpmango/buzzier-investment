import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { Button } from '@ui';

import styles from './Core.module.scss';
import CoreWebsite from './assets/core-website.svg';
import CoreApp from './assets/core-app.svg';
import CoreTv from './assets/core-tv.svg';
import CoreAdam from './assets/core-adam.svg';
import CoreApi from './assets/core-api.svg';
import CoreCdn from './assets/core-cdn.svg';
import CoreMonitoring from './assets/core-monitoring.svg';
import CoreAnalytics from './assets/core-analytics.svg';
import CoreAudience from './assets/core-audience.svg';
import CoreSsp from './assets/core-ssp.svg';
import CoreDemand from './assets/core-demand.svg';

import HeaderDecorImage from './assets/decor/core-header.svg';
import HeaderDecorArrowImage from './assets/decor/core-header-arrow.svg';
import SpecialTop from './assets/decor/core-special-top.svg';
import SpecialBottom from './assets/decor/core-special-bottom.svg';

const CoreImages = {
  website: CoreWebsite,
  app: CoreApp,
  tv: CoreTv,
  adam: CoreAdam,
  api: CoreApi,
  cdn: CoreCdn,
  monitoring: CoreMonitoring,
  analytics: CoreAnalytics,
  audience: CoreAudience,
  ssp: CoreSsp,
  demand: CoreDemand,
};

const Core = ({ className, title, header, cols }) => {
  const handleDownloadClick = (e) => {
    e.preventDefault();
    window.open('/uploads/pitch.pdf');
  };

  return (
    <div className={cns(styles.container, className)}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerText}>
            {header.title && <h3 className={styles.headerTitle} dangerouslySetInnerHTML={{ __html: header.title }} />}
            {header.subtitle && (
              <div className={styles.headerSubtitle} dangerouslySetInnerHTML={{ __html: header.subtitle }} />
            )}
          </div>
          <div className={styles.headerImage}>
            <img className={styles.headerImgBase} src={HeaderDecorImage} alt="header decor cta image" />
            <img className={styles.headerImgArrow} src={HeaderDecorArrowImage} alt="header decor arrow image" />
          </div>
        </div>

        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
        <div className={styles.grid}>
          {cols &&
            cols.length &&
            cols.map((col) => (
              <>
                {col.special ? (
                  <div key={col.id} className={styles.special}>
                    <img className={styles.specialTop} src={SpecialTop} />
                    <div className={styles.specialText} dangerouslySetInnerHTML={{ __html: col.content }} />
                    <img className={styles.specialBottom} src={SpecialBottom} />
                  </div>
                ) : (
                  <div className={cns(styles.col, col.className)} key={col.id}>
                    <div className={styles.colImage}>
                      <img src={CoreImages[col.iconId]} />
                    </div>
                    <div className={styles.colTitle} dangerouslySetInnerHTML={{ __html: col.title }} />
                    <div className={styles.colContent} dangerouslySetInnerHTML={{ __html: col.content }} />
                  </div>
                )}
              </>
            ))}
        </div>

        <div className={styles.cta}>
          <Button onClick={handleDownloadClick}>Download our pitch deck</Button>
        </div>
      </div>
    </div>
  );
};

export default Core;
