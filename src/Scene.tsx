import { Scroll, ScrollControls } from "@react-three/drei";
import Html from "./components/Html";

function Scene() {
  return (
    <ScrollControls pages={5}>
      <Scroll></Scroll>
      <Scroll html>
        <Html />
      </Scroll>
    </ScrollControls>
  );
}

export default Scene;
