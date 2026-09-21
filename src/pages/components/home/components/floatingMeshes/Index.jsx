import { Environment, PerspectiveCamera, View } from '@react-three/drei';

import FloatRigidBody from '@src/pages/components/home/components/floatingMeshes/FloatRigidBody';
import { Physics } from '@react-three/rapier';
import useIsMobile from '@src/hooks/useIsMobile';
import { useRef } from 'react';
import { useIntersection } from 'react-use';

export default function Index() {
  const isMobile = useIsMobile();
  const el = useRef();
  const visible = useIntersection(el, { threshold: 0 })?.isIntersecting ?? true;

  return (
    <View
      ref={el}
      style={{
        position: 'relative',
        display: 'block',
        backgroundColor: 'transparent',
        borderRadius: '1.3888888889vw',
        height: '100%',
        width: '100%',
      }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={20} />
      <Physics interpolate timeStep={1 / 60} gravity={[0, 0, 0]} paused={!visible}>
        <FloatRigidBody transparentCount={isMobile ? 3 : 5} totalCount={isMobile ? 12 : 18} />
      </Physics>
      <Environment files="/other/studio_small_09_1k.hdr" blur={1} />
    </View>
  );
}
