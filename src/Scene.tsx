import { lazy, Dispatch, SetStateAction } from 'react';
import { Environment, Html, Scroll, ScrollControls } from '@react-three/drei';

const ScrollManager = lazy(() => import('./components/ScrollManager'));
const HtmlContent = lazy(() => import('./components/HtmlContent'));
const Laptop = lazy(() => import('./components/model/Laptop'));
const Airplane = lazy(() => import('./components/model/Airplane'));
const Baseball = lazy(() => import('./components/model/Baseball'));
const Football = lazy(() => import('./components/model/Football'));
// import Particles from './components/Particles';

function Scene() {
  return (
    <>
      <ScrollControls pages={1} damping={0.1}>
        {/* <ScrollManager section={section} setSection={setSection} /> */}
        <Scroll>
          <Environment preset="city" />
          <Laptop />
          {/* <Airplane />
          <Football />
          <Baseball /> */}
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
