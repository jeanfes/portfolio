/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useMemo, useRef } from 'react';

import CustomHead from '@src/components/dom/CustomHead';
import NextProject from '@src/pages/projects/components/nextProject/NextProject';
import ProjectDetails from '@src/pages/projects/components/projectDetails/ProjectDetails';
import ProjectImages from '@src/pages/projects/components/projectsImages/ProjectImages';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import clsx from 'clsx';
import { gsap } from 'gsap';
import projects from '@src/constants/projects';
import styles from '@src/pages/projects/project.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useShallow } from 'zustand/react/shallow';
import { useStore } from '@src/store';
import { useWindowSize } from '@darkroom.engineering/hamo';

function Page({ id }) {
  const isMobile = useIsMobile();
  const rightContainerRef = useRef();
  const leftContainerRef = useRef();
  const [isLoading, setFluidColor] = useStore(useShallow((state) => [state.isLoading, state.setFluidColor]));
  const windowSize = useWindowSize();

  const projectIndex = useMemo(() => projects.findIndex((project) => project.id === id), [id]);
  const currentProject = useMemo(() => projects[projectIndex], [projectIndex]);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!isLoading && !isMobile) {
        ScrollTrigger.create({
          id: 'project',
          trigger: rightContainerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: leftContainerRef.current,
          scrub: true,
          scroller: document?.querySelector('main'),
          invalidateOnRefresh: true,
          pinSpacing: false,
        });
      }
    });

    return () => {
      ctx.kill();
      ScrollTrigger.getById('project')?.kill();
    };
  }, [isMobile, isLoading, windowSize.width]);

  useEffect(() => {
    if (currentProject) {
      setFluidColor('#d7d7d4');
    }
    return () => {
      setFluidColor('#d7d7d4');
    };
  }, [currentProject, setFluidColor]);

  const seo = useMemo(
    () => ({
      title: currentProject ? `Jean Escobar - Proyecto ${currentProject.title}` : '',
      description: currentProject
        ? `Detalles del proyecto ${currentProject.title}, desarrollado con ${currentProject.company}, donde lideré el diseño, desarrollo e integración de la solución de extremo a extremo, optimizando el rendimiento, la seguridad y la arquitectura general.`
        : '',
      keywords: currentProject
        ? [
            `proyecto ${currentProject.title}`,
            `desarrollo ${currentProject.title}`,
            `tecnología ${currentProject.company}`,
            `Jean Escobar ${currentProject.title}`,
            `Fullstack ${currentProject.title}`,
            `Diseño responsivo ${currentProject.title}`,
            `Experiencia de usuario ${currentProject.title}`,
          ]
        : [],
    }),
    [currentProject],
  );

  if (!currentProject) {
    return null;
  }

  return (
    <>
      <CustomHead {...seo} />
      <section className={clsx(styles.root, 'layout-grid-inner')}>
        <div ref={leftContainerRef} className={styles.leftContainer}>
          <ProjectDetails project={currentProject} />
        </div>
        <div ref={rightContainerRef} className={styles.rightContainer}>
          <ProjectImages project={currentProject} />
        </div>
      </section>
      <NextProject nextProject={projectIndex === projects.length - 1 ? projects[0] : projects[projectIndex + 1]} />
    </>
  );
}

export async function getStaticPaths() {
  const paths = projects.map((project) => ({ params: { id: project.id } }));
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  return { props: { id: params.id } };
}

export default Page;
