import FruitNinja from '@src/components/dom/prefooter/Index';
import clsx from 'clsx';
import styles from '@src/components/dom/styles/preFooter.module.scss';

function PreFooter() {
  return (
    <section className={clsx(styles.root, 'layout-block-inner')}>
      <div className={styles.textsContainer}>
        <div>
          <h2 className="h1">Cortemos de raíz</h2>
          <h2 className="h1"> tu próximo desafío</h2>
          <h2 className="h1"> juntos!</h2>
        </div>
        <div>
          <h6 className="h6">
            Comienza tu proyecto con un socio tecnológico de confianza hoy.
          </h6>
        </div>
      </div>

      <div className={styles.canvas}>
        <FruitNinja />
      </div>
    </section>
  );
}

export default PreFooter;
