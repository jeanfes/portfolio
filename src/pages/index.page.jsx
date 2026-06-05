/* eslint-disable react/jsx-props-no-spreading */
import Home from '@src/pages/components/home/Index';
import About from '@src/pages/components/about/Index';
import Quote from '@src/pages/components/quote/Index';
import Projects from '@src/pages/components/projects/Index';
import Clients from '@src/pages/components/clients/Index';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Jean Escobar - Portafolio de Desarrollador Frontend',
  description:
    'Ingeniero de Sistemas y Desarrollador Frontend de Barranquilla, Colombia, dedicado a construir aplicaciones web y móviles responsivas, rápidas e interactivas utilizando React, TypeScript y React Native.',
  keywords: [
    'Jean Escobar',
    'Portafolio',
    'Desarrollador Web',
    'Programador Web',
    'Frontend',
    'Desarrollador Frontend',
    'React Developer',
    'Ingeniero de Sistemas',
    'React Native',
    'TypeScript',
    'JavaScript',
    'Next.js',
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
