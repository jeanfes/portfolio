/* eslint-disable react/jsx-props-no-spreading */
import Hero from '@src/pages/about/components/hero/Hero';
import Overview from '@src/pages/about/components/overview/Overview';
import Experience from '@src/pages/about/components/experience/Experience';
import Services from '@src/pages/about/components/services/Services';
import Process from '@src/pages/about/components/process/Process';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Jean Escobar - Sobre mí',
  description: 'Conoce más sobre mi trayectoria como Ingeniero de Sistemas, desarrollador frontend, valores y compromiso profesional.',
  keywords: [
    'Jean Escobar sobre mí',
    'Acerca de Jean Escobar',
    'Trayectoria de desarrollador frontend',
    'Ingeniero de Sistemas Colombia',
    'Especialista en React',
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
