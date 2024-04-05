import { useEffect, useRef } from 'react';
import { Group, Material, Object3D, Object3DEventMap } from 'three';
import { useAnimations, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';

import useIsMobile from '../hooks/useIsMobile';

export default function Laptop(props: GroupProps) {
  const isMobile = useIsMobile();
  const group = useRef<Group<Object3DEventMap> | any>(null);
  const {
    nodes,
    materials,
    animations,
  }: {
    nodes: { [name: string]: Object3D & { geometry?: any } };
    materials: { [name: string]: Material };
    animations: any;
  } = useGLTF('./models/laptop-rose.glb');

  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    if (!group) return;
    group.current?.rotateX((1.0 * Math.PI) / 8); // to convert from Deg to Rad.
    actions[names[0]]?.reset().play();
    actions[names[1]]?.reset().play();
  }, []);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={isMobile ? 2 : 3}
      position={isMobile ? [0.5, -1, 0] : [0, -1, 0]}
    >
      <group name="Scene">
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.laptop}
          rotation={[0, 1.392, 0]}
        >
          <mesh
            name="Plane001"
            castShadow
            receiveShadow
            geometry={nodes.Plane001.geometry}
            material={materials.laptop}
            position={[0, 0.093, -0.309]}
          >
            <mesh
              name="Plane003"
              castShadow
              receiveShadow
              geometry={nodes.Plane003.geometry}
              material={materials['Material.003']}
            />
          </mesh>
          <group name="Plane002" position={[0, 0.068, -0.09]} scale={0.972}>
            <mesh
              name="Plane002_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane002_1.geometry}
              material={materials['Material.005']}
            />
            <mesh
              name="Plane002_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane002_2.geometry}
              material={materials['Material.006']}
            />
          </group>
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload('./models/laptop-rose.glb');
