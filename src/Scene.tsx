import { lazy, useState } from 'react';
import { Environment, Html, Scroll, ScrollControls } from '@react-three/drei';

const HtmlContent = lazy(() => import('./components/HtmlContent'));
const Laptop = lazy(() => import('./components/model/Laptop'));
// const ScrollManager = lazy(() => import('./components/ScrollManager'));
// const Airplane = lazy(() => import('./components/model/Airplane'));
// const Baseball = lazy(() => import('./components/model/Baseball'));
// const Football = lazy(() => import('./components/model/Football'));
// import Particles from './components/Particles';

function Scene() {
  const [scrollState, setScrollState] = useState(0);

  return (
    <>
      <ScrollControls pages={1} damping={0.1}>
        <Scroll>
          <Environment preset="city" />
          <Laptop scrollState={scrollState} setScrollState={setScrollState} />
          {/* <Baseball /> */}
          {/* <Airplane /> */}
          {/* <Football /> */}
          {/* <Particles size={7000} /> */}
        </Scroll>
      </ScrollControls>
      <Html className="html-component-wrapper">
        <HtmlContent
          scrollState={scrollState}
          setScrollState={setScrollState}
        />
      </Html>
    </>
  );
}

export default Scene;
