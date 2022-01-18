import React, { useState, useMemo, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { SvgIcon, RangeSlider, Button } from '@ui';
import { numberWithCommas } from '@helpers';
import styles from './CalculatorPreview.module.scss';
import HeadDecorArrowSvg from './assets/decor-arrow.svg';
import { HomeFact } from 'components/Home';

const InvestmentStep = 5000;
const maxInvestmentValue = 100 * 1000;

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
      const interest = 0.5;
      const calc = investment + (((cost * locations) / selloutRate) * years) / interest;

      return numberWithCommas(Math.round(calc));
    },
    [investment, locations, cost, selloutRate]
  );

  const plusMinusClick = useCallback(
    (type) => {
      let newValue = investment;

      if (type === 'plus') {
        newValue += InvestmentStep;
      } else if (type === 'minus') {
        newValue -= InvestmentStep;
      }

      if (newValue > 0 && newValue < maxInvestmentValue) {
        setInvestment(newValue);
      }
    },
    [investment, setInvestment]
  );

  return (
    <section className={cns(styles.container, className)}>
      <div className="container">
        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />

        <div className={styles.box}>
          <div className={styles.head}>
            <h1 className={styles.headTitle}>
              To determine your potential ROI, <i>adjust investment</i>
              <img src={HeadDecorArrowSvg} className={styles.headDecor} />
            </h1>

            <div className={styles.plusminus}>
              <label className={styles.minus} onClick={() => plusMinusClick('minus')}>
                <SvgIcon name="minus" />
              </label>
              <span>${numberWithCommas(investment)}</span>
              <label className={styles.plus} onClick={() => plusMinusClick('plus')}>
                <SvgIcon name="plus" />
              </label>
            </div>
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

        <HomeFact className={styles.fact} {...fact} />
      </div>
    </section>
  );
};

export default CalculatorPreview;
