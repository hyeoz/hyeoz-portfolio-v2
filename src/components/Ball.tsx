import { useScroll } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

export default function Ball(props: any) {
  const scroll = useScroll();
  const fbx = useLoader(FBXLoader, "ball.fbx");
  useFrame(() => {
    fbx.rotation.x = scroll.offset * 30;
    fbx.rotation.y = scroll.offset * 30;
    fbx.rotation.z = scroll.offset * 30;

    fbx.position.x = 1.2;
    fbx.position.y = -3 + scroll.offset * 20;
  });
  return (
    <group {...props}>
      <primitive object={fbx} scale={0.01} />
    </group>
  );
}
