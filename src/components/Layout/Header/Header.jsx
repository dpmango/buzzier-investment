import React, { useContext, useState, useRef, useCallback, useMemo, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import cns from 'classnames';
import throttle from 'lodash/throttle';

import { SvgIcon, Button } from '@ui';
import { useOnClickOutside, useEventListener, useWindowSize } from '@hooks';
import { UiStoreContext } from '@store';

import styles from './Header.module.scss';
import { ReactComponent as Logo } from '@assets/logo.svg';

const Header = observer(({ className }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const { width } = useWindowSize();

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const uiContext = useContext(UiStoreContext);

  const handleScroll = useCallback(
    throttle((e) => {
      // const nearFooter = window.scrollY + window.innerHeight > document.body.scrollHeight - 375;
      const startStickyAt = 0;

      if (window.scrollY > startStickyAt) {
        if (!scrolled) {
          setScrolled(true);
          document.body.classList.add('scrolled');
        }
      } else {
        if (scrolled) {
          setScrolled(false);
          document.body.classList.remove('scrolled');
        }
      }
    }, 100),
    [scrolled, setScrolled, width]
  );

  useEventListener('scroll', handleScroll);

  useOnClickOutside(
    menuRef,
    useCallback(
      (e) => {
        setMenuOpened(false);
      },
      [setMenuOpened]
    )
  );

  // line-break detection (DOM based) for underlines
  const fixUnderlines = () => {
    const iElements = document.querySelectorAll('i');

    Array.from(iElements).map((el) => {
      const elHeight = el.offsetHeight;
      const elFontSize = parseInt(window.getComputedStyle(el).fontSize);
      const ratio = elHeight / elFontSize;

      if (ratio >= 2) {
        el.setAttribute('data-multiline', true);
      } else {
        el.setAttribute('data-multiline', false);
      }
    });
  };

  useEffect(() => {
    fixUnderlines();
    setTimeout(fixUnderlines, 1000); // bcause of swap styles
    setTimeout(fixUnderlines, 2000);
  }, [width]);

  return (
    <>
      <header className={cns(styles.header, scrolled && styles._scrolled, className)} ref={headerRef}>
        <div className="container">
          <div className={styles.wrapper}>
            <Link to="/" className={styles.logo}>
              <Logo />
            </Link>

            <div className={styles.cta}>
              <Button
                theme="black"
                onClick={() => {
                  window.open('/uploads/Fact_Sheet.pdf');
                }}>
                Fact sheet
              </Button>
              <Button theme="primary" onClick={() => uiContext.setModal('eventSignup')}>
                Join our live event
              </Button>
            </div>

            <div className={styles.hamburger}>
              <div className={cns('hamburger', menuOpened && 'is-active')} onClick={() => setMenuOpened(!menuOpened)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={cns(styles.menu, menuOpened && styles._active)}>
        <div className={styles.menuWrapper} ref={menuRef}>
          <div className={cns('hamburger', menuOpened && 'is-active')} onClick={() => setMenuOpened(!menuOpened)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={styles.menuCta}>
            <Button
              onClick={() => {
                window.open('/uploads/Fact_Sheet.pdf');
              }}
              theme="black"
              block>
              Download our fact sheet
            </Button>
            <Button theme="primary" block onClick={() => uiContext.setModal('eventSignup')}>
              Join our live event
            </Button>
          </div>
        </div>
      </div>
    </>
  );
});

export default Header;
