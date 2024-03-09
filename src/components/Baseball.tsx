import { Environment, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { Material, Object3D } from 'three';

export default function Baseball(props: GroupProps) {
  const {
    nodes,
    materials,
  }: {
    nodes: { [name: string]: Object3D & { geometry?: any } };
    materials: { [name: string]: Material };
  } = useGLTF('./models/baseball-inclue.glb');
  return (
    <>
      <Environment preset="forest" />
      <group {...props} dispose={null}>
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
