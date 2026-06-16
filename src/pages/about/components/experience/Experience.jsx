/* eslint-disable react/no-array-index-key */
import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import AppearByWords from '@src/components/animationComponents/appearByWords/Index';
import clsx from 'clsx';
import styles from '@src/pages/about/components/experience/styles/experience.module.scss';

const experiences = [
  {
    company: 'Partikle S.A.S',
    role: 'Desarrollador Fullstack Ssr',
    period: 'Mayo 2026 – Actualidad',
    desc: 'Como Desarrollador Fullstack Ssr en Partikle S.A.S, lidero el desarrollo de aplicaciones orientadas a producto utilizando Python, Django, React y TypeScript, creando soluciones altamente escalables, robustas y alineadas con las mejores prácticas de arquitectura moderna. Me especializo en la construcción de APIs consistentes y seguras que garantizan una comunicación eficiente entre el frontend y el backend, así como con servicios externos. Además, diseño arquitecturas limpias basadas en principios SOLID y patrones modernos de desarrollo para facilitar la mantenibilidad del sistema, colaborando estrechamente con los equipos de producto para alinear los entregables técnicos con las metas estratégicas del negocio.',
    stack: 'React, TypeScript, Tailwind, SCSS, Webpack, Django, Python, PostgreSQL, Zustand, Redux, Jest, React Testing Library, Git, Jira, Bitbucket',
  },
  {
    company: 'Consultoría / Proyectos Independientes',
    role: 'Desarrollador Fullstack Ssr',
    period: 'Octubre 2025 – Abril 2026',
    desc: 'Como Desarrollador Fullstack Ssr independiente, diseñé e implementé productos de software completos y APIs escalables con Node.js y Express bajo principios de arquitectura limpia. Construí aplicaciones responsivas y optimizadas con React, Next.js y TypeScript, reduciendo tiempos de carga inicial mediante code splitting y optimización de bundlers. Colaboré de cerca con clientes y stakeholders para traducir necesidades de negocio en requerimientos técnicos, automatizando despliegues con CI/CD (GitHub Actions) y asegurando soluciones robustas, mantenibles y de alta calidad.',
    stack:
      'React, Next.js, TypeScript, Tailwind, SCSS, Shadcn/UI, Webpack, Node.js, Express, PostgreSQL, MySQL, MongoDB, Zustand, Redux, WebSockets, Jest, React Testing Library, Docker, GitHub Actions, Vercel, Netlify, Git',
  },
  {
    company: 'Dinamicapps S.A.S',
    role: 'Desarrollador Fullstack Ssr',
    period: 'Junio 2025 – Septiembre 2025',
    desc: 'En Dinamicapps S.A.S, colaboré en el desarrollo fullstack de plataformas web corporativas de alto rendimiento combinando React y Next.js en el frontend con ASP.NET Core (C#) en el backend. Diseñé e implementé interfaces dinámicas utilizando Shadcn/UI y Tailwind CSS, bajo rigurosos estándares de accesibilidad y diseño responsivo. Para optimizar el flujo de datos y la velocidad, gestioné el estado global con Zustand y apliqué técnicas de carga diferida (lazy loading), reduciendo drásticamente los tiempos de carga inicial y mejorando la experiencia del usuario. También integré APIs de inteligencia artificial y utilicé asistentes de IA para acelerar la documentación y la cobertura de pruebas unitarias.',
    stack:
      'React, Next.js, TypeScript, Shadcn/UI, Tailwind CSS, CSS Grid, Flexbox, Zustand, WebSockets, OpenAI API, Vite, Storybook, Jest, React Testing Library, GitHub Actions, Bitbucket Pipelines, HTML5, SCSS, Git',
  },
  {
    company: 'Partikle S.A.S',
    role: 'Desarrollador Frontend Jr',
    period: 'Noviembre 2023 – Mayo 2025',
    desc: 'En mi rol inicial como Desarrollador Frontend Jr en Partikle S.A.S, creé interfaces de usuario utilizando React, TypeScript y Material-UI con la metodología BEM y SASS. Participé activamente en la refactorización de módulos legacy aplicando principios SOLID y Atomic Design para mejorar la mantenibilidad de la plataforma. Adicionalmente, colaboré en la migración de la gestión de estado hacia Redux y Zustand, integré endpoints desarrollados en Node.js/Express, e incrementé la confiabilidad de la aplicación mediante la implementación de pruebas unitarias con Jest y React Testing Library superando el 75% de cobertura en componentes críticos.',
    stack:
      'React, TypeScript, Zustand, Redux, Material-UI, Node.js, Express.js, SASS, CSS Grid, Flexbox, HTML5, WebSockets, Webpack, Jest, React Testing Library, Storybook, Bitbucket Pipelines, Azure DevOps, Jira, Git',
  },
];

function Experience() {
  return (
    <section className={clsx(styles.root, 'layout-block-inner')}>
      <div className={styles.topContainer}>
        <h1 className={clsx(styles.text, 'h1')}>
          <AppearByWords>Experiencia</AppearByWords>
        </h1>
      </div>

      <div className={clsx(styles.experienceGrid, 'layout-grid-inner')}>
        {experiences.map((exp, index) => (
          <div key={`${exp.company}-${index}`} className={styles.expCard}>
            <div className={styles.cardHeader}>
              <AppearTitle>
                <h3 className={clsx(styles.company, 'h3')}>{exp.company}</h3>
                <h4 className={clsx(styles.role, 'h4')}>{exp.role}</h4>
                <span className={clsx(styles.period, 'p-xs')}>{exp.period}</span>
              </AppearTitle>
            </div>
            <div className={styles.cardBody}>
              <AppearTitle>
                <p className={clsx(styles.descText, 'p-l')}>{exp.desc}</p>
                <div className={styles.stackContainer}>
                  <span className={clsx(styles.stackLabel, 'p-x', 'bold')}>Tecnologías:</span>
                  <p className={clsx(styles.stackText, 'p-x')}>{exp.stack}</p>
                </div>
              </AppearTitle>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
