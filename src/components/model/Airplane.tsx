import { useAnimations, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Group, Material, Object3D, Object3DEventMap } from 'three';

import useIsMobile from '../../hooks/useIsMobile';

export default function Airplane(props: GroupProps) {
  const isMobile = useIsMobile();
  const group = useRef<Group<Object3DEventMap>>(null);
  const {
    nodes,
    materials,
    animations,
  }: {
    nodes: { [name: string]: Object3D & { geometry?: any } };
    materials: { [name: string]: Material };
    animations: any;
  } = useGLTF('./models/airplane-keyframe.glb');
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    if (!group) return;
    group.current?.rotateX((1.0 * Math.PI) / 20); // to convert from Deg to Rad.
    group.current?.rotateY(-(1.0 * Math.PI) / 10); // to convert from Deg to Rad.
    actions[names[0]]?.reset().play();
    actions[names[1]]?.reset().play();
  }, []);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={isMobile ? 0.4 : 0.65}
      position={isMobile ? [0, -7, 0] : [-1, -9.8, 0]}
    >
      <group name="Scene">
        <group
          name="Plane"
          position={[0.473, 1.163, -1.147]}
          rotation={[-0.147, -0.034, -0.147]}
          scale={0.788}
        >
          <mesh
            name="Circle"
            castShadow
            receiveShadow
            geometry={nodes.Circle.geometry}
            material={materials.White}
          />
          <mesh
            name="Circle_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle_1.geometry}
            material={materials['Material.004']}
          />
          <mesh
            name="Circle_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle_2.geometry}
            material={materials.Blue}
          />
          <group
            name="Plane035"
            position={[0, 1.09, -0.297]}
            scale={[1, 1, 1.111]}
          >
            <mesh
              name="Plane_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane_1.geometry}
              material={materials.White}
            />
            <mesh
              name="Plane_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane_2.geometry}
              material={materials.Blue}
            />
            <mesh
              name="Plane_3"
              castShadow
              receiveShadow
              geometry={nodes.Plane_3.geometry}
              material={materials['Material.004']}
            />
          </group>
        </group>
        <group
          name="Area"
          position={[-5.771, 7.586, -2.616]}
          rotation={[-Math.PI / 2, 0, 0.36]}
        />
        <group
          name="Circle007"
          position={[0.413, 1.37, 0.246]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.788}
        >
          <mesh
            name="Circle006"
            castShadow
            receiveShadow
            geometry={nodes.Circle006.geometry}
            material={materials.White}
          />
          <mesh
            name="Circle006_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle006_1.geometry}
            material={materials.Blue}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('./models/airplane-keyframe.glb');
