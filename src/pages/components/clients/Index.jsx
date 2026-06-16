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

      {/* ELEMENTO 1: Partikle S.A.S (Fullstack Ssr) */}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2026 - Presente</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[0] = el;
        }}
        className={styles.first}
      >
        <Badge name="company2" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Partikle S.A.S</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">
              Desarrollador Fullstack Ssr. Lidero el desarrollo de aplicaciones web de extremo a extremo con Python/Django y React/TypeScript, optimizando APIs y consultas para reducir tiempos de
              respuesta en un 30%.
            </div>
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
              <h6 className="h6">2026 - Presente</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Partikle S.A.S</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">
                Desarrollador Fullstack Ssr. Lidero el desarrollo de aplicaciones web de extremo a extremo con Python/Django y React/TypeScript, optimizando APIs y consultas para reducir tiempos de
                respuesta en un 30%.
              </div>
            </AppearTitle>
          </div>
        </>
      ) : null}

      {/* ELEMENTO 2: Dinamicapps S.A.S */}
      {!isMobile ? <div className={styles.secondEmpty} /> : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2025</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[1] = el;
        }}
        className={styles.second}
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
            <div className="p-l">
              Desarrollador Fullstack Ssr. Diseñé e implementé APIs robustas en C# con ASP.NET Core y frontends interactivos con React/Next.js y Zustand. Optimicé drásticamente el rendimiento web
              (auditorías Lighthouse).
            </div>
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
              <h6 className="h6">2025</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Dinamicapps S.A.S</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">
                Desarrollador Fullstack Ssr. Diseñé e implementé APIs robustas en C# con ASP.NET Core y frontends interactivos con React/Next.js y Zustand. Optimicé drásticamente el rendimiento web
                (auditorías Lighthouse).
              </div>
            </AppearTitle>
          </div>
          <div className={styles.fourthEmpty} />
        </>
      ) : null}

      {/* ELEMENTO 3: Partikle S.A.S (Frontend Jr) */}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2023 - 2025</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[2] = el;
        }}
        className={styles.third}
      >
        <Badge name="company2" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Partikle S.A.S</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">
              Desarrollador Frontend Jr. Construí interfaces accesibles con React y SASS/Material-UI. Colaboré en la integración de APIs, desarrollo de microservicios con Node.js y logré más del 75%
              de cobertura de pruebas unitarias.
            </div>
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
              <h6 className="h6">2023 - 2025</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Partikle S.A.S</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">
                Desarrollador Frontend Jr. Construí interfaces accesibles con React y SASS/Material-UI. Colaboré en la integración de APIs, desarrollo de microservicios con Node.js y logré más del 75%
                de cobertura de pruebas unitarias.
              </div>
            </AppearTitle>
          </div>
        </>
      ) : null}

      {/* ELEMENTO 4: Universidad Simón Bolívar */}
      {!isMobile ? <div className={styles.secondEmpty} /> : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2020 - 2025</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[3] = el;
        }}
        className={styles.fourth}
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
            <div className="p-l">
              Ingeniería de Sistemas. Graduado de la USB. Sólidas bases en ingeniería de software, arquitectura de sistemas y algoritmos. Desarrollé aplicaciones móviles nativas con Kotlin (como
              LiveNotes y Vibes) e híbridas (React Native).
            </div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div
            ref={(el) => {
              textRefs.current[3] = el;
            }}
            className={styles.fourthText}
          >
            <AppearTitle>
              <h6 className="h6">2020 - 2025</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Universidad Simón Bolívar</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">
                Ingeniería de Sistemas. Graduado de la USB. Sólidas bases en ingeniería de software, arquitectura de sistemas y algoritmos. Desarrollé aplicaciones móviles nativas con Kotlin (como
                LiveNotes y Vibes) e híbridas (React Native).
              </div>
            </AppearTitle>
          </div>
          <div className={styles.fourthEmpty} />
        </>
      ) : null}
    </section>
  );
}

export default Clients;
