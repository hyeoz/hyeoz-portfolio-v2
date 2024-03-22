import { Suspense, lazy, useState } from 'react';
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
  const [isScrollPage, setIsScrollPage] = useState(false);
  return (
    <Suspense fallback={<Loader />}>
      {isScrollPage ? (
        <Canvas id="canvas">
          <Scene />
        </Canvas>
      ) : (
        <Landing setState={setIsScrollPage} />
      )}
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

function Landing({ setState }: { setState: any }) {
  // TODO 사파리 초기 화면 따라한 랜딩페이지
  // TODO 랜딩페이지에서 버튼 클릭 시 스트롤 섹션으로 넘어갈 수 있도록 설정
  return (
    <div>
      <h1>Landing Page</h1>
      <button onClick={() => setState(true)}>set 3D</button>
    </div>
  );
}

export default App;
