import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react';
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
  HomeTeam,
  HomeUploads,
} from '@c/Home';
import { EventCountdown, EventBanner } from '@c/Event';
import { content } from './Content.js';

const HomePage = observer(() => {
  const query = useQuery();

  return (
    <>
      <Helmet>
        <title>Buzzier - Investment Page - dev</title>
      </Helmet>

      <HomeHero {...content.hero} />
      <HomeVideo {...content.video} />
      <HomeFeatures {...content.features} />
      <HomeBenefits {...content.benefits} />
      <HomeHowItWorks {...content.howItWorks} />
      <HomeIndustries {...content.industries} />

      <HomeTeam {...content.team} />
      <HomeUploads {...content.uploads} />
      <EventBanner {...content.eventBanner} />
      <EventCountdown {...content.countdown} />
    </>
  );
});

export default HomePage;
