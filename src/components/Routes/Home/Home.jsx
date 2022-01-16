import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Helmet } from 'react-helmet';
// import AOS from 'aos';

import { useQuery } from '@hooks';
import { UiStoreContext, SessionStoreContext } from '@store';

import {
  HomeHero,
  HomeVideo,
  HomeFeatures,
  HomeBenefits,
  HomeHowItWorks,
  HomeIndustries,
  HomeSteps,
  HomeWhyInvest,
  HomeCore,
  HomeTeam,
  HomeUploads,
} from '@c/Home';
import { EventCountdown, EventBanner } from '@c/Event';
import { AdminComponents } from '@c/Layout';
import { content } from './Content.js';

const HomePage = observer(() => {
  const query = useQuery();
  const { hiddenComponents } = useContext(UiStoreContext);

  return (
    <>
      <Helmet>
        <title>Buzzier - Investment Page - dev</title>
      </Helmet>

      {!hiddenComponents.includes('Hero') && <HomeHero {...content.hero} />}
      {!hiddenComponents.includes('Video') && <HomeVideo {...content.video} />}
      {!hiddenComponents.includes('Features') && <HomeFeatures {...content.features} />}
      {!hiddenComponents.includes('Benefits') && <HomeBenefits {...content.benefits} />}
      {!hiddenComponents.includes('HowItWorks') && <HomeHowItWorks {...content.howItWorks} />}
      {!hiddenComponents.includes('Industries') && <HomeIndustries {...content.industries} />}
      {!hiddenComponents.includes('Steps') && <HomeSteps {...content.steps} />}
      {!hiddenComponents.includes('WhyInvest') && <HomeWhyInvest {...content.whyInvest} />}

      {!hiddenComponents.includes('Core') && <HomeCore {...content.core} />}
      {!hiddenComponents.includes('Team') && <HomeTeam {...content.team} />}
      {!hiddenComponents.includes('Uploads') && <HomeUploads {...content.uploads} />}
      {!hiddenComponents.includes('Banner') && <EventBanner {...content.eventBanner} />}
      {!hiddenComponents.includes('Countdown') && <EventCountdown {...content.countdown} />}

      <AdminComponents
        components={[
          'Hero',
          'Video',
          'Features',
          'Benefits',
          'HowItWorks',
          'Industries',
          'Steps',
          'WhyInvest',
          'Core',
          'Team',
          'Uploads',
          'Banner',
          'Countdown',
        ]}
      />
    </>
  );
});

export default HomePage;
