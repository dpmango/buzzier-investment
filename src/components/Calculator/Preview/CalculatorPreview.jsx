import cns from 'classnames';
import React, { useCallback, useContext, useMemo, useState } from 'react';

import { Button, RangeSlider, SvgIcon } from '@ui';
import { UiStoreContext } from '@store';
import { numberWithCommas } from '@helpers';

import styles from './CalculatorPreview.module.scss';
import HeadDecorArrowSvg from './assets/decor-arrow.svg';
import { HomeFact } from 'components/Home';

const InvestmentStep = 25 * 1000;
const maxInvestmentValue = 750 * 1000;
const minInvestmentValue = 25 * 1000;

const CalculatorPreview = ({ className, title, fact }) => {
  const [investment, setInvestment] = useState(25000);
  const [locations, setLocations] = useState(38675);
  const [cost, setCost] = useState(35);
  const [selloutRate, setSelloutRate] = useState(80);

  const uiContext = useContext(UiStoreContext);

  const displayCost = useMemo(() => {
    let c = (cost / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return c.length > 3 ? c : c + '0';
  }, [cost]);

  const calculatedRoi = useCallback(
    (years) => {
      let val = 0;
      let r = roi(investment, locations, cost, selloutRate);
      if (years === 3) {
        val = r[0] * 0.7;
      }

      if (years === 5) {
        val = r[1] * 0.7;
      }

      return numberWithCommas(Math.round(val));
    },
    [investment, locations, cost, selloutRate]
  );

  function roi(count, locations, adCost, selloutRate) {
    let v1 = locations;
    let v2 = adCost / 100;
    let v3 = selloutRate;
    let v4 = 2;

    let rpd = (60 * v4 * v2 * v3) / 100;
    let wdpy = 240;
    let rpl = wdpy * rpd;

    let yl = {
      0: v1 * 0.13,
      1: v1 * 0.38,
      2: v1 * 1,
      3: v1 * 1.05,
      4: v1 * 1.1,
    };

    let yr = {
      0: yl[0] * rpl,
      1: yl[1] * rpl,
      2: yl[2] * rpl,
      3: yl[3] * rpl,
      4: yl[4] * rpl,
    };

    let cost = 1600000;

    let cy = {
      0: cost,
      1: cost * 1.5,
      2: cost * 1.5 * 1.5,
      3: cost * 1.5 * 1.5 * 1.25,
      4: cost * 1.5 * 1.5 * 1.25,
    };

    let by = {};
    for (let k = 0; k < 5; k++) {
      if (k === 0) {
        by[k] = yr[k] - cy[k];
      } else {
        by[k] = yr[k] + by[k - 1] - cy[k];
      }
    }

    let re = {
      0: 1,
      1: 1,
      2: 0.5,
      3: 0.5,
      4: 0.5,
    };

    let rvy = {};
    for (let k = 0; k < 5; k++) {
      if (k === 0) {
        rvy[k] = by[k] * re[k];
      } else {
        rvy[k] = by[k] * re[k] + rvy[k - 1];
      }
    }

    let dy = {};
    for (let k = 0; k < 5; k++) {
      dy[k] = by[k] / 2;
    }

    let owned = ((count / 60000) * 0.475) / 100;
    let roi3 = dy[2] * owned;
    let roi4 = dy[3] * owned;
    let roi5 = dy[4] * owned;

    return [roi3, roi3 + roi4 + roi5];
  }

  const plusMinusClick = useCallback(
    (type) => {
      let newValue = investment;
      if (type === 'plus') {
        if (newValue <= maxInvestmentValue - InvestmentStep) {
          newValue = investment + InvestmentStep;
        }
      }

      if (type === 'minus') {
        if (newValue >= minInvestmentValue + InvestmentStep) {
          newValue = investment - InvestmentStep;
        }
      }
      setInvestment(newValue);
    },
    [investment, setInvestment]
  );

  let locationPercentage = (locations / 38675) * 0.5;
  locationPercentage = locationPercentage.toFixed(2) + '%';

  return (
    <section className={cns(styles.container, className)}>
      <div className="container">
        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />

        <div className={styles.box}>
          <div className={styles.head}>
            <h1 className={styles.headTitle}>
              To determine your potential ROI, <i>adjust investment</i>
              <img src={HeadDecorArrowSvg} className={styles.headDecor} alt="" />
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
                  <RangeSlider
                    value={locations}
                    min={19400}
                    step={1000}
                    max={154700}
                    onChange={(v) => setLocations(v)}
                  />
                </div>
                <div
                  className={styles.sectionNote}
                  data-tip={locationPercentage + ' of addressable locations in the US'}>
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
                  <RangeSlider value={cost} min={30} step={1} max={45} onChange={(v) => setCost(v)} />
                </div>
                <div className={styles.sectionNote} data-tip="Median range per ad play is 30¢ to 45¢">
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
                  <RangeSlider value={selloutRate} min={69} max={92} onChange={(v) => setSelloutRate(v)} />
                </div>
                <div
                  className={styles.sectionNote}
                  data-tip="The industry boosts 69% - 92% fill rate which is the percentage of available inventory sold. In latest results outdoor advertising increased 125% in Q2 2021. 61% was in our sector">
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
              <Button onClick={() => uiContext.setModal('eventSignup')}>Join our live event</Button>
            </div>
            <div className={styles.actionsCol}>
              <div className={styles.actionLabel}>To better understand the calculations presented</div>
              <Button onClick={() => uiContext.setModal('assumptions')}>Review our assumptions</Button>
            </div>
          </div>
        </div>

        <HomeFact className={styles.fact} {...fact} />
      </div>
    </section>
  );
};

export default CalculatorPreview;
