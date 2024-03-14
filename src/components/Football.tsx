import { Environment, useAnimations, useGLTF } from '@react-three/drei';
import { GroupProps, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Group, Material, Object3D, Object3DEventMap } from 'three';
import * as THREE from 'three';

export default function Football(props: GroupProps) {
  const group = useRef<Group<Object3DEventMap>>(null);
  const {
    nodes,
    materials,
    animations,
  }: {
    nodes: {
      [name: string]: Object3D & {
        geometry?: any;
        material?: any;
        morphTargetDictionary?: any;
      };
    };
    materials: { [name: string]: Material };
    animations: any;
  } = useGLTF('./models/football-post.glb');

  const { actions, names, mixer } = useAnimations(animations, group);
  // const shapeKeys = Object.keys(nodes.Net?.morphTargetDictionary);
  console.log(names, '???', mixer);

  useEffect(() => {
    names.map((name) => {
      actions[name]?.reset().play();
    });
    group.current?.rotateY(-(1.0 * Math.PI) / 10); // to convert from Deg to Rad.
    // Shape keys 애니메이션 재생
  }, []);

  return (
    <>
      <Environment preset="forest" />
      <group
        {...props}
        ref={group}
        dispose={null}
        position={[1.5, -26, 0]}
        scale={1.2}
      >
        <group name="Scene">
          <group
            name="Icosphere"
            position={[-0.758, 0.527, -0.707]}
            scale={0.568}
          >
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
          <mesh
            name="Plane"
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={nodes.Plane.material}
            position={[0, 0.097, 0]}
            rotation={[0.004, 0, 0]}
            scale={[1, 1, 0.636]}
          />
          <mesh
            name="Net"
            castShadow
            receiveShadow
            geometry={nodes.Net.geometry}
            material={nodes.Net.material}
            rotation={[-1.567, 0, 0]}
          />
        </group>
      </group>
    </>
  );
}

useGLTF.preload('./models/football-post.glb');
