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
    'Ingeniero de Sistemas y Desarrollador Fullstack Ssr de Barranquilla, Colombia, con experiencia en React, Next.js, Node.js y Python/Django, diseñando arquitecturas limpias, escalables y de alto rendimiento.',
  keywords: [
    'Jean Escobar',
    'Portafolio',
    'Ingeniero de Sistemas',
    'Desarrollador Fullstack',
    'Fullstack Ssr',
    'React Developer',
    'Node.js',
    'Django',
    'Python',
    'Next.js',
    'TypeScript',
    'Arquitectura de Software',
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
