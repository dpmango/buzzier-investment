import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

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
            <img src="/img/heroImage.png" srcSet="/img/heroImage@2x.png 2x" alt="buzziner image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
