<<<<<<< HEAD
<<<<<<< HEAD
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import Html from "./components/Html";
import { Suspense } from "react";
import Particles from "./components/Particles";
import Laptop from "./components/Laptop";
import Ball from "./components/Ball";
=======
import { Scroll, ScrollControls } from "@react-three/drei";
import Html from "./components/Html";
>>>>>>> 840b172 (add: r3f 기본 세팅)
=======
import { Scroll, ScrollControls } from "@react-three/drei";
import Html from "./components/Html";
=======
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import Html from "./components/Html";
import { Suspense } from "react";
import Particles from "./components/Particles";
import Laptop from "./components/Laptop";
import Ball from "./components/Ball";
>>>>>>> c6989d8 (chore: change boilerplate)
>>>>>>> 6ca9d52 (chore: change boilerplate)

function Scene() {
  return (
    <ScrollControls pages={5}>
<<<<<<< HEAD
<<<<<<< HEAD
      <Scroll>
        <Laptop />
        {/* <Ball /> */}
        <Particles size={7000} />
      </Scroll>
=======
      <Scroll></Scroll>
>>>>>>> 840b172 (add: r3f 기본 세팅)
=======
      <Scroll></Scroll>
=======
      <Scroll>
        <Laptop />
        {/* <Ball /> */}
        <Particles size={7000} />
      </Scroll>
>>>>>>> c6989d8 (chore: change boilerplate)
>>>>>>> 6ca9d52 (chore: change boilerplate)
      <Scroll html>
        <Html />
      </Scroll>
    </ScrollControls>
  );
}

export default Scene;
