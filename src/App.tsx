import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import Scene from './Scene';
import './styles/App.css';

function App() {
  return (
    <Canvas id="canvas">
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}

function Loader() {
  return <div>LOADING...</div>;
}

export default App;
