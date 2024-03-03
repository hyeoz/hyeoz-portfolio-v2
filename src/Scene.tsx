import { Scroll, ScrollControls } from '@react-three/drei';
import { useState } from 'react';

import Html from './components/Html';
// import Particles from './components/Particles';
import Laptop from './components/Laptop';
// import Ball from './components/Ball';
import ScrollManagre from './components/ScrollManager';

function Scene() {
  const [section, setSection] = useState(0);
  return (
    <ScrollControls pages={4}>
      <ScrollManagre section={section} setSection={setSection} />
      <Scroll>
        <Laptop />
        {/* <Ball /> */}
        {/* <Particles size={7000} /> */}
      </Scroll>
      <Scroll html>
        <Html />
      </Scroll>
    </ScrollControls>
  );
}

export default Scene;
