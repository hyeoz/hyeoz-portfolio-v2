import { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { useProgress } from '@react-three/drei';

// import Scene from './Scene';
const Scene = lazy(() => import('./Scene'));
import './styles/app.css';

/* NOTE 
Suspense : 렌더링 하려는 자식 컴포넌트가 일시정지되면 fallback 화면을 띄워줌
lazy : 처음 렌더링될 때까지 컴포넌트 코드를 지연시킴
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
  const { progress } = useProgress();

  return (
    <div className="loading-wrapper">
      <div className="progress-wrapper">
        <progress id="loading-progress" value={progress} max={100} />
      </div>
      <p className="progress-number">{progress.toFixed()}%</p>
    </div>
  );
}

export default App;
