import { Environment, useAnimations, useGLTF } from '@react-three/drei';
import { GroupProps, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Group, Material, Object3D, Object3DEventMap } from 'three';
import * as THREE from 'three';

export default function Football(props: GroupProps) {
  const group = useRef<Group<Object3DEventMap>>(null);
  const ball = useRef<Group<Object3DEventMap>>(null);
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
        morphTargetInfluences?: any;
      };
    };
    materials: { [name: string]: Material };
    animations: any;
  } = useGLTF('./models/goal_post.glb');

  const { actions, names, mixer } = useAnimations(animations, group);
  // const shapeKeys = Object.keys(nodes.Net?.morphTargetDictionary);
  console.log(names, '???', nodes.평면.morphTargetDictionary);

  const _newMorph: { [key: string]: number } = {
    ...nodes.평면.morphTargetDictionary,
  };
  delete _newMorph.옷감;

  useEffect(() => {
    group.current?.rotateY(-(1.0 * Math.PI) / 10); // to convert from Deg to Rad.
    actions[names[0]]?.play();
    console.log(_newMorph, nodes.평면.morphTargetInfluences, '???');
    // Shape keys 애니메이션 재생
  }, []);

  return (
    <>
      <Environment preset="forest" />
      <group
        {...props}
        ref={group}
        dispose={null}
        position={[1.5, -25, 0]}
        scale={1.2}
      >
        <group name="Scene">
          <group
            name="Icosphere"
            position={[-0.758, 0.527, -0.707]}
            scale={0.568}
            ref={ball}
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
            name="평면"
            castShadow
            receiveShadow
            geometry={nodes.평면.geometry}
            material={nodes.평면.material}
            morphTargetDictionary={_newMorph}
            morphTargetInfluences={nodes.평면.morphTargetInfluences}
            scale={[1.034, 1.007, 1.047]}
          />
        </group>
      </group>
    </>
  );
}

useGLTF.preload('./models/goal_post.glb');
