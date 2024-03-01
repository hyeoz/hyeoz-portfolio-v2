import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import Scene from './Scene';
// import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <ambientLight />
      {/* <OrbitControls /> */}
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}

export default App;
