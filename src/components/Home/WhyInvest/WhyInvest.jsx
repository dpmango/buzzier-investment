import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { Button, UiVideo } from '@ui';
import { UiStoreContext } from 'store';
import { HomeFact } from '@c/Home';

import styles from './WhyInvest.module.scss';
import ListCheckArrow from './assets/check-arrow.svg';

const WhyInvest = ({ className, title, features, fact, videos }) => {
  const uiContext = useContext(UiStoreContext);

  return (
    <section className={cns(styles.container, className)}>
      <div className="container">
        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />

        <div className={styles.features}>
          {features &&
            features.length &&
            features.map((feature) => (
              <div className={styles.featureCol} key={feature.id}>
                <div className={styles.featureTitle}>{feature.title}</div>
                <ul className={styles.featureList}>
                  {feature.list &&
                    feature.list.map((label, idx) => (
                      <li key={idx}>
                        <span>{label}</span>
                        <img src={ListCheckArrow} />
                      </li>
                    ))}
                </ul>
              </div>
            ))}
        </div>

        <div className={styles.videos}>
          {videos &&
            videos.length &&
            videos.map((video) => (
              <div className={styles.video} key={video.id}>
                <div className={styles.colMedia}>
                  <UiVideo video={video.video} />
                </div>
              </div>
            ))}
        </div>

        <HomeFact className={styles.fact} {...fact} />

        <div className={styles.cta}>
          <Button onClick={() => uiContext.setModal('eventSignup')}>Learn more at our live event</Button>
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
