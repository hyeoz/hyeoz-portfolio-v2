import Carousel from '../common/Carousel';

export function Shakerrr({ isModal }: { isModal: boolean }) {
  return (
    <>
      {!isModal && (
        <div className="flex items-center justify-between gap-4 px-12 mt-3 works-page-header">
          <p className="text-[250%] font-bold">쉐커(Shakerrr)</p>
          <button
            className="px-8 py-2 border-2 text-[150%] text-[#ed2583] border-[#ed2583] rounded-lg hover:bg-[#ed2583] hover:text-[#fff] transition-all"
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
            '/works/shakerrr_1.png',
            '/works/shakerrr_2.png',
            '/works/shakerrr_3.png',
            '/works/shakerrr_4.png',
          ]}
        />
        <div className="flex flex-col justify-between !pl-6 works-content-wrapper hide-scroll-bar">
          <ul className="[&_li]:list-disc">
            <li>
              인플루언서 공동구매 쇼핑몰 플랫폼으로서, 일반 유저로서 구매와
              동시에 인플루언서 유저로서 마이샵, 체험단 등의 기능을 이용할 수
              있는 서비스 입니다.
            </li>
            <li>
              프로젝트 진행 중 투입되었으며, 관리자 페이지 개발을 맡았습니다.
            </li>
            <ul>
              <li>
                주문관리 기능의 개발을 통해 상품의 주문 상태와 배송 상태, 배송사
                관리 기능을 쉽게 확인하고 상태를 간단하게 변경할 수 있도록
                개선하였습니다.
              </li>
              <li>
                API 연결을 통해 정산관리 기능을 개발해 인플루언서 유저의
                포인트를 정산하고 상품 판매자에게 판매 금액이 정확하게
                정산되도록 개발하였습니다.
              </li>
              <li>
                한 가지 주문에 대해 주문관리와 배송관리, 정산관리 세 가지로
                나눠져 관리하며 각 페이지에서 변경한 상태가 바로 적용되지 않는
                문제를 전역 상태관리 라이브러리 도입으로 해결했습니다.
              </li>
              <li>
                Redux 와 Redux-toolkit 을 사용하여 주문관리 기능의 개발을 통해
                상품의 주문 상태와 배송 상태, 배송사 관리 기능을 쉽게 확인하고
                상태를 간단하게 변경할 수 있도록 개선했습니다.
              </li>
              <li>
                useCallback 이 제대로 트리거되지 않아 상태변화가 적용되지 않아
                정산금액이 제대로 계산되지 않는 문제를 useState 의 업데이터 함수
                사용 대신 디펜던시로 관리하도록 수정하여 해결했습니다.
              </li>
            </ul>
          </ul>
          <div className="stack-tag-wrapper">
            <div className="stack-tag">TypeScript</div>
            <div className="stack-tag">REACT</div>
            <div className="stack-tag">Antd</div>
          </div>
        </div>
      </div>
    </>
  );
}
