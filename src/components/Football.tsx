import { useAnimations, useGLTF } from '@react-three/drei';
import { GroupProps, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Group, Material, Object3D, Object3DEventMap } from 'three';

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

  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    group.current?.rotateY(-(1.0 * Math.PI) / 10); // to convert from Deg to Rad.
    actions[names[0]]?.play(); // Shape keys 애니메이션 재생
  }, []);

  // 공 회전 애니메이션은 코드로 구현
  useFrame((_, delta) => {
    if (!ball.current) return;
    ball.current.rotation.x -= 8 * delta;
  });

  return (
    <>
      <group
        {...props}
        ref={group}
        dispose={null}
        position={[1.5, -17, 0]}
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
            name="Net"
            castShadow
            receiveShadow
            geometry={nodes.Net.geometry}
            material={nodes.Net.material}
            morphTargetDictionary={nodes.Net.morphTargetDictionary}
            morphTargetInfluences={nodes.Net.morphTargetInfluences}
            scale={[1.034, 1.007, 1.047]}
          />
        </group>
      </group>
    </>
  );
}

useGLTF.preload('./models/goal_post.glb');
