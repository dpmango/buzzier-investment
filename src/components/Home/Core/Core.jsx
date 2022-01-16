import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

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

const Core = ({ className, title, cols }) => {
  return (
    <div className={cns(styles.container, className)}>
      <div className="container">
        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
        <div className={styles.grid}>
          {cols &&
            cols.length &&
            cols.map((col) => (
              <>
                {col.special ? (
                  <div className={styles.special}>{col.content}</div>
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
      </div>
    </div>
  );
};

export default Core;
