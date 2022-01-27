import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Helmet } from 'react-helmet';
import { ParallaxProvider } from 'react-scroll-parallax';
import { UiStoreContext } from '@store';

import { CalculatorPreview } from '@c/Calculator';
import {
  HomeHero,
  HomeVideo,
  HomeFeatures,
  HomeBenefits,
  HomeHowItWorks,
  HomeBusinessModel,
  HomeIndustries,
  HomeScope,
  HomeSteps,
  HomeWhyInvest,
  HomeCore,
  HomeTeam,
  HomeUploads,
} from '@c/Home';
import { EventCountdown, EventBanner, EventLive } from '@c/Event';
import { EventSignupModal, AssumptionsModal } from '@c/Modal';
import { content } from './Content.js';

const HomePage = observer(() => {
  const uiContext = useContext(UiStoreContext);
  const hiddenComponents = uiContext.hiddenComponents;

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
        <HomeIndustries {...content.industries} />
        <HomeScope {...content.scope} />
        <HomeSteps {...content.steps} />
        <HomeWhyInvest {...content.whyInvest} />
        <EventLive {...content.eventLive} />
        <CalculatorPreview {...content.calculator1} />
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
