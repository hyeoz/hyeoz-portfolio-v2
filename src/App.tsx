import { Suspense, lazy, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';

// import Scene from './Scene';
const Scene = lazy(() => import('./Scene'));
import './styles/App.css';
import { useLoad } from './store/load';

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
  const [loadingState, setLoadingState] = useState(0);
  const load = useLoad;

  useEffect(() => {
    const unsubscribe = load.subscribe((state) => {
      console.log(state.state);
    });

    return () => {
      // 구독 해제
      unsubscribe();
    };
  }, []);

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
