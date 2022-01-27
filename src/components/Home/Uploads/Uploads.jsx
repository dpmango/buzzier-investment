import React from 'react';
import cns from 'classnames';

import { Button, UiVideo } from '@ui';
import styles from './Uploads.module.scss';

const Uploads = ({ className, videos, uploads }) => {
  return (
    <section className={cns(styles.container, className)}>
      <div className="container">
        <div className={styles.grid}>
          {videos &&
            videos.length &&
            videos.map((video) => (
              <div className={styles.col} key={video.id}>
                <div className={styles.colMedia}>
                  <UiVideo className={styles.video} video={video.video}>
                    <div className={styles.videoCaption}>
                      <img src="/img/videoCaptionDecor.svg" />
                      <div className={styles.videoCaptionTitle}>{video.video.caption}</div>
                    </div>
                  </UiVideo>
                </div>
                <div className={styles.colTitle}>{video.title}</div>
              </div>
            ))}
        </div>

        <div className={cns(styles.grid, styles._uploads)}>
          {uploads &&
            uploads.length &&
            uploads.map((upload) => (
              <div className={styles.col} key={upload.id}>
                <Button
                  onClick={() => {
                    window.open(upload.href);
                  }}
                  to={upload.href}
                  iconRight={upload.icon}>
                  {upload.title}
                </Button>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Uploads;
