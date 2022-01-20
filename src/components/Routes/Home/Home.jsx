import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Helmet } from 'react-helmet';
// import AOS from 'aos';
import { ParallaxProvider } from 'react-scroll-parallax';

import { useQuery } from '@hooks';
import { UiStoreContext, SessionStoreContext } from '@store';

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
import { AdminComponents } from '@c/Layout';
import { content } from './Content.js';

const HomePage = observer(() => {
  const query = useQuery();
  const { hiddenComponents } = useContext(UiStoreContext);

  return (
    <>
      <Helmet>
        <title>Buzzier</title>
      </Helmet>

      <ParallaxProvider>
        {!hiddenComponents.includes('Hero') && <HomeHero {...content.hero} />}
        {!hiddenComponents.includes('Video') && <HomeVideo {...content.video} />}
        {!hiddenComponents.includes('Calculator') && <CalculatorPreview {...content.calculator} />}
        {!hiddenComponents.includes('Features') && <HomeFeatures {...content.features} />}
        {!hiddenComponents.includes('Benefits') && <HomeBenefits {...content.benefits} />}
        {!hiddenComponents.includes('HowItWorks') && <HomeHowItWorks {...content.howItWorks} />}
        {!hiddenComponents.includes('BusinessModel') && <HomeBusinessModel {...content.model} />}
        {!hiddenComponents.includes('Industries') && <HomeIndustries {...content.industries} />}
        {!hiddenComponents.includes('Scope') && <HomeScope {...content.scope} />}
        {!hiddenComponents.includes('Steps') && <HomeSteps {...content.steps} />}
        {!hiddenComponents.includes('WhyInvest') && <HomeWhyInvest {...content.whyInvest} />}
        {!hiddenComponents.includes('EventLive') && <EventLive {...content.eventLive} />}
        {!hiddenComponents.includes('Calculator') && <CalculatorPreview {...content.calculator} />}
        {!hiddenComponents.includes('Core') && <HomeCore {...content.core} />}
        {!hiddenComponents.includes('Team') && <HomeTeam {...content.team} />}
        {!hiddenComponents.includes('Uploads') && <HomeUploads {...content.uploads} />}
        {!hiddenComponents.includes('EventBanner') && <EventBanner {...content.eventBanner} />}
        {!hiddenComponents.includes('EventCountdown') && <EventCountdown {...content.countdown} />}
      </ParallaxProvider>

      <EventSignupModal />
      <AssumptionsModal />

      <AdminComponents
        components={[
          'Hero',
          'Video',
          'Calculator',
          'Features',
          'Benefits',
          'HowItWorks',
          'BusinessModel',
          'Industries',
          'Scope',
          'Steps',
          'WhyInvest',
          'EventLive',
          'Core',
          'Team',
          'Uploads',
          'EventBanner',
          'EventCountdown',
        ]}
      />
    </>
  );
});

export default HomePage;
