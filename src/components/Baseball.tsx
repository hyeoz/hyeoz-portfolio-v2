import { useGLTF } from '@react-three/drei';
import { GroupProps, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
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

  useEffect(() => {
    if (!group) return;
    group.current?.rotateY((1.0 * Math.PI) / 20); // to convert from Deg to Rad.
  }, []);

  useFrame((_, delta) => {
    group.current.rotation.x += 8 * delta;
    group.current.rotation.z += 6 * delta;
  });

  return (
    <>
      <group
        {...props}
        ref={group}
        dispose={null}
        position={[2, -23.5, 0]}
        scale={0.8}
      >
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
