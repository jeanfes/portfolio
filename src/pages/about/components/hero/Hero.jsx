import { useRef } from 'react';

import clsx from 'clsx';
import styles from '@src/pages/about/components/hero/styles/hero.module.scss';

function Hero() {
  const rootRef = useRef();

  return (
    <section ref={rootRef} className={clsx(styles.root, 'layout-block-inner')}>
      <header className={styles.titleContainer}>
        <h2 className={clsx(styles.title, 'h2')}>Diseñando arquitecturas robustas y experiencias digitales de alta fidelidad de extremo a extremo.</h2>
      </header>
    </section>
  );
}

export default Hero;
