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
            <h6 className="h6">¡Hola! Soy Ingeniero de Sistemas y Desarrollador Frontend graduado de la</h6>
            <h6 className="h6">Universidad Simón Bolívar en Barranquilla, Colombia. Me apasiona dar vida a</h6>
            <h6 className="h6">ideas digitales robustas, dinámicas y eficientes.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Cuando no estoy programando, dedico mi tiempo libre a ver películas de tecnología,</h6>
            <h6 className="h6">disfrutar de una buena lasaña (mi comida favorita) y jugar videojuegos como Wild Rift.</h6>
            <h6 className="h6">Me considero un desarrollador proactivo, curioso, adaptable y en constante crecimiento,</h6>
            <h6 className="h6">actualmente mejorando mi nivel de inglés (nivel A2).</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>¡Estoy emocionado por colaborar y crear grandes soluciones juntos!</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Jean Escobar.</h6>
          </AppearTitle>
        ) : (
          <AppearTitle key="mobile-overview">
            <h6 className="h6">
              ¡Hola! Soy Ingeniero de Sistemas y Desarrollador Frontend graduado de la Universidad Simón Bolívar en Barranquilla, Colombia. Me apasiona dar vida a ideas digitales robustas, dinámicas y
              eficientes.
            </h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>
              Cuando no estoy programando, dedico mi tiempo libre a ver películas de tecnología, disfrutar de una buena lasaña (mi comida favorita) y jugar videojuegos como Wild Rift. Me considero un
              desarrollador proactivo, curioso, adaptable y en constante crecimiento, actualmente mejorando mi nivel de inglés (nivel A2).
            </h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>¡Estoy emocionado por colaborar y crear grandes soluciones juntos!</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Jean Escobar.</h6>
          </AppearTitle>
        )}
      </div>
    </section>
  );
}
export default Overview;
