import { Scroll, ScrollControls } from "@react-three/drei";
import Html from "./components/Html";
import Particles from "./components/Particles";
import Airplane from "./components/Airplane";

function Scene() {
  return (
    <ScrollControls pages={5}>
      <Scroll>
        <Particles size={7000} />
        <Airplane />
      </Scroll>
      <Scroll html>
        <Html />
      </Scroll>
    </ScrollControls>
  );
}

export default Scene;
