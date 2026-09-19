import ButtonLink from '@src/components/animationComponents/buttonLink/Index';
import Link from 'next/link';
import MenuButton from '@src/components/dom/navbar/components/MenuButton';
import MenuLinks from '@src/components/dom/navbar/components/MenuLinks';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import styles from '@src/components/dom/navbar/styles/index.module.scss';
import { useCallback, useEffect, useState } from 'react';
import useIsMobile from '@src/hooks/useIsMobile';
import { useRouter } from 'next/router';
import { useShallow } from 'zustand/react/shallow';
import { useStore } from '@src/store';

function Navbar() {
  const isMobile = useIsMobile();
  const router = useRouter();
  const [lenis] = useStore(useShallow((state) => [state.lenis]));
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToPosition = useCallback(
    (position, duration = 1.5) => {
      if (lenis) {
        lenis.scrollTo(position, {
          duration,
          force: true,
          easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
          onComplete: () => {
            lenis.start();
          },
        });
      }
    },
    [lenis],
  );

  const goToTop = useCallback(() => {
    if (router.pathname === '/') {
      scrollToPosition(0);
    }
  }, [router.pathname, scrollToPosition]);

  const logo = (
    <div id="logo-portal" className={styles.logoPortal}>
      <Link onClick={goToTop} aria-label="Go home" scroll={false} href="/">
        <h4 className={clsx('bold', 'h4')}>JEANFES</h4>
      </Link>
    </div>
  );

  return (
    <>
      <MenuLinks />

      {/* Portado a document.body: el .root de abajo necesita position+z-index para
          flotar sobre el canvas, y eso aísla el mix-blend-mode de sus hijos del resto
          de la página (ver comentario en index.module.scss). Como elemento hermano
          independiente, el logo sí puede invertirse según lo que tenga detrás. */}
      {isMounted ? ReactDOM.createPortal(logo, document.body) : null}

      <header className={styles.root} role="banner">
        <div className={styles.innerHeader}>
          <div className={styles.rightContainer}>
            {!isMobile && <ButtonLink target href="https://wa.me/573043105872" label="CONTACTO" />}
            <MenuButton />
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
