import { useAnimations, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { useRef } from 'react';
import { Material, Object3D } from 'three';

export default function Airplane(props: GroupProps) {
  const group = useRef(null);
  const {
    nodes,
    materials,
    animations,
  }: {
    nodes: { [name: string]: Object3D & { geometry?: any } };
    materials: { [name: string]: Material };
    animations: any;
  } = useGLTF('./models/airplane-rec.glb');
  const { actions } = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Plane"
          position={[0.473, 6.593, -19.105]}
          rotation={[-0.264, 0, 0]}
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
          <group name="Circle001">
            <mesh
              name="Circle001_1"
              castShadow
              receiveShadow
              geometry={nodes.Circle001_1.geometry}
              material={materials.Blue}
            />
            <mesh
              name="Circle001_2"
              castShadow
              receiveShadow
              geometry={nodes.Circle001_2.geometry}
              material={materials.White}
            />
          </group>
          <group name="Circle002">
            <mesh
              name="Circle002_1"
              castShadow
              receiveShadow
              geometry={nodes.Circle002_1.geometry}
              material={materials.Blue}
            />
            <mesh
              name="Circle002_2"
              castShadow
              receiveShadow
              geometry={nodes.Circle002_2.geometry}
              material={materials.Blue}
            />
          </group>
          <mesh
            name="Circle003"
            castShadow
            receiveShadow
            geometry={nodes.Circle003.geometry}
            material={materials.Blue}
          />
          <group name="Circle004" position={[1.315, -1.315, 0.09]}>
            <mesh
              name="Circle004_1"
              castShadow
              receiveShadow
              geometry={nodes.Circle004_1.geometry}
              material={materials['Material.004']}
            />
            <mesh
              name="Circle004_2"
              castShadow
              receiveShadow
              geometry={nodes.Circle004_2.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Circle005"
            position={[0.002, 0.088, -5.815]}
            scale={0.482}
          >
            <mesh
              name="Circle004_1"
              castShadow
              receiveShadow
              geometry={nodes.Circle004_1.geometry}
              material={materials['Material.004']}
            />
            <mesh
              name="Circle004_2"
              castShadow
              receiveShadow
              geometry={nodes.Circle004_2.geometry}
              material={materials.White}
            />
          </group>
          <mesh
            name="Circle006"
            castShadow
            receiveShadow
            geometry={nodes.Circle006.geometry}
            material={materials.White}
          />
          <mesh
            name="Circle007"
            castShadow
            receiveShadow
            geometry={nodes.Circle007.geometry}
            material={materials.White}
            position={[0, 0, 1.788]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group
              name="Plane001"
              rotation={[-Math.PI / 2, 0, 1.018]}
              scale={1.246}
            >
              <mesh
                name="Plane001_1"
                castShadow
                receiveShadow
                geometry={nodes.Plane001_1.geometry}
                material={materials.White}
              />
              <mesh
                name="Plane001_2"
                castShadow
                receiveShadow
                geometry={nodes.Plane001_2.geometry}
                material={materials.Blue}
              />
            </group>
            <group
              name="Plane002"
              rotation={[-Math.PI / 2, 0, -1.077]}
              scale={1.246}
            >
              <mesh
                name="Plane001_1"
                castShadow
                receiveShadow
                geometry={nodes.Plane001_1.geometry}
                material={materials.White}
              />
              <mesh
                name="Plane001_2"
                castShadow
                receiveShadow
                geometry={nodes.Plane001_2.geometry}
                material={materials.Blue}
              />
            </group>
            <group
              name="Plane003"
              rotation={[-Math.PI / 2, 0, 3.112]}
              scale={1.246}
            >
              <mesh
                name="Plane001_1"
                castShadow
                receiveShadow
                geometry={nodes.Plane001_1.geometry}
                material={materials.White}
              />
              <mesh
                name="Plane001_2"
                castShadow
                receiveShadow
                geometry={nodes.Plane001_2.geometry}
                material={materials.Blue}
              />
            </group>
          </mesh>
          <mesh
            name="Circle008"
            castShadow
            receiveShadow
            geometry={nodes.Circle008.geometry}
            material={materials.White}
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
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/airplane-rec.glb');
