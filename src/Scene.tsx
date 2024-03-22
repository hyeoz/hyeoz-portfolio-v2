import { useState, lazy, useRef } from 'react';
import { Environment, Html, Scroll, ScrollControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Camera, Group, Object3DEventMap, Vector3 } from 'three';

const ScrollManager = lazy(() => import('./components/ScrollManager'));
const HtmlContent = lazy(() => import('./components/HtmlContent'));
const Laptop = lazy(() => import('./components/Laptop'));
const Airplane = lazy(() => import('./components/Airplane'));
const Baseball = lazy(() => import('./components/Baseball'));
const Football = lazy(() => import('./components/Football'));
// import Particles from './components/Particles';

function Scene() {
  const [section, setSection] = useState(0);
  const modelScrollRef = useRef<Group<Object3DEventMap> & HTMLDivElement>(null);

  const moveCamera = (
    camera: Camera & {
      manual?: boolean | undefined;
    },
    targetPosition: Vector3
  ) => {
    camera.position.lerp(targetPosition, 0.1);
  };
  useFrame(({ camera }) => {
    const scrollPosition = new Vector3();
    modelScrollRef.current?.getWorldPosition(scrollPosition);
    // console.log(scrollPosition, '??? POSITION');
    // moveCamera(camera, new Vector3(0, 0, -0.01));
  });

  return (
    <>
      <ScrollControls pages={4} damping={0.1}>
        <ScrollManager section={section} setSection={setSection} />
        <Scroll ref={modelScrollRef}>
          <Environment preset="city" />
          <Laptop />
          <Airplane />
          <Football />
          <Baseball />
          {/* <Particles size={7000} /> */}
        </Scroll>
        {/* <Scroll
        html
        >
      </Scroll> */}
      </ScrollControls>
      <Html>
        <HtmlContent />
      </Html>
    </>
  );
}

export default Scene;
