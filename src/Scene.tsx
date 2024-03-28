import { useState, lazy, useRef } from 'react';
import { Environment, Html, Scroll, ScrollControls } from '@react-three/drei';

const ScrollManager = lazy(() => import('./components/ScrollManager'));
const HtmlContent = lazy(() => import('./components/HtmlContent'));
const Laptop = lazy(() => import('./components/Laptop'));
const Airplane = lazy(() => import('./components/Airplane'));
const Baseball = lazy(() => import('./components/Baseball'));
const Football = lazy(() => import('./components/Football'));
// import Particles from './components/Particles';

function Scene() {
  const [section, setSection] = useState(0);

  return (
    <>
      <ScrollControls pages={4} damping={0.1}>
        <ScrollManager section={section} setSection={setSection} />
        <Scroll>
          <Environment preset="city" />
          <Laptop />
          <Airplane />
          <Football />
          <Baseball />
          {/* <Particles size={7000} /> */}
        </Scroll>
      </ScrollControls>
      <Html className="html-component-wrapper">
        <HtmlContent />
      </Html>
    </>
  );
}

export default Scene;
