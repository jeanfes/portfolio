import TextOpacity from '@src/components/animationComponents/textOpacity/Index';
import clsx from 'clsx';
import styles from '@src/pages/components/quote/styles/quote.module.scss';
import { useRef } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useStore } from '@src/store';

function Quote() {
  const [isLoading] = useStore(useShallow((state) => [state.isLoading]));

  const rootRef = useRef();
  const textRef = useRef();

  return (
    <section ref={rootRef} className={clsx(styles.root, 'layout-block-inner')}>
      <h3 ref={textRef} className={clsx(styles.text, 'h3')}>
        {!isLoading && (
          <TextOpacity textRef={textRef.current} trigger={rootRef.current}>
            Al iniciar un proyecto, la clave no es solo elegir herramientas populares, sino seleccionar la arquitectura y tecnología precisas que garanticen escalabilidad, rendimiento y una
            experiencia de usuario impecable. Con mi experiencia, sé exactamente cómo guiar ese proceso hacia el éxito.
          </TextOpacity>
        )}
      </h3>
    </section>
  );
}

export default Quote;
