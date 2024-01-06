import { Scroll, ScrollControls } from "@react-three/drei";
import Html from "./components/Html";
import Particles from "./components/Particles";

function Scene() {
  return (
    <ScrollControls pages={5}>
      <Scroll>
        <Particles size={7000} />
      </Scroll>
      <Scroll html>
        <Html />
      </Scroll>
    </ScrollControls>
  );
}

export default Scene;
