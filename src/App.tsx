import { Suspense, lazy, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useProgress } from '@react-three/drei';

// import Scene from './Scene';
const Scene = lazy(() => import('./Scene'));
import './styles/app.css';
import Landing from './components/Landing';
import Loading from './components/Loading';

/* NOTE 
Suspense : 렌더링 하려는 자식 컴포넌트가 일시정지되면 fallback 화면을 띄워줌
lazy : 처음 렌더링될 때까지 컴포넌트 코드를 지연시킴
*/

function App() {
  const [isScrollPage, setIsScrollPage] = useState(false);
  return (
    <Suspense fallback={<Loading />}>
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

export default App;
