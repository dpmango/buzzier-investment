import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { SvgIcon, UiVideo } from '@ui';

import styles from './Video.module.scss';

const Video = ({ className, title, video }) => {
  return (
    <div className={cns(styles.container, className)}>
      <div className="container">
        <h3 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />

        <UiVideo className={styles.video} video={video}>
          <div className={styles.videoCaption}>
            <img src="/img/videoCaptionDecor.svg" />
            <div className={styles.videoCaptionTitle}>{video.caption}</div>
          </div>
        </UiVideo>
      </div>
    </div>
  );
};

export default Video;
