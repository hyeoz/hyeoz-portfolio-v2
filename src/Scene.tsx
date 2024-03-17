import { Environment, Scroll, ScrollControls } from '@react-three/drei';
import { useState, lazy, useEffect, useTransition } from 'react';

const ScrollManager = lazy(() => import('./components/ScrollManager'));
const Html = lazy(() => import('./components/Html'));
const Laptop = lazy(() => import('./components/Laptop'));
const Airplane = lazy(() => import('./components/Airplane'));
const Baseball = lazy(() => import('./components/Baseball'));
const Football = lazy(() => import('./components/Football'));
// import Particles from './components/Particles';

function Scene() {
  const [section, setSection] = useState(0);

  return (
    <ScrollControls pages={4} damping={0.1}>
      <ScrollManager section={section} setSection={setSection} />
      <Scroll>
        <Environment preset="city" />
        <Laptop />
        <Airplane />
        <Baseball />
        <Football />
        {/* <Particles size={7000} /> */}
      </Scroll>
      <Scroll html>
        <Html />
      </Scroll>
    </ScrollControls>
  );
}

export default Scene;
