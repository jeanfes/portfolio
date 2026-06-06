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
    company: 'Freelance',
    role: 'Desarrollador Fullstack Ssr',
    period: 'Octubre 2025 – Abril 2026',
    desc: 'Durante mi etapa como Desarrollador Freelance Ssr, construí soluciones a medida de alta calidad empleando React, Next.js y TypeScript. Implementé interfaces responsivas, accesibles y optimizadas usando Tailwind CSS, Flexbox y CSS Grid. Desarrollé APIs RESTful eficientes con Node.js y Express bajo principios de arquitectura limpia, y estructuré el frontend siguiendo Atomic Design y SOLID para maximizar la reutilización de código. Adicionalmente, logré optimizaciones notables de rendimiento mediante técnicas avanzadas como code splitting, lazy loading y optimización de bundlers, integrando herramientas de IA para acelerar de manera segura los tiempos de entrega sin comprometer la calidad del software.',
    stack:
      'React, Next.js, TypeScript, Tailwind, SCSS, Shadcn/UI, Webpack, Node.js, Express, PostgreSQL, MySQL, MongoDB, Zustand, Redux, WebSockets, Jest, React Testing Library, Docker, GitHub Actions, Vercel, Netlify, Git',
  },
  {
    company: 'Dinamicapps S.A.S',
    role: 'Desarrollador FullStack Ssr',
    period: 'Junio 2025 – Septiembre 2025',
    desc: 'En Dinamicapps S.A.S, me encargué del desarrollo fullstack combinando React con ASP.NET Core en C# para crear plataformas web de alto rendimiento. Implementé interfaces altamente interactivas usando Next.js, Shadcn/UI y Tailwind CSS, garantizando rigurosos estándares de accesibilidad y diseño responsivo. Para optimizar el rendimiento y la eficiencia del flujo de datos, gestioné el estado global con Zustand y apliqué técnicas de carga diferida (lazy loading), reduciendo drásticamente los tiempos de carga inicial. También integré APIs de inteligencia artificial y utilicé asistentes de IA para acelerar la documentación y la cobertura de pruebas unitarias.',
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
