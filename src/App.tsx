import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import Scene from './Scene';
import './styles/App.css';

/* TODO 
Suspense 사용 방법 다시 확인
Lazy Loading 사용
*/

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Canvas id="canvas">
        <Scene />
      </Canvas>
    </Suspense>
  );
}

function Loader() {
  return (
    <div
      style={{
        fontSize: 30,
        color: 'red',
        textAlign: 'center',
      }}
    >
      LOADING...
    </div>
  );
}

export default App;
