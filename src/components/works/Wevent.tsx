import Carousel from '../common/Carousel';

export function Wevent({ isModal }: { isModal: boolean }) {
  return (
    <>
      {!isModal && (
        <div className="flex items-center justify-between gap-4 px-12 mt-3 works-page-header">
          <p className="text-[250%] font-bold">위벤트(Wevent)</p>
          <button
            className="px-8 py-2 border-2 text-[150%] text-[#778df7] border-[#778df7] rounded-lg hover:bg-[#778df7] hover:text-[#fff] transition-all"
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
            '/works/wevent_main_1.png',
            '/works/wevent_main_2.png',

            '/works/wevent_manager_1.png',
            '/works/wevent_manager_2.png',
            '/works/wevent_manager_3.png',
            '/works/wevent_manager_4.png',
            '/works/wevent_manager_5.png',

            '/works/wevent_user_1.png',
            '/works/wevent_user_2.png',
            '/works/wevent_user_3.png',
            '/works/wevent_user_4.png',

            '/works/wevent_chat_1.png',
            '/works/wevent_chat_2.png',
          ]}
        />
        <div className="flex flex-col justify-between !pl-6 works-content-wrapper hide-scroll-bar">
          <ul className="[&_li]:list-disc">
            <li>
              MICE 플랫폼으로서 온/오프라인 이벤트 개최를 통해 아이디어 교환,
              토론, 네트워크 형성을 위한 공간을 제공하는 플랫폼을
              개발하였습니다.
            </li>
            <li>
              메인페이지와 관리자페이지, 유저페이지(온라인 이벤트 참여 페이지)
              개발에 참여하였습니다.
            </li>
            <li>
              해당 사업은 2023년도 테스트베드 서울 실증지원 사업에 최종
              선정되었습니다.
            </li>
            <li className="!list-none font-bold">
              메인 (
              <a href="https://wevent.co.kr/" target="_blank" rel="noreferrer">
                LINK
              </a>
              )
            </li>
            <ul>
              <li>
                일반 유저와 관리자 모두 접근 가능한 메인 페이지 개발에
                참여하였습니다.
              </li>
              <li>
                외부 API 를 이용하여 비동기적으로 검색 및 infinite scroll 이
                가능하도록 구현하였습니다.
              </li>
            </ul>
            <li className="!list-none font-bold">
              관리자 (
              <a className="disabled-link" href="https://manager.wevent.co.kr/">
                LINK
              </a>
              )
            </li>
            <ul>
              <li>
                이벤트를 개최한 관리자가 볼 수 있는 관리자 페이지 개발에
                참여하였습니다.
              </li>
              <li>
                설문조사 기능을 개발하여 이벤트 / 세션 / 연사에 관한 설문조사를
                생성하고, 이벤트에 참여한 유저가 설문조사에 참여할 수 있도록
                허였습니다.
              </li>
              <li>
                또한 관리자가 설정할 수 있는 항목과 연관된 통계 페이지를
                개발하여 참가자 통계, 티켓 통계, 설문조사 통계 등 통계 데이터를
                시각화 하였습니다.
              </li>
            </ul>
            <li className="!list-none font-bold">
              유저 (
              <a
                className="disabled-link"
                href="https://user.wevent.co.kr/:id/lobby"
              >
                LINK
              </a>
              )
            </li>
            <ul>
              <li>
                온라인 이벤트 개최 시 세션 기능을 맡아 라이브 영상 시청과 함께
                Stomp.js 와 sockjs-client 를 통해 real-time 채팅 모듈을
                구현하였습니다.
              </li>
              <li>
                또한 React Query 를 이용하여 실시간 세션의 평점과 Q&A 의
                데이터를 캐싱하고 부분적으로 refetch 하는 등 관리하였습니다.
              </li>
              <li>
                React Konva 를 이용하여 캔버스 위에 이미지, 동영상, 텍스트를
                띄우는 3D 로비를 개발하였습니다.
              </li>
            </ul>
            <li className="!list-none font-bold">
              디자인 시스템 (
              <a
                href="https://www.npmjs.com/package/@maydaydevteam/yeeeyes-design"
                target="_blank"
                rel="noreferrer"
              >
                LINK
              </a>
              )
            </li>
            <li>
              개발팀 내에서 공통적으로 사용되는 커스텀 컴포넌트를 모듈화하여
              프로젝트 전반에 걸쳐 UI/UX의 일관성을 유지하였습니다.
            </li>
            <li>
              Storybook 을 도입하여 팀원들간 정보 공유 및 단위 테스트를
              진행하였습니다.
            </li>
            <li>
              개발한 디자인 시스템을 npm 을 통해 배포하고, 패키지의 버전 관리 및
              유지보수를 진행하였습니다.
            </li>
          </ul>
          <div className="stack-tag-wrapper">
            <div className="stack-tag">TypeScript</div>
            <div className="stack-tag">REACT</div>
            <div className="stack-tag">Next.js</div>
            <div className="stack-tag">Stomp.js</div>
            <div className="stack-tag">Recoil</div>
            <div className="stack-tag">ANTD</div>
            <div className="stack-tag">AWS</div>
            <div className="stack-tag">npm</div>
          </div>
        </div>
      </div>
    </>
  );
}
