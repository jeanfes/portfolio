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
              Desarrollador Fullstack Ssr. Lidero el desarrollo de aplicaciones web complejas de extremo a extremo, diseñando arquitecturas limpias basadas en principios SOLID y patrones modernos.
              Construyo servicios backend robustos y APIs eficientes priorizando la consistencia, seguridad y el desacoplamiento, mientras integro de manera fluida el frontend para garantizar flujos
              de información sólidos y una excelente experiencia de usuario.
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
                Desarrollador Fullstack Ssr. Lidero el desarrollo de aplicaciones web complejas de extremo a extremo, diseñando arquitecturas limpias basadas en principios SOLID y patrones modernos.
                Construyo servicios backend robustos y APIs eficientes priorizando la consistencia, seguridad y el desacoplamiento, mientras integro de manera fluida el frontend para garantizar flujos
                de información sólidos y una excelente experiencia de usuario.
              </div>
            </AppearTitle>
          </div>
        </>
      ) : null}

      {/* ELEMENTO 2: Freelance */}
      {!isMobile ? <div className={styles.secondEmpty} /> : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2025 - 2026</AppearTitle>
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
            <h4 className={clsx('h4', 'bold')}>Freelance</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">
              Desarrollador Fullstack Ssr. Diseñé y desarrollé productos de software completos, implementando interfaces de usuario altamente responsivas y accesibles bajo metodologías de diseño
              modular. Diseñé e integré APIs REST eficientes con un fuerte enfoque en la separación de responsabilidades, optimizando el rendimiento de carga del cliente mediante técnicas avanzadas y
              potenciando la entrega de código de calidad mediante herramientas avanzadas de automatización.
            </div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <div
          ref={(el) => {
            textRefs.current[1] = el;
          }}
          className={styles.secondText}
        >
          <AppearTitle>
            <h6 className="h6">2025 - 2026</h6>
          </AppearTitle>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold', styles.title)}>Freelance</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">
              Desarrollador Fullstack Ssr. Diseñé y desarrollé productos de software completos, implementando interfaces de usuario altamente responsivas y accesibles bajo metodologías de diseño
              modular. Diseñé e integré APIs REST eficientes con un fuerte enfoque en la separación de responsabilidades, optimizando el rendimiento de carga del cliente mediante técnicas avanzadas y
              potenciando la entrega de código de calidad mediante herramientas avanzadas de automatización.
            </div>
          </AppearTitle>
        </div>
      ) : null}

      {/* ELEMENTO 3: Dinamicapps S.A.S */}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2025</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[2] = el;
        }}
        className={styles.fourth}
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
              Desarrollador Fullstack Ssr. Construí soluciones de software integrales con APIs REST robustas, implementando esquemas de autenticación y control de errores rigurosos. Desarrollé
              interfaces de alta interactividad con foco estricto en la accesibilidad web (a11y) y layouts responsivos, optimizando la gestión de estado para minimizar el procesamiento en el navegador
              y acelerando los tiempos de carga inicial mediante división de código.
            </div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.firstEmpty} />
          <div
            ref={(el) => {
              textRefs.current[2] = el;
            }}
            className={styles.thirdText}
          >
            <AppearTitle>
              <h6 className="h6">2025</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Dinamicapps S.A.S</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">
                Desarrollador Fullstack Ssr. Construí soluciones de software integrales con APIs REST robustas, implementando esquemas de autenticación y control de errores rigurosos. Desarrollé
                interfaces de alta interactividad con foco estricto en la accesibilidad web (a11y) y layouts responsivos, optimizando la gestión de estado para minimizar el procesamiento en el
                navegador y acelerando los tiempos de carga inicial mediante división de código.
              </div>
            </AppearTitle>
          </div>
        </>
      ) : null}

      {/* ELEMENTO 4: Partikle S.A.S (Frontend Jr) */}
      {!isMobile ? <div className={styles.secondEmpty} /> : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2023 - 2025</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[3] = el;
        }}
        className={styles.fifth}
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
              Desarrollador Frontend Jr. Diseñé e implementé interfaces de usuario responsivas y accesibles, liderando la refactorización de módulos legados hacia componentes modulares y escalables
              basados en SOLID. Colaboré en la integración con servicios backend y en la migración de arquitecturas de estado global, asegurando la calidad del código mediante la implementación de
              pruebas unitarias con coberturas superiores al 75% en flujos críticos.
            </div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <div
          ref={(el) => {
            textRefs.current[3] = el;
          }}
          className={styles.fourthText}
        >
          <AppearTitle>
            <h6 className="h6">2023 - 2025</h6>
          </AppearTitle>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold', styles.title)}>Partikle S.A.S</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">
              Desarrollador Frontend Jr. Diseñé e implementé interfaces de usuario responsivas y accesibles, liderando la refactorización de módulos legados hacia componentes modulares y escalables
              basados en SOLID. Colaboré en la integración con servicios backend y en la migración de arquitecturas de estado global, asegurando la calidad del código mediante la implementación de
              pruebas unitarias con coberturas superiores al 75% en flujos críticos.
            </div>
          </AppearTitle>
        </div>
      ) : null}

      {/* ELEMENTO 5: Universidad Simón Bolívar */}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2020 - 2025</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[4] = el;
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
              Ingeniería de Sistemas. Graduado de la Universidad Simón Bolívar con una sólida formación en fundamentos de ciencias de la computación, diseño y arquitectura de software, bases de datos
              y metodologías ágiles de desarrollo para la gestión y ejecución de proyectos de tecnología.
            </div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.firstEmpty} />
          <div
            ref={(el) => {
              textRefs.current[4] = el;
            }}
            className={styles.fifthText}
          >
            <AppearTitle>
              <h6 className="h6">2020 - 2025</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Universidad Simón Bolívar</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">
                Ingeniería de Sistemas. Graduado de la Universidad Simón Bolívar con una sólida formación en fundamentos de ciencias de la computación, diseño y arquitectura de software, bases de
                datos y metodologías ágiles de desarrollo para la gestión y ejecución de proyectos de tecnología.
              </div>
            </AppearTitle>
          </div>
        </>
      ) : null}
    </section>
  );
}

export default Clients;
