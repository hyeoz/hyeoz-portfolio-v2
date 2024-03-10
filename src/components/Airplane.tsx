import { Environment, useAnimations, useGLTF } from '@react-three/drei';
import { GroupProps, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Group, Material, Object3D, Object3DEventMap } from 'three';

export default function Airplane(props: GroupProps) {
  const group = useRef<Group<Object3DEventMap>>(null);
  const {
    nodes,
    materials,
    animations,
  }: {
    nodes: { [name: string]: Object3D & { geometry?: any } };
    materials: { [name: string]: Material };
    animations: any;
  } = useGLTF('./models/airplane.glb');
  const { actions, names, mixer } = useAnimations(animations, group);

  useEffect(() => {
    if (!group) return;
    group.current?.rotateX((1.0 * Math.PI) / 8); // to convert from Deg to Rad.
    actions[names[0]]?.reset().play();
  }, []);

  return (
    <>
      <Environment preset="city" />

      <group
        ref={group}
        {...props}
        dispose={null}
        scale={0.6}
        position={[0, -9, 0]}
      >
        <group name="Scene">
          <group
            name="Plane"
            position={[0.473, 1.163, -1.147]}
            rotation={[-0.148, -0.052, -0.03]}
            scale={0.788}
            userData={{ name: 'Plane' }}
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
          </group>
          <group
            name="Circle007"
            position={[0.413, 1.37, 0.246]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.788}
            userData={{ name: 'Circle.007' }}
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
    </>
  );
}

useGLTF.preload('./models/airplane.glb');
