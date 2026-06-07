import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import clsx from 'clsx';
import styles from '@src/pages/about/components/overview/styles/overview.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';

function Overview() {
  const isMobile = useIsMobile();

  return (
    <section className={clsx(styles.root, 'layout-grid-inner')}>
      <div className={styles.title}>
        {isMobile ? (
          <AppearTitle key="mobile-queto">
            <h3 className="h3">El rol de un desarrollador</h3>
            <h3 className="h3">
              frontend es como el de un <span className="medium">anfitrión</span>
            </h3>
            <h3 className="h3">
              ideal: se asegura de que <span className="medium">los visitantes</span> tengan
            </h3>
            <h3 className="h3">
              una experiencia <span className="medium">fluida</span> y memorable.
            </h3>
          </AppearTitle>
        ) : (
          <AppearTitle key="desktop-queto">
            <h3 className="h3">El rol de un desarrollador frontend es como el de un</h3>
            <h3 className="h3">
              anfitrión ideal: se asegura de que <span className="medium">los visitantes</span> tengan
            </h3>
            <h3 className="h3">
              una experiencia <span className="medium">fluida</span>, intuitiva y memorable.
            </h3>
          </AppearTitle>
        )}
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
              ¡Hola! Soy Ingeniero de Sistemas y Desarrollador Frontend graduado de la Universidad Simón Bolívar en Barranquilla, Colombia. Me apasiona dar vida
              a ideas digitales robustas, dinámicas y eficientes.
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
