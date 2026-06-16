import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import clsx from 'clsx';
import styles from '@src/pages/about/components/overview/styles/overview.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';

function Overview() {
  const isMobile = useIsMobile();
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
        {!isMobile ? (
          <AppearTitle key="desktop-overview">
            <h6 className="h6">
              ¡Hola! Soy Ingeniero de Sistemas y Desarrollador Full Stack graduado de la Universidad Simón Bolívar en Barranquilla, Colombia. Me apasiona dar vida a ideas digitales robustas, dinámicas
              y eficientes.
            </h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>
              Cuando no estoy programando, disfruto de ver películas de tecnología, jugar videojuegos y compartir buenas conversaciones. Me considero un profesional proactivo, con alta capacidad de
              adaptación y aprendizaje continuo, enfocado en el crecimiento constante y en expandir mis competencias técnicas y de comunicación.
            </h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>¡Estoy emocionado por integrarme a nuevos proyectos y aportar valor a tu equipo!</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Jean Escobar.</h6>
          </AppearTitle>
        ) : (
          <AppearTitle key="mobile-overview">
            <h6 className="h6">
              ¡Hola! Soy Ingeniero de Sistemas y Desarrollador Full Stack graduado de la Universidad Simón Bolívar en Barranquilla, Colombia. Me apasiona dar vida a ideas digitales robustas, dinámicas
              y eficientes.
            </h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>
              Cuando no estoy programando, disfruto de películas de tecnología, los videojuegos y compartir buenas conversaciones. Me considero un profesional proactivo, con alta capacidad de
              adaptación, aprendizaje continuo y enfocado en expandir mis competencias técnicas y de comunicación.
            </h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>¡Estoy emocionado por integrarme a nuevos proyectos y aportar valor a tu equipo!</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Jean Escobar.</h6>
          </AppearTitle>
        )}
      </div>
    </section>
  );
}
export default Overview;
