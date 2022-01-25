import React, { useContext, useState } from 'react';
import cns from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Pagination } from 'swiper';

import { Button } from '@ui';
import { UiStoreContext } from 'store';

import styles from './BusinessModel.module.scss';
import { ReactComponent as WheelSvg } from './assets/wheel.svg';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';

const BusinessModel = ({ className, title, subtitle, slides }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const uiContext = useContext(UiStoreContext);

  return (
    <section className={cns(styles.container, className)}>
      <div className="container">
        <div className={styles.head}>
          <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
          {subtitle && <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: subtitle }} />}
        </div>

        <div className={styles.grid}>
          <div className={styles.wheel} data-slide={slideIndex}>
            <WheelSvg />
          </div>
          <Swiper
            className={styles.slider}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            centeredSlides={true}
            slidesPerView={'auto'}
            spaceBetween={0}
            onSlideChange={(swiper) => {
              setSlideIndex(swiper.realIndex + 1);
            }}>
            {slides &&
              slides.length &&
              slides.map((slide) => (
                <SwiperSlide className={styles.slide} key={slide.id}>
                  <div className={styles.slideTitle}>{slide.title}</div>
                  <div dangerouslySetInnerHTML={{ __html: slide.content }} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className={styles.cta}>
          <Button onClick={() => uiContext.setModal('eventSignup')}>Talk to our team at our live event</Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
