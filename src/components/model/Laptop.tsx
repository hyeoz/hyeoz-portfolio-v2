import { useEffect, useRef } from 'react';
import { Group, Material, Object3D, Object3DEventMap } from 'three';
import { useAnimations, useGLTF, useScroll } from '@react-three/drei';
import { GroupProps, useFrame } from '@react-three/fiber';

import useIsMobile from '../../hooks/useIsMobile';

export default function Laptop(props: GroupProps) {
  const isMobile = useIsMobile();
  const group = useRef<Group<Object3DEventMap> | any>(null);
  const {
    animations,
    scene,
  }: {
    animations: any;
    scene: any;
  } = useGLTF('./models/laptop-rose.glb');

  const { actions, names } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    if (!group || !actions[names[0]] || !actions[names[1]]) return;
    group.current.rotateX((1.0 * Math.PI) / 8); // to convert from Deg to Rad.
    group.current.rotateY((-1.0 * Math.PI) / 4); // to convert from Deg to Rad.
    // @ts-ignore
    actions[names[0]].play().paused = true;
    // @ts-ignore
    actions[names[1]].play().paused = true;
  }, []);

  useFrame(() => {
    if (!group.current) return;
    if (!actions[names[0]] || !actions[names[1]]) return;
    if (
      // @ts-ignore
      !actions[names[0]].getClip().duration ||
      // @ts-ignore
      !actions[names[1]].getClip().duration
    )
      return;

    const action1 = actions[names[0]];
    const action2 = actions[names[1]];

    // @ts-ignore
    action1.time = (action1.getClip().duration * scroll.offset) / 2;
    // @ts-ignore
    action2.time = (action2.getClip().duration * scroll.offset) / 3;
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={isMobile ? 1.7 : 3}
      position={isMobile ? [-1, -0.5, 0] : [0, -1, 0]}
    >
      <primitive object={scene} />
      {/* <group name="Scene">
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
      </group> */}
    </group>
  );
}

useGLTF.preload('./models/laptop-rose.glb');
