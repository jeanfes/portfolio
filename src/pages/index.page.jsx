/* eslint-disable react/jsx-props-no-spreading */
import Home from '@src/pages/components/home/Index';
import About from '@src/pages/components/about/Index';
import Quote from '@src/pages/components/quote/Index';
import Projects from '@src/pages/components/projects/Index';
import Clients from '@src/pages/components/clients/Index';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Jean Escobar - Ingeniero de Sistemas | Desarrollador Fullstack Ssr',
  description:
    'Ingeniero de Sistemas y Desarrollador Fullstack especializado en el diseño de arquitecturas escalables, APIs de alto rendimiento y experiencias digitales de alta fidelidad, aplicando principios de código limpio y optimización continua.',
  keywords: [
    'Jean Escobar',
    'Portafolio',
    'Ingeniero de Sistemas',
    'Desarrollador Fullstack',
    'Fullstack Ssr',
    'Ingeniero de Software',
    'Arquitectura de Software',
    'Desarrollo Backend',
    'Desarrollo Frontend',
    'APIs Escalables',
    'Optimización de Rendimiento',
    'Barranquilla',
    'Colombia',
  ],
};

function Page() {
  return (
    <>
      <CustomHead {...seo} />
      <Home />
      <About />
      <Clients />
      <Quote />
      <Projects />
    </>
  );
}

export default Page;
