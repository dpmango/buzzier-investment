import React, { useContext, useEffect, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Helmet } from 'react-helmet';
import cns from 'classnames';

import { Button, Breadcrumbs } from '@ui';
import { UiStoreContext, SessionStoreContext } from '@store';
import { useQuery } from '@hooks';

import styles from './NoMatch.module.scss';

const NoMatchPage = observer(() => {
  const history = useHistory();
  const location = useLocation();
  const { query } = useQuery();

  const uiContext = useContext(UiStoreContext);
  const sessionContext = useContext(SessionStoreContext);

  return (
    <>
      <div className="container">
        <div className={styles.page404}>
          <div className={styles.page404_Title}>404</div>
          <div className={styles.page404_Subtitle}>
            К сожалению, страница <strong>{location.pathname}</strong> не найдена
          </div>
        </div>
      </div>

      <Helmet>
        <title>Page not found</title>
      </Helmet>
    </>
  );
});

export default NoMatchPage;
