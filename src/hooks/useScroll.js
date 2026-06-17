import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useShallow } from 'zustand/react/shallow';
import { useStore } from '@src/store';
import { useRef } from 'react';

function useScroll(callback) {
  const [lenis] = useStore(useShallow((state) => [state.lenis]));
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useIsomorphicLayoutEffect(() => {
    if (!lenis) return undefined;
    const handler = (e) => callbackRef.current(e);
    lenis.on('scroll', handler);
    lenis.emit();

    return () => {
      lenis.off('scroll', handler);
    };
  }, [lenis]);
}

export default useScroll;
