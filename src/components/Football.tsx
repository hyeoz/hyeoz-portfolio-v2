import { Environment, useAnimations, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Group, Material, Object3D, Object3DEventMap } from 'three';

export default function Football(props: GroupProps) {
  const group = useRef<Group<Object3DEventMap>>(null);
  const {
    nodes,
    materials,
    animations,
  }: {
    nodes: { [name: string]: Object3D & { geometry?: any } };
    materials: { [name: string]: Material };
    animations: any;
  } = useGLTF('./models/football-animation.glb');

  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[0]]?.reset().play();
  }, []);

  return (
    <>
      <Environment preset="forest" />
      <group
        {...props}
        ref={group}
        dispose={null}
        position={[0, -25, 0]}
        scale={1.5}
      >
        <group name="Scene">
          <group name="Icosphere">
            <mesh
              name="Icosphere001"
              castShadow
              receiveShadow
              geometry={nodes.Icosphere001.geometry}
              material={materials['White.001']}
            />
            <mesh
              name="Icosphere001_1"
              castShadow
              receiveShadow
              geometry={nodes.Icosphere001_1.geometry}
              material={materials['Black.001']}
            />
          </group>
        </group>
      </group>
    </>
  );
}

useGLTF.preload('./models/football-animation.glb');
