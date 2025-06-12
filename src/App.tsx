import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';

// import Scene from './Scene';
const Scene = lazy(() => import('./Scene'));
import Landing from './components/Landing';
import Loading from './components/common/Loading';
import { Shakerrr } from './components/works/Shakerrr';
import { Dokdo } from './components/works/Dokdo';
import { Wevent } from './components/works/Wevent';
import { Kovo } from './components/works/Kovo';
import { MatchDiary } from './components/works/MatchDiary';
import { Ohcoach } from './components/works/Ohcoach';
/* NOTE 
Suspense : 렌더링 하려는 자식 컴포넌트가 일시정지되면 fallback 화면을 띄워줌
lazy : 처음 렌더링될 때까지 컴포넌트 코드를 지연시킴
*/

function App() {
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  window.addEventListener('resize', setVh);
  setVh();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="main" element={<Main />} />
        <Route path="shakerrr" element={<Shakerrr isModal={false} />} />
        <Route path="dokdo" element={<Dokdo isModal={false} />} />
        <Route path="wevent" element={<Wevent isModal={false} />} />
        <Route path="kovo" element={<Kovo isModal={false} />} />
        <Route path="match-diary" element={<MatchDiary isModal={false} />} />
        <Route path="ohcoach" element={<Ohcoach isModal={false} />} />
      </Routes>
    </BrowserRouter>
  );
}

function Main() {
  return (
    <Suspense fallback={<Loading />}>
      <div
        style={{
          background: 'linear-gradient(to bottom, #f6ead5,  #c9df8a)',
          width: '100vw',
          // height: '100vh',
          zIndex: -9,
          position: 'absolute',
        }}
        className="h-screen-vh"
      />
      <Canvas
        id="canvas"
        // frameloop="demand"
        style={{
          zIndex: 1,
        }}
      >
        <Scene />
      </Canvas>
    </Suspense>
  );
}

export default App;
