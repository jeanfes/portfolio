import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import ButtonLink from '@src/components/animationComponents/buttonLink/Index';
import Image from 'next/image';
import clsx from 'clsx';
import { gsap } from 'gsap';
import styles from '@src/pages/components/about/styles/about.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';

function About() {
  const isMobile = useIsMobile();
  const rootRef = useRef();
  const animatedImageRef = useRef();

  const setupScrollAnimation = () => {
    const ctx = gsap.context(() => {
      gsap.set(animatedImageRef.current, { top: !isMobile ? '-20vw' : '0' });
      if (!isMobile) {
        gsap.to(animatedImageRef.current, {
          top: '20vw',
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            scroller: document?.querySelector('main'),
            invalidateOnRefresh: true,
          },
        });
      }
    });

    return ctx;
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = setupScrollAnimation();
    return () => ctx.kill();
  }, [isMobile]);

  const renderImageContainer = () => (
    <div className={styles.imageContainer}>
      <Image priority src="/imagen2.png" sizes="100%" fill alt="Jean Escobar" />
    </div>
  );

  return (
    <section ref={rootRef} className={styles.root}>
      <div className={clsx(styles.nameContainer, 'layout-block-inner')}>
        <AppearTitle>
          <h1 className={clsx('h1', 'medium')}>¡Hola! Mi nombre es</h1>
          <h1 className={clsx('h1', 'medium')}>Jean Escobar!</h1>
        </AppearTitle>
      </div>

      <div className={clsx(styles.container, 'layout-grid-inner')}>
        {isMobile ? renderImageContainer() : null}
        <div className={clsx(styles.descWrapper)} ref={animatedImageRef}>
          <AppearTitle>
            <div className="p-l">
              “Como Ingeniero de Sistemas, transformo la complejidad técnica en soluciones escalables, diseñando arquitecturas lógicas y de alto rendimiento que impulsan el crecimiento del negocio.”
            </div>
          </AppearTitle>
        </div>
        {!isMobile ? renderImageContainer() : null}
        <div className={clsx(styles.descWrapperBottom)}>
          {!isMobile ? (
            <AppearTitle key="desktop-descWrapperBottom">
              <h6 className="h6">
                Soy un Ingeniero de Sistemas y Desarrollador Full Stack apasionado por diseñar e implementar arquitecturas de software escalables y eficientes. Con experiencia en metodologías ágiles y
                patrones de diseño modernos, construyo APIs robustas y seguras (Node.js, Python/Django, ASP.NET Core) junto con aplicaciones web y móviles intuitivas (React, Next.js, React Native),
                enfocándome en el rendimiento de extremo a extremo y en la entrega de valor de negocio.
              </h6>
            </AppearTitle>
          ) : (
            <AppearTitle key="mobile-descWrapperBottom">
              <h6 className="h6">
                {' '}
                Soy un Ingeniero de Sistemas y Desarrollador Full Stack apasionado por diseñar e implementar arquitecturas de software escalables y eficientes. Con experiencia en metodologías ágiles y
                patrones de diseño modernos, construyo APIs robustas y seguras (Node.js, Python/Django, ASP.NET Core) junto con aplicaciones web y móviles intuitivas (React, Next.js, React Native),
                enfocándome en el rendimiento de extremo a extremo y en la entrega de valor de negocio.
              </h6>
            </AppearTitle>
          )}
          <div className={clsx(styles.buttonContainer)}>
            <ButtonLink href="/about" label="SOBRE MÍ" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
