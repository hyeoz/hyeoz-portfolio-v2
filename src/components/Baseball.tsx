import { Environment, useGLTF } from '@react-three/drei';
import { GroupProps, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Material, Object3D, Object3DEventMap } from 'three';

export default function Baseball(props: GroupProps) {
  const group = useRef<Group<Object3DEventMap> | any>(null);
  const {
    nodes,
    materials,
  }: {
    nodes: { [name: string]: Object3D & { geometry?: any } };
    materials: { [name: string]: Material };
  } = useGLTF('./models/baseball-inclue.glb');

  useFrame((_, delta) => {
    group.current.rotation.x += 8 * delta;
  });

  return (
    <>
      <Environment preset="forest" />
      <group {...props} ref={group} dispose={null} position={[0, -15, 0]}>
        <group
          position={[-2.299, 0.047, 0.88]}
          rotation={[-0.14, 0.201, 0.052]}
          scale={0.076}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve_1.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve_2.geometry}
            material={materials.Material}
          />
        </group>
      </group>
    </>
  );
}

useGLTF.preload('/baseball-inclue.glb');
