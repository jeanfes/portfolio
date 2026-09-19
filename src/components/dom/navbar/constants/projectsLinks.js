import projects from '@src/constants/projects';

// Se deriva de la fuente única de verdad (constants/projects.js) para que el menú
// nunca quede desincronizado en orden o cantidad al agregar/quitar proyectos.
const projectsLinks = projects.map((project) => ({
  title: project.title,
  href: project.link,
}));

export default projectsLinks;
