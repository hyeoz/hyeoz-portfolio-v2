import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Canvas, useThree } from '@react-three/fiber';

// import Scene from './Scene';
const Scene = lazy(() => import('./Scene'));
import Landing from './components/Landing';
import Loading from './components/common/Loading';
import useIsMobile from './hooks/useIsMobile';
import { Shakerrr } from './components/works/Shakerrr';
import { Dokdo } from './components/works/Dokdo';
import { Wevent } from './components/works/Wevent';
import { Kovo } from './components/works/Kovo';
import { MatchDiary } from './components/works/MatchDiary';

/* NOTE 
Suspense : 렌더링 하려는 자식 컴포넌트가 일시정지되면 fallback 화면을 띄워줌
lazy : 처음 렌더링될 때까지 컴포넌트 코드를 지연시킴
*/

function App() {
  const isMobile = useIsMobile();

  // NOTE 모바일에서 스크롤을 막습니다. 개발자도구를 통해 스크롤 하는 액션은 제외됩니다.
  const preventScrollEvent = (e: TouchEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (isMobile) {
      document.addEventListener('touchmove', preventScrollEvent, {
        passive: false,
      });
    }

    return () => {
      isMobile && document.removeEventListener('touchmove', preventScrollEvent);
    };
  }, [isMobile]);

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
          height: '100vh',
          zIndex: -9,
          position: 'absolute',
        }}
      />
      <Canvas
        id="canvas"
        frameloop="demand"
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
