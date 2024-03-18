import { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { useProgress } from '@react-three/drei';

// import Scene from './Scene';
const Scene = lazy(() => import('./Scene'));
import './styles/App.css';

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
  // TODO load 값으로 progress bar 만들기
  const { progress } = useProgress();

  console.log(progress, 'PROGRESS');

  return (
    <div
      style={{
        fontSize: 30,
        color: 'red',
        textAlign: 'center',
      }}
    >
      LOADING...{progress.toFixed()}%
    </div>
  );
}

export default App;
