import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import clsx from 'clsx';
import styles from '@src/pages/about/components/overview/styles/overview.module.scss';

function Overview() {
  return (
    <section className={clsx(styles.root, 'layout-grid-inner')}>
      <div className={styles.title}>
        <AppearTitle>
          <h3 className="h3">
            La ingeniería de sistemas va más allá del código: se trata de estructurar ecosistemas lógicos, escalables y eficientes, conectando un backend robusto con interfaces premium para asegurar
            rendimiento, seguridad y una experiencia fluida.
          </h3>
        </AppearTitle>
      </div>
      <div className={clsx(styles.text, 'p-l', styles.myStory)}>
        <AppearTitle>
          <span>Unas palabras</span>
        </AppearTitle>
      </div>
      <div className={styles.desc}>
        <AppearTitle>
          <h6 className="h6">
            ¡Hola! Soy Ingeniero de Sistemas y Desarrollador Fullstack Ssr graduado de la Universidad Simón Bolívar. Con más de 3 años de experiencia profesional, me especializo en diseñar y construir
            arquitecturas limpias, robustas y altamente escalables que conectan de manera eficiente el backend y el frontend.
          </h6>
          <h6 className={clsx(styles.paddingTop, 'h6')}>
            Cuando no estoy diseñando sistemas o escribiendo código, disfruto viendo cine de tecnología, saboreando una buena lasaña y jugando videojuegos competitivos como Wild Rift. Me considero un
            profesional proactivo, analítico y en constante evolución, enfocado en optimizar procesos y actualmente perfeccionando mi nivel de inglés (B1).
          </h6>
          <h6 className={clsx(styles.paddingTop, 'h6')}>¡Estoy emocionado por colaborar y diseñar soluciones robustas juntos!</h6>
          <h6 className={clsx(styles.paddingTop, 'h6')}>Jean Escobar.</h6>
        </AppearTitle>
      </div>
    </section>
  );
}
export default Overview;
