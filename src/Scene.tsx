import { Scroll, ScrollControls } from '@react-three/drei';

import Html from './components/Html';
import Particles from './components/Particles';
import Laptop from './components/Laptop';
import Ball from './components/Ball';

function Scene() {
  return (
    <ScrollControls pages={5}>
      <Scroll>
        <Laptop />
        <Ball />
        <Particles size={7000} />
      </Scroll>
      <Scroll html>
        <Html />
      </Scroll>
    </ScrollControls>
  );
}

export default Scene;
