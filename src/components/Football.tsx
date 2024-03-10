import { Environment, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { Material, Object3D } from 'three';

export default function Football(props: GroupProps) {
  const {
    nodes,
    materials,
  }: {
    nodes: { [name: string]: Object3D & { geometry?: any } };
    materials: { [name: string]: Material };
  } = useGLTF('./models/football.glb');
  return (
    <>
      <Environment preset="forest" />
      <group {...props} dispose={null} position={[0, -23, 0]} scale={2}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001.geometry}
          material={materials['White.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_1.geometry}
          material={materials['Black.001']}
        />
      </group>
    </>
  );
}

useGLTF.preload('./models/football.glb');
