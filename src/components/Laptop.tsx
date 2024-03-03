import { useRef } from 'react';
import { Group, Object3DEventMap } from 'three';
import { useAnimations, useGLTF, useScroll } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import gsap from 'gsap';
// gsap.registerPlugin(ScrollTrigger);

export const FLOOR_HEIGHT = 2.3;
export const MB_FLOORS = 3;

export default function Laptop(props: GroupProps) {
  const { nodes, materials } = useGLTF('./models/laptop-silver.glb');
  const ref = useRef<Group<Object3DEventMap> | any>(null);

  // gsap.timeline({
  //   scrollTrigger: {
  //     scrub: 1,
  //     trigger: '#root',
  //     start: 'top 90%',
  //     end: 'bottom 30%',
  //   },
  // });

  // useFrame(() => {
  //   if (!tl.current) return;
  //   tl.current.seek(scroll.offset * tl.current.duration());
  // });

  // useLayoutEffect(() => {
  //   tl.current = gsap.timeline();

  //   if (!ref.current) return;
  // }, []);

  // useEffect(() => {
  //   // actions.Animation?.play();
  //   console.log(Object.keys(actions), actions);
  //   Object.keys(actions).forEach((action) => {
  //     actions[action]?.play();
  //   });
  // }, [actions]);

  return (
    <group ref={ref} {...props} dispose={null} scale={3}>
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

useGLTF.preload('./models/laptop-silver.glb');
