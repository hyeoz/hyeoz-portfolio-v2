import { useNavigate } from 'react-router-dom';
import Carousel from '../Carousel';

export function Dokdo({ isModal }: { isModal: boolean }) {
  const navigate = useNavigate();

  return (
    <>
      {!isModal && (
        <div className="flex items-center justify-between gap-4 px-12 mt-3 works-page-header">
          <p className="text-[250%] font-bold">독도체험관</p>
          <button
            className="px-8 py-2 border-2 text-[150%] text-[#c7d544] border-[#c7d544] rounded-lg hover:bg-[#c7d544] hover:text-[#fff] transition-all"
            onClick={() => navigate('/')}
          >
            MAIN
          </button>
        </div>
      )}
      <div className={isModal ? 'works-modal-wrapper' : 'works-page-wrapper'}>
        <Carousel
          images={[
            '/works/dokdo_1.png',
            '/works/dokdo_2.png',
            '/works/dokdo_3.png',
            '/works/dokdo_4.png',
            '/works/dokdo_5.png',
          ]}
        />
        <div className="flex flex-col justify-between !pl-6 works-content-wrapper hide-scroll-bar">
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
              백오피스 개발 리딩 및 Antd 디자인 라이브러리를 이용하여 UI/UX
              기획과 구현을 진행하였습니다.
            </li>
            <ul>
              <li>
                예약 관리 기능을 구현해 체험관 방문객 관리를 개선하고,
                백엔드에서 받은 데이터를 정제하여 excel 로 다운받을 수 있는 기능
                구현했습니다.
              </li>
              <li>
                변화하는 클라이언트의 요구사항을 수용하여 통계 테이블 전체를
                다운받을 수 있도록 react-to-table 라이브러리를 활용하여 인쇄
                기능 추가했습니다.
              </li>
              <li>
                게시판 기능을 개발하여 유저페이지에 노출되는 공지사항, 교육자료,
                갤러리 등을 관리할 수 있도록 하였습니다.
              </li>

              <li>
                캘린더 라이브러리를 사용함과 동시에 공휴일, 휴관일, 예약 마감일
                을 렌더링하는 로직을 직접 작성하여 예약 관리 기능을
                개선했습니다.
              </li>
              <li>
                Antd 라이브러리의 컴포넌트를 래핑한 커스텀 컴포넌트 작성을 통해
                코드를 분리하여 가독성을 높혔습니다.
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
    </>
  );
}
