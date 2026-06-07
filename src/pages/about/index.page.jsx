/* eslint-disable react/jsx-props-no-spreading */
import Hero from '@src/pages/about/components/hero/Hero';
import Overview from '@src/pages/about/components/overview/Overview';
import Experience from '@src/pages/about/components/experience/Experience';
import Services from '@src/pages/about/components/services/Services';
import Process from '@src/pages/about/components/process/Process';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Jean Escobar - Sobre mí',
  description: 'Conoce más sobre mi trayectoria como Ingeniero de Sistemas y Desarrollador Fullstack, mi experiencia en arquitectura de software y mi compromiso profesional.',
  keywords: [
    'Jean Escobar sobre mí',
    'Acerca de Jean Escobar',
    'Ingeniero de Sistemas Colombia',
    'Desarrollador Fullstack Ssr',
    'Arquitectura de Software',
    'Next.js y Python Django',
    'Desarrollo de Software profesional',
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
