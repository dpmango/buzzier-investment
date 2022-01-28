import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Helmet } from 'react-helmet';
import { ParallaxProvider } from 'react-scroll-parallax';
import { UiStoreContext } from '@store';
import { CalculatorPreview } from '@c/Calculator';
import {
  HomeBenefits,
  HomeBusinessModel,
  HomeCore,
  HomeFeatures,
  HomeHero,
  HomeHowItWorks,
  HomeIndustries,
  HomeScope,
  HomeSteps,
  HomeTeam,
  HomeUploads,
  HomeVideo,
  HomeWhyInvest,
} from '@c/Home';
import { EventBanner, EventCountdown, EventLive } from '@c/Event';
import { AssumptionsModal, EventSignupModal } from '@c/Modal';
import { GrowthCalculator } from '../../GrowthCalculator';
import { content } from './Content.js';

const HomePage = observer(() => {
  const uiContext = useContext(UiStoreContext);

  if (location.pathname.includes('register')) {
    uiContext.setModal('eventSignup');
  }

  return (
    <>
      <Helmet>
        <title>Buzzier</title>
      </Helmet>

      <ParallaxProvider>
        <HomeHero {...content.hero} />
        <HomeVideo {...content.video} />
        <CalculatorPreview {...content.calculator} />
        <HomeFeatures {...content.features} />
        <HomeBenefits {...content.benefits} />
        <HomeHowItWorks {...content.howItWorks} />
        <HomeBusinessModel {...content.model} />
        <GrowthCalculator {...content.calculator1} />
        <HomeIndustries {...content.industries} />
        <HomeScope {...content.scope} />
        <HomeSteps {...content.steps} />
        <HomeWhyInvest {...content.whyInvest} />
        <EventLive {...content.eventLive} />
        <HomeCore {...content.core} />
        <HomeTeam {...content.team} />
        <HomeUploads {...content.uploads} />
        <EventBanner {...content.eventBanner} />
        <EventCountdown {...content.countdown} />
      </ParallaxProvider>

      <EventSignupModal />
      <AssumptionsModal />
    </>
  );
});

export default HomePage;
