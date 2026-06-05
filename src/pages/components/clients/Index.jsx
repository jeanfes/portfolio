import AppearByWords from '@src/components/animationComponents/appearByWords/Index';
import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import Badge from '@src/pages/components/clients/components/Badge';
import clsx from 'clsx';
import { gsap } from 'gsap';
import styles from '@src/pages/components/clients/styles/clients.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';
import { useWindowSize } from '@darkroom.engineering/hamo';

function Clients() {
  const isMobile = useIsMobile();
  const textRefs = useRef([]);
  const badgeRefs = useRef([]);
  const rootRef = useRef();
  const windowSize = useWindowSize();

  const setupScrollAnimation = () => {
    const ctx = gsap.context(() => {
      if (!isMobile) {
        const vw = (coef) => windowSize.height * (coef / 100);
        textRefs.current.forEach((textRef, index) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: rootRef.current,
                start: index === 0 ? `top-=${vw(35)}` : `top+=${vw(35 + 5.5555556 * index)}`,
                end: index === 0 ? `bottom-=${vw(35 + 5.5555556 * index)}` : `bottom+=${vw(25)}`,
                toggleActions: 'play none reverse none',
                scrub: true,
                scroller: document?.querySelector('main'),
                invalidateOnRefresh: true,
              },
            })
            .to(textRef, {
              top: `${10 + 30 * index + 5.5555556 * index}vw`,
            });
        });
      }
    });

    return ctx;
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = setupScrollAnimation(textRefs, rootRef, windowSize, isMobile);
    return () => ctx.kill();
  }, [isMobile, windowSize.height]);

  return (
    <section ref={rootRef} className={clsx(styles.root, 'layout-grid-inner')}>
      <h1 className={clsx(styles.sectionTitle, 'h1')}>
        <AppearByWords>Trayectoria</AppearByWords>
      </h1>
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2025</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[0] = el;
        }}
        className={styles.first}
      >
        <Badge name="company1" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Dinamicapps S.A.S</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">Desarrollador Frontend Ssr. Lideré el desarrollo e</div>
            <div className="p-l">implementación de chatbots conversacionales interactivos</div>
            <div className="p-l">e integración de WebSockets para mensajería en tiempo real.</div>
            <div className="p-l">Optimicé el rendimiento general del frontend con code splitting</div>
            <div className="p-l">y lazy loading en React, TypeScript y Zustand, garantizando</div>
            <div className="p-l">interfaces responsivas, limpias y altamente UX-friendly.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.firstEmpty} />
          <div
            ref={(el) => {
              textRefs.current[0] = el;
            }}
            className={styles.firstText}
          >
            <AppearTitle>
              <h6 className="h6">2025</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Dinamicapps S.A.S</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">Desarrollador Frontend Ssr. Lideré el desarrollo e</div>
              <div className="p-l">implementación de chatbots conversacionales interactivos</div>
              <div className="p-l">e integración de WebSockets para mensajería en tiempo real.</div>
              <div className="p-l">Optimicé el rendimiento general del frontend con code splitting</div>
              <div className="p-l">y lazy loading en React, TypeScript y Zustand, garantizando</div>
              <div className="p-l">interfaces responsivas, limpias y altamente UX-friendly.</div>
            </AppearTitle>
          </div>
        </>
      ) : null}
      {!isMobile ? <div className={styles.secondEmpty} /> : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2023 - 2025</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[1] = el;
        }}
        className={styles.second}
      >
        <Badge name="company2" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Soluciones Americana</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">Desarrollador Frontend Jr. Diseñé la arquitectura</div>
            <div className="p-l">de componentes reutilizables (Atomic Design) con React,</div>
            <div className="p-l">TypeScript, Redux y Material-UI. Llevé a cabo auditorías</div>
            <div className="p-l">de rendimiento con Lighthouse y documenté el catálogo de</div>
            <div className="p-l">componentes interactivos mediante Storybook para el equipo.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div
            ref={(el) => {
              textRefs.current[1] = el;
            }}
            className={styles.secondText}
          >
            <AppearTitle>
              <h6 className="h6">2023 - 2025</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Soluciones Americana S.A.S</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">Desarrollador Frontend Jr. Diseñé la arquitectura</div>
              <div className="p-l">de componentes reutilizables (Atomic Design) con React,</div>
              <div className="p-l">TypeScript, Redux y Material-UI. Llevé a cabo auditorías</div>
              <div className="p-l">de rendimiento con Lighthouse y documenté el catálogo de</div>
              <div className="p-l">componentes interactivos mediante Storybook para el equipo.</div>
            </AppearTitle>
          </div>
          <div className={styles.fourthEmpty} />
        </>
      ) : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2020 - 2023</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[2] = el;
        }}
        className={styles.third}
      >
        <Badge name="company3" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Universidad Simón Bolívar</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">Estudios profesionales en Ingeniería de Sistemas</div>
            <div className="p-l">en Barranquilla, Colombia. Paralelamente, desarrollé</div>
            <div className="p-l">múltiples proyectos nativos de Android con Kotlin (como</div>
            <div className="p-l">LiveNotes y Vibes) y aplicaciones móviles híbridas utilizando</div>
            <div className="p-l">React Native, consolidando mis bases de desarrollo.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.fifthEmpty} />
          <div
            ref={(el) => {
              textRefs.current[2] = el;
            }}
            className={styles.thirdText}
          >
            <AppearTitle>
              <h6 className="h6">2020 - 2023</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Universidad Simón Bolívar</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">Estudios profesionales en Ingeniería de Sistemas</div>
              <div className="p-l">en Barranquilla, Colombia. Paralelamente, desarrollé</div>
              <div className="p-l">múltiples proyectos nativos de Android con Kotlin (como</div>
              <div className="p-l">LiveNotes y Vibes) y aplicaciones móviles híbridas utilizando</div>
              <div className="p-l">React Native, consolidando mis bases de desarrollo.</div>
            </AppearTitle>
          </div>
        </>
      ) : null}
    </section>
  );
}

export default Clients;
