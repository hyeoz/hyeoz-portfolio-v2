import { useScroll } from '@react-three/drei';
import { GroupProps, useFrame, useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

export default function Ball(props: GroupProps) {
  const scroll = useScroll();
  const fbx = useLoader(FBXLoader, 'baseball_edit_light.fbx');
  useFrame(() => {
    fbx.rotation.x = scroll.offset * 30;
    fbx.rotation.y = scroll.offset * 30;
    fbx.rotation.z = scroll.offset * 30;

    fbx.position.x = 1.2;
    fbx.position.y = -3 + scroll.offset * 60;
  });
  return (
    <group {...props}>
      <primitive object={fbx} scale={0.01} />
    </group>
  );
}
