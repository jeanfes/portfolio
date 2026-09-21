import { Canvas } from '@react-three/fiber';
import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { useIntersection } from 'react-use';

const FruitNinja = dynamic(() => import('@src/components/dom/prefooter/FruitNinja'), { ssr: false });

function Index() {
  const devicePixelRatio = typeof window !== 'undefined' ? Math.min(1, window.devicePixelRatio) : 1;
  const el = useRef();
  const visible = useIntersection(el, { threshold: 0 })?.isIntersecting ?? true;

  return (
    <Canvas
      ref={el}
      frameloop={visible ? 'always' : 'never'}
      dpr={[devicePixelRatio, 1]}
      gl={{
        antialias: true,
      }}
      flat
      style={{
        position: 'relative',
        display: 'block',
        backgroundColor: 'transparent',
        borderRadius: '1.3888888889vw',
        height: '100%',
        width: '100%',
      }}
    >
      <FruitNinja active={visible} />
    </Canvas>
  );
}

export default Index;
