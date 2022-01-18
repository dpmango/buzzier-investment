import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Pagination } from 'swiper';

import { SvgIcon } from '@ui';
import { useWindowSize } from '@hooks';

import styles from './Steps.module.scss';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';
import StepBoxSvg from './assets/step-box.svg';
import StepQrSvg from './assets/step-qr.svg';
import StepConnectSvg from './assets/step-connect.svg';
import StepAdvertSvg from './assets/step-advert.svg';
import StepScreenSvg from './assets/step-screen.svg';

const FeatureImages = {
  box: StepBoxSvg,
  qr: StepQrSvg,
  connect: StepConnectSvg,
  advert: StepAdvertSvg,
  screen: StepScreenSvg,
};

const Steps = ({ className, title, slides }) => {
  const { width } = useWindowSize();

  return (
    <section className={cns(styles.container, className)}>
      <div className="container">
        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
        <Swiper
          className={styles.slider}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          centeredSlides={width > 992}
          slidesPerView={'auto'}
          loop={true}
          spaceBetween={0}>
          {slides &&
            slides.length &&
            slides.map((slide) => (
              <SwiperSlide className={styles.slide} key={slide.id}>
                <div className={styles.slideImage}>
                  <img src={FeatureImages[slide.iconId]} />
                </div>
                <div className={styles.slideContent}>
                  <div className={styles.slideTitle} dangerouslySetInnerHTML={{ __html: slide.title }} />
                  <div className={styles.slideDescription} dangerouslySetInnerHTML={{ __html: slide.description }} />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Steps;
