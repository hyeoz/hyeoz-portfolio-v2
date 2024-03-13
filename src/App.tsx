import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import Scene from './Scene';
import './App.css';

function App() {
  return (
    <Canvas
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}

export default App;
