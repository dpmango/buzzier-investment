import React, { useState, useMemo, useCallback, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import cns from 'classnames';

import { UiStoreContext } from '@store';
import styles from './AdminComponents.module.scss';
import { useContext } from 'react';

const AdminComponents = observer(({ components }) => {
  const uiContext = useContext(UiStoreContext);
  const { hiddenComponents } = useContext(UiStoreContext);

  const handleClick = useCallback((e, name) => {
    e.preventDefault();

    uiContext.setHiddenComponents(name);
  }, []);

  const componentsNames = useMemo(() => {
    return components.map((c) => c.name) || [];
  }, [components]);

  // useEffect(() => {
  //   document.documentElement.classList = hiddenComponents.map((x) => `hidden-${x}`).join('::');
  // }, [hiddenComponents]);

  return (
    <>
      <div className={styles.controls}>
        <div className={styles.controlsToggle}>
          <div className={styles.controlsInner}>
            {componentsNames &&
              componentsNames.map((name, idx) => (
                <li key={name} data-active={hiddenComponents.includes(name)}>
                  <a href="#" onClick={(e) => handleClick(e, name)}>
                    {idx + 1} {name}
                  </a>
                </li>
              ))}
          </div>
        </div>
      </div>
    </>
  );
});

export default memo(AdminComponents);
