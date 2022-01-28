import cns from 'classnames';
import { numberWithCommas } from '@helpers';
import { RangeSlider, SvgIcon } from '@ui';
import styles from './CalculatorPreview.module.scss';
import React, { useCallback, useState } from 'react';

const CalculatorPreview = ({ className }) => {
  const [cost, setCost] = useState(10);
  const [hint, setHint] = useState(
    <p>
      <span>77.9%</span> of US businesses would see a <span>24.12%</span> uptick in profit through the installation in
      the Buzzier service.
    </p>
  );
  const [locations, setLocations] = useState(6000);

  const calculatedRoi = useCallback(() => {
    return numberWithCommas(Math.round(roi(locations, cost)));
  }, [locations, cost]);

  function roi(locationRevenue, devicesNumber) {
    return (locationRevenue / 3) * 5 * devicesNumber - devicesNumber * 199;
  }

  return (
    <section className={cns(styles.container, className)}>
      <div className="container">
        <h2
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: 'What is the incentive for our <i>Partners</i>' }}
        />

        <div className={styles.box}>
          <div className={cns('row', styles.grid)}>
            <div className={cns('col col-12')}>
              <label className={styles.label}>
                Revenue generated per <u>Location</u>
              </label>
              <div className={styles.section}>
                <div className={styles.sectionLabel}>
                  <span>${numberWithCommas(6000)}</span>
                  Local Store
                </div>
                <div className={styles.sectionContent}>
                  <RangeSlider value={locations} min={6000} step={100} max={25000} onChange={(v) => setLocations(v)} />
                </div>
                <div className={styles.sectionLabel}>
                  <span>${numberWithCommas(25000)}</span>
                  Medical Office
                </div>
                <div className={styles.sectionNote} data-tip={'of addressable locations in the US'}>
                  <SvgIcon name="question" />
                </div>
              </div>
            </div>
            <div className={cns('col col-6 col-md-12')}>
              <label className={styles.label}>
                Revenue for our <u>Distribution Partners</u>
              </label>
              <div className={styles.section}>
                <div className={styles.sectionLabel}>
                  <span>{cost} Device</span>
                  Network
                </div>
                <div className={styles.sectionContent}>
                  <RangeSlider value={cost} min={10} step={1} max={100} onChange={(v) => setCost(v)} />
                </div>
                <div className={styles.sectionNote} data-tip="Median range per ad play is 30¢ to 45¢">
                  <SvgIcon name="question" />
                </div>
              </div>
            </div>
            <div className={cns('col col-6 col-md-12')}>
              <label className={styles.label}>&nbsp;</label>
              <div className={styles.section}>
                <div className={styles.sectionCol}>
                  <div className={styles.sectionLabel}>
                    <span>5 Year ROI</span>
                    Less Cost
                  </div>
                  <div className={styles.sectionValue}>${calculatedRoi()}</div>
                </div>
                <div
                  className={styles.sectionNote}
                  data-tip="The industry boosts 69% - 92% fill rate which is the percentage of available inventory sold. In latest results outdoor advertising increased 125% in Q2 2021. 61% was in our sector">
                  <SvgIcon name="question" />
                </div>
              </div>
            </div>
            <div className={cns('col col-12')}>
              <label className={styles.label}>
                Profit for our <u>Location Partners</u>
              </label>
              <div className={styles.chart}>
                <div className={styles.chartInner}>
                  <div className={styles.ylabelWrapper}>
                    <div className={styles.ylabel}>Increase in profit per location</div>
                  </div>
                  <div className={styles.ylabelNumbers}>
                    <div>
                      25%
                      <span />
                    </div>
                    <div>
                      20%
                      <span />
                    </div>
                    <div>
                      15%
                      <span />
                    </div>
                    <div>
                      10%
                      <span />
                    </div>
                    <div>
                      5%
                      <span />
                    </div>
                    <div>
                      0%
                      <span />
                    </div>
                  </div>
                  <div className={styles.chartWrapper}>
                    <div className={styles.bars}>
                      <div
                        className={styles.block1}
                        onMouseEnter={() => {
                          setHint(
                            <p>
                              <span>77.9%</span> of US businesses would see a <span>24.12%</span> uptick in profit
                              through the installation of the Buzzier service.
                            </p>
                          );
                        }}>
                        <div className={styles.overlay}>{hint}</div>
                      </div>
                      <div
                        className={styles.block2}
                        onMouseEnter={() => {
                          setHint(
                            <p>
                              <span>15%</span> of US businesses would see a <span>2.54%</span> uptick in profit through
                              the installation of the Buzzier service.
                            </p>
                          );
                        }}
                      />
                      <div
                        className={styles.block3}
                        onMouseEnter={() => {
                          setHint(
                            <p>
                              <span>5%</span> of US businesses would see a <span>1.3%</span> uptick in profit through
                              the installation of the Buzzier service.
                            </p>
                          );
                        }}
                      />
                      <div
                        className={styles.block4}
                        onMouseEnter={() => {
                          setHint(
                            <p>
                              <span>2%</span> of US businesses would see a <span>0.43%</span> uptick in profit through
                              the installation of the Buzzier service.
                            </p>
                          );
                        }}
                      />
                    </div>
                    <div className={styles.xlabelNumbers}>
                      <div>
                        <span />
                        0%
                      </div>
                      <div>
                        <span />
                        20%
                      </div>
                      <div>
                        <span />
                        40%
                      </div>
                      <div>
                        <span />
                        60%
                      </div>
                      <div>
                        <span />
                        80%
                      </div>
                      <div>
                        <span />
                        100%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.returnLabel}>Percentage of US companies x return</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorPreview;
