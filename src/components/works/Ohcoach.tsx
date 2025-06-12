import Carousel from '../common/Carousel';

export function Ohcoach({ isModal }: { isModal: boolean }) {
  return (
    <>
      {!isModal && (
        <div className="flex items-center justify-between gap-4 px-12 mt-3 works-page-header">
          <p className="text-[250%] font-bold">OHCOACH</p>
          <button
            className="px-8 py-2 border-2 text-[150%] text-[#2837e6] border-[#2837e6] rounded-lg hover:bg-[#2837e6] hover:text-[#fff] transition-all"
            onClick={() =>
              window.location.replace(window.location.origin + '/main')
            }
          >
            MAIN
          </button>
        </div>
      )}
      <div className={isModal ? 'works-modal-wrapper' : 'works-page-wrapper'}>
        <Carousel
          images={[
            '/works/ohcoach_1.png',
            '/works/ohcoach_2.png',
            '/works/ohcoach_3.png',
            '/works/ohcoach_4.png',
            '/works/ohcoach_5.png',
          ]}
        />
        <div className="flex flex-col justify-between !pl-6 works-content-wrapper hide-scroll-bar">
          <ul className="[&_li]:list-disc">
            <li>
              GPS 기반 웨어러블 EPTS(Electronic Performance and Tracking
              System)인 OHCOACH의 웹서비스 프론트엔드를 개발했습니다.
            </li>
            <li>
              Vue 프로젝트를 React로 이전하는 작업을 리딩하고 프로젝트의 80%
              이상에 기여했습니다.
            </li>
            <li>
              D3를 이용하여 막대 그래프, 라인 및 포인트, 스캐터 그래프를 그리는
              리포트 페이지를 구현했습니다.
            </li>
            <li>
              React Query를 이용한 커스텀 훅을 만들어 에러 처리 및 쿼리 무효화
              코드를 최적화했습니다.
            </li>
          </ul>
          <div className="stack-tag-wrapper">
            <div className="stack-tag">REACT</div>
            <div className="stack-tag">zustand</div>
            <div className="stack-tag">typescript</div>
            <div className="stack-tag">react-query</div>
            <div className="stack-tag">d3</div>
          </div>
        </div>
      </div>
    </>
  );
}
