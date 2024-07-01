import Carousel from '../Carousel';

export function Dokdo({ isModal }: { isModal: boolean }) {
  return (
    <div className={isModal ? 'works-modal-wrapper' : ''}>
      <Carousel
        images={[
          '/works/dokdo_1.png',
          '/works/dokdo_2.png',
          '/works/dokdo_3.png',
          '/works/dokdo_4.png',
          '/works/dokdo_5.png',
        ]}
      />
      <div className="flex flex-col justify-between works-content-wrapper hide-scroll-bar">
        <ul className="[&_li]:list-disc">
          <li>
            독도체험관이 이전함에 따라 노후화된 웹페이지를 차세대 기술을
            이용하여 새롭게 개발하였습니다. (
            <a
              href="http://admindokdomuseum.nahf.kr/"
              target="_blank"
              rel="noreferrer"
              className="disabled-link"
            >
              LINK
            </a>
            )
          </li>
          <li>
            관리자 페이지를 도맡아 개발하였고, 디자인 없이 핵심 기능만 구현
            가능하도록 개발되었습니다.
            <br />
            변화하는 클라이언트의 요구사항을 반영하여 예약 관리 시스템 구축 및
            통계 기능을 개발하였습니다.
          </li>
          <ul>
            <li>
              예약관리 기능을 개발하여 관리자가 관람 예약 현황을 확인하고 취소
              가능하도록 하였습니다.
            </li>
            <li>
              관람통계 관리 기능을 개발하여 기간 / 구분에 따라 관람객 통계를
              확인하고 엑셀파일로 저장 가능하도록 하였습니다.
            </li>
            <li>
              게시판 기능을 개발하여 유저페이지에 노출되는 공지사항, 교육자료,
              갤러리 등을 관리할 수 있도록 하였습니다.
            </li>
          </ul>
        </ul>
        <div className="stack-tag-wrapper">
          <div className="stack-tag">TypeScript</div>
          <div className="stack-tag">React</div>
          <div className="stack-tag">Next.js</div>
          <div className="stack-tag">Antd</div>
          <div className="stack-tag">pm2</div>
        </div>
      </div>
    </div>
  );
}
