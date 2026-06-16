/* eslint-disable react/jsx-props-no-spreading */
import Hero from '@src/pages/about/components/hero/Hero';
import Overview from '@src/pages/about/components/overview/Overview';
import Experience from '@src/pages/about/components/experience/Experience';
import Services from '@src/pages/about/components/services/Services';
import Process from '@src/pages/about/components/process/Process';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Jean Escobar - Sobre mí',
  description:
    'Conoce más sobre mi trayectoria profesional como Ingeniero de Sistemas y Desarrollador Fullstack, especializado en la entrega de soluciones tecnológicas eficientes, mantenibles y de alto valor de negocio.',
  keywords: [
    'Jean Escobar sobre mí',
    'Acerca de Jean Escobar',
    'Ingeniero de Sistemas Colombia',
    'Desarrollador Fullstack Ssr',
    'Arquitectura de Software',
    'Clean Architecture',
    'Patrones de Diseño',
    'Ingeniería de Software',
  ],
};
function Page() {
  return (
    <>
      <CustomHead {...seo} />

      <Hero />
      <Overview />
      <Experience />
      <Services />
      <Process />
    </>
  );
}

export default Page;
