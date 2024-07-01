import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';

// import Scene from './Scene';
const Scene = lazy(() => import('./Scene'));
import Landing from './components/Landing';
import Loading from './components/Loading';
import useIsMobile from './hooks/useIsMobile';

/* NOTE 
Suspense : 렌더링 하려는 자식 컴포넌트가 일시정지되면 fallback 화면을 띄워줌
lazy : 처음 렌더링될 때까지 컴포넌트 코드를 지연시킴
*/

function App() {
  const [isScrollPage, setIsScrollPage] = useState(false);
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
    <Suspense fallback={<Loading />}>
      {isScrollPage ? (
        <article
          style={{
            height: '100%',
          }}
        >
          <Canvas id="canvas">
            <Scene />
          </Canvas>
          {/* <button
            className="down-button"
            onClick={() =>
              setSection((prev) => {
                if (prev === 3) {
                  return 0;
                } else {
                  return prev + 1;
                }
              })
            }
          >
            <img
              src="/svg/chevron.svg"
              alt="main-chevron-down"
              style={{
                width: 60,
                height: 60,
                rotate: section === 3 ? '90deg' : '-90deg',
              }}
            />
          </button> */}
        </article>
      ) : (
        <Landing setState={setIsScrollPage} />
      )}
    </Suspense>
  );
}

export default App;
