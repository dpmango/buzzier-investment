import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import { Parallax } from 'react-scroll-parallax';

import styles from './Hero.module.scss';

const Hero = ({ className, title, description }) => {
  return (
    <section className={cns(styles.container, className)}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
            <p className={styles.description}>{description}</p>
          </div>

          <div className={styles.image}>
            <Parallax className={styles.imageBox} y={[0, 20]} tagOuter="figure">
              <img src="/img/heroImageBox.png" srcSet="/img/heroImageBox@2x.png 2x" alt="Buzzier" />
            </Parallax>
            <Parallax className={styles.imageRemote} y={[0, 50]} tagOuter="figure">
              <img src="/img/heroImageRemote.png" srcSet="/img/heroImageRemote@2x.png 2x" alt="Buzzier" />
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
