import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import clsx from 'clsx';
import styles from '@src/pages/about/components/overview/styles/overview.module.scss';

function Overview() {
  return (
    <section className={clsx(styles.root, 'layout-grid-inner')}>
      <div className={styles.title}>
        <AppearTitle>
          <h3 className="h3">
            El rol de un desarrollador frontend es como el de un <span className="medium">anfitrión ideal</span>: se asegura de que <span className="medium">los visitantes</span> tengan una
            experiencia <span className="medium">fluida</span>, intuitiva y memorable.
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
            ¡Hola! Soy Ingeniero de Sistemas y Desarrollador Frontend graduado de la Universidad Simón Bolívar en Barranquilla, Colombia. Con 3 años de experiencia profesional, me apasiona dar vida a
            ideas digitales robustas, dinámicas y eficientes.
          </h6>
          <h6 className={clsx(styles.paddingTop, 'h6')}>
            Cuando no estoy programando, dedico mi tiempo libre a ver películas de tecnología, disfrutar de una buena lasaña (mi comida favorita) y jugar videojuegos como Wild Rift. Me considero un
            desarrollador proactivo, curioso, adaptable y en constante crecimiento, actualmente mejorando mi nivel de inglés (nivel A2).
          </h6>
          <h6 className={clsx(styles.paddingTop, 'h6')}>¡Estoy emocionado por colaborar y crear grandes soluciones juntos!</h6>
          <h6 className={clsx(styles.paddingTop, 'h6')}>Jean Escobar.</h6>
        </AppearTitle>
      </div>
    </section>
  );
}
export default Overview;
