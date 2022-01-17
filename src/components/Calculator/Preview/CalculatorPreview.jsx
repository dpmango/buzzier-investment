import React, { useState, useMemo, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { SvgIcon, RangeSlider, Button } from '@ui';
import { numberWithCommas } from '@helpers';
import styles from './CalculatorPreview.module.scss';

const CalculatorPreview = ({ className, title, fact }) => {
  const [investment, setInvestment] = useState(25000);
  const [locations, setLocations] = useState(40000);
  const [cost, setCost] = useState(35);
  const [selloutRate, setSelloutRate] = useState(50);

  const displayCost = useMemo(() => {
    return (cost / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }, [cost]);

  const calculatedRoi = useCallback(
    (years) => {
      const calc = investment + ((cost * locations) / selloutRate) * years;

      return numberWithCommas(Math.round(calc));
    },
    [investment, locations, cost, selloutRate]
  );

  return (
    <section className={cns(styles.container, className)}>
      <div className="container">
        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />

        <div className={styles.box}>
          <div className={styles.head}>
            <h1 className={styles.headTitle}>To determine your potential ROI, adjust investment </h1>
          </div>

          <div className={cns('row', styles.grid)}>
            <div className={cns('col col-12')}>
              <div className={styles.section}>
                <div className={styles.sectionLabel}>
                  <span>{numberWithCommas(locations)}</span>
                  Active Locations
                </div>
                <div className={styles.sectionContent}>
                  <RangeSlider value={locations} min={1000} step={100} max={100000} onChange={(v) => setLocations(v)} />
                </div>
                <div className={styles.sectionNote} data-tip="More locations impact income">
                  <SvgIcon name="question" />
                </div>
              </div>
            </div>
            <div className={cns('col col-6 col-md-12')}>
              <div className={styles.section}>
                <div className={styles.sectionLabel}>
                  <span>${displayCost}</span>
                  Ad cost
                </div>
                <div className={styles.sectionContent}>
                  <RangeSlider value={cost} min={1} step={1} max={100} onChange={(v) => setCost(v)} />
                </div>
                <div className={styles.sectionNote} data-tip="Cost per location">
                  <SvgIcon name="question" />
                </div>
              </div>
            </div>
            <div className={cns('col col-6 col-md-12')}>
              <div className={styles.section}>
                <div className={styles.sectionLabel}>
                  <span>{selloutRate}%</span>
                  Sellout rate
                </div>
                <div className={styles.sectionContent}>
                  <RangeSlider value={selloutRate} min={10} max={90} onChange={(v) => setSelloutRate(v)} />
                </div>
                <div className={styles.sectionNote} data-tip="Estimation">
                  <SvgIcon name="question" />
                </div>
              </div>
            </div>
            <div className={cns('col col-12')}>
              <div className={styles.section}>
                <div className={styles.sectionGrid}>
                  <div className={styles.sectionCol}>
                    <div className={styles.sectionLabel}>
                      <span>3 Year ROI</span>
                      Estimated
                    </div>
                    <div className={styles.sectionValue}>${calculatedRoi(3)}</div>
                  </div>
                  <div className={styles.sectionCol}>
                    <div className={styles.sectionLabel}>
                      <span>5 Year ROI</span>
                      Estimated
                    </div>
                    <div className={styles.sectionValue}>${calculatedRoi(5)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <div className={styles.actionsCol}>
              <div className={styles.actionLabel}>Join us to discuss this investment opportunity</div>
              <Button>Join our live event</Button>
            </div>
            <div className={styles.actionsCol}>
              <div className={styles.actionLabel}>To better understand the calculations presented</div>
              <Button>Review our assumptions</Button>
            </div>
          </div>
        </div>

        <div className={styles.fact}>
          <div className={styles.factLabel}>{fact.label}</div>
          <div className={styles.factContent} dangerouslySetInnerHTML={{ __html: fact.title }} />
        </div>
      </div>
    </section>
  );
};

export default CalculatorPreview;
