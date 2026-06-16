import FruitNinja from '@src/components/dom/prefooter/Index';
import clsx from 'clsx';
import styles from '@src/components/dom/styles/preFooter.module.scss';

function PreFooter() {
  return (
    <section className={clsx(styles.root, 'layout-block-inner')}>
      <div className={styles.textsContainer}>
        <div>
          <h2 className="h1">¿Listo para</h2>
          <h2 className="h1"> potenciar tu equipo</h2>
          <h2 className="h1"> técnico?</h2>
        </div>
        <div>
          <h6 className="h6">Desarrollador e Ingeniero de Sistemas enfocado en crear experiencias digitales excepcionales.</h6>
        </div>
      </div>

      <div className={styles.canvas}>
        <FruitNinja />
      </div>
    </section>
  );
}

export default PreFooter;
