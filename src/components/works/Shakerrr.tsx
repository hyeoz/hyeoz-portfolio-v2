import Carousel from '../Carousel';

export function Shakerrr({ isModal }: { isModal: boolean }) {
  return (
    <div className={isModal ? 'works-modal-wrapper' : ''}>
      <Carousel
        images={[
          '/works/shakerrr_1.png',
          '/works/shakerrr_2.png',
          '/works/shakerrr_3.png',
          '/works/shakerrr_4.png',
        ]}
      />
      <div className="flex flex-col justify-between works-content-wrapper hide-scroll-bar">
        <ul className="[&_li]:list-disc">
          <li>
            인플루언서 공동구매 쇼핑몰 플랫폼으로서, 일반 유저로서 구매와 동시에
            인플루언서 유저로서 마이샵, 체험단 등의 기능을 이용할 수 있는 서비스
            입니다.
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
              정산관리 기능의 개발을 통해 인플루언서 유저의 포인트응 정산하고
              상품 판매자에게 판매 금액이 정확하게 정산되도록 개발하였습니다.
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
  );
}
