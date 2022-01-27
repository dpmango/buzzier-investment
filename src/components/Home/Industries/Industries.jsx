import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { SvgIcon } from '@ui';
import styles from './Industries.module.scss';

const Industries = ({ className, title, description, cols }) => {
  return (
    <section className={cns(styles.container, className)}>
      <div className="container">
        <h2 className={styles.title}>
          <i dangerouslySetInnerHTML={{ __html: title }} />
        </h2>
        <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />

        <div className={styles.grid}>
          {cols &&
            cols.length &&
            cols.map((col) => (
              <div className={styles.col} key={col.id}>
                <div className={styles.colTitle} dangerouslySetInnerHTML={{ __html: col.title }} />
                <ul className={styles.colMenu}>
                  {col.links &&
                    col.links.map((link, idx) => (
                      <li key={idx}>
                        <a href={link.to} onClick={(e) => e.preventDefault()}>
                          <span className={styles.linkIcon}>
                            <SvgIcon name="arrow-right" />
                          </span>

                          <span>{link.label}</span>
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
