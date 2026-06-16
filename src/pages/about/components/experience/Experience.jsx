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
    desc: 'Lidero el desarrollo de aplicaciones web de extremo a extremo con Python/Django y React/TypeScript, diseñando arquitecturas modulares bajo principios SOLID para asegurar escalabilidad y mantenibilidad. Construyo APIs y servicios backend robustos con foco en seguridad, autenticación y comunicación eficiente. Reduje en un 30% los tiempos de respuesta del servidor optimizando consultas complejas y base de datos, colaborando con los equipos de producto para alinear los entregables técnicos con los objetivos estratégicos del negocio.',
    stack: 'React, TypeScript, Tailwind, SCSS, Webpack, Django, Python, PostgreSQL, Zustand, Redux, Jest, React Testing Library, Git, Jira, Bitbucket',
  },
  {
    company: 'Freelance',
    role: 'Desarrollador Fullstack Ssr',
    period: 'Octubre 2025 – Abril 2026',
    desc: 'Diseñé e implementé productos de software completos, conectando servicios backend en Node.js/Express con interfaces interactivas y responsivas en React/Next.js y TypeScript. Optimicé el rendimiento del frontend logrando reducir los tiempos de carga inicial un 35% mediante code splitting y carga diferida. Además, automaticé despliegues e integración continua con GitHub Actions y utilicé estratégicamente herramientas de IA para acelerar el desarrollo y la cobertura de pruebas unitarias.',
    stack:
      'React, Next.js, TypeScript, Tailwind, SCSS, Shadcn/UI, Webpack, Node.js, Express, PostgreSQL, MySQL, MongoDB, Zustand, Redux, WebSockets, Jest, React Testing Library, Docker, GitHub Actions, Vercel, Netlify, Git',
  },
  {
    company: 'Dinamicapps S.A.S',
    role: 'Desarrollador Fullstack Ssr',
    period: 'Junio 2025 – Septiembre 2025',
    desc: 'Desarrollé plataformas web corporativas de alto rendimiento integrando robustos servicios en ASP.NET Core (C#) con interfaces accesibles y layouts complejos en React, Next.js y Tailwind CSS. Implementé una gestión de estado global eficiente con Zustand que redujo re-renders innecesarios en el cliente, optimicé los tiempos de carga inicial medidos en Lighthouse mediante carga diferida, e integré APIs de Inteligencia Artificial para automatizar funcionalidades y la documentación técnica.',
    stack:
      'React, Next.js, TypeScript, Shadcn/UI, Tailwind CSS, Zustand, ASP.NET Core, C#, WebSockets, OpenAI API, Vite, Storybook, Jest, React Testing Library, GitHub Actions, Bitbucket Pipelines, SCSS, Git',
  },
  {
    company: 'Partikle S.A.S',
    role: 'Desarrollador Frontend Jr',
    period: 'Noviembre 2023 – Mayo 2025',
    desc: 'Desarrollé interfaces de usuario accesibles utilizando React, TypeScript y Material UI. Participé activamente en la refactorización de módulos heredados aplicando patrones de diseño y principios SOLID para mejorar la mantenibilidad del sistema. Colaboré en la integración de APIs REST, el desarrollo de endpoints en Node.js/Express y la migración de la gestión de estado global a Zustand/Redux, elevando la confiabilidad con pruebas en Jest y logrando una cobertura del 75%+ en componentes críticos.',
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
