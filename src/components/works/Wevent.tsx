import Carousel from '../Carousel';

export function Wevent({ isModal }: { isModal: boolean }) {
  return (
    <div className={isModal ? 'works-modal-wrapper' : ''}>
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
      <div className="flex flex-col justify-between works-content-wrapper hide-scroll-bar">
        <ul className="[&_li]:list-disc">
          <li>
            MICE 플랫폼으로서 온/오프라인 이벤트 개최를 통해 아이디어 교환,
            토론, 네트워크 형성을 위한 공간을 제공하는 플랫폼을 개발하였습니다.
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
              관리자 계정으로 로그인 시 확인할 수 있는 개설 이벤트 관리 페이지를
              개발하여 추가 옵션 결제 및 이벤트 관리 멤버 추가 / 삭제 기능을
              구현하였습니다.
            </li>
            <li>
              유저 계정으로 로그인 시 확인할 수 있는 관심 이벤트 / 신청 이벤트
              페이지를 개발하여 좋아요 한 이벤트를 모아 보거나 신청한 이벤트의
              상태를 확인할 수 있도록 구현하였습니다.
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
              세션설정 기능을 통해 이벤트 내의 복수의 세션을 생성하고 설정할 수
              있도록 하였습니다.
            </li>
            <li>
              세션채팅 기능을 담당하여 이벤트 담당자가 채팅을 관리하고
              공지사항을 설정할 수 있도록 구현하였습니다.
            </li>
            <li>
              설문조사 기능을 개발하여 이벤트 / 세션 / 연사에 관한 설문조사를
              생성하고, 이벤트에 참여한 유저가 설문조사에 참여할 수 있도록
              허였습니다.
            </li>
            <li>
              또한 관리자가 설정할 수 있는 항목과 연관된 통계 페이지를 개발하여
              참가자 통계, 티켓 통계, 설문조사 통계 등 통계 데이터를 시각화
              하였습니다.
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
              stomp.js 를 활용한 실시간 채팅 기능을 개발하였습니다.
            </li>
            <li>
              또한 Q&A 기능을 개발하여 유저와 관리자간 질의응답이 가능하도록
              하였습니다.
            </li>
            <li>
              로비 기능에 참여하여, 2D / 3D 로비 이미지 위에 캔버스를 이용하여
              텍스트 및 버튼을 띄울 수 있도록 개발하였습니다.
            </li>
          </ul>
          <li>
            해당 프로젝트 개발 시 편리한 공통 컴포넌트 관리를 위해 디자인
            시스템을 도맡아, 시멘틱 마크업을 활용한 컴포넌트를 개발하고 npm 을
            통해 배포하는 경험을 쌓았습니다. (
            <a
              href="https://www.npmjs.com/package/@maydaydevteam/yeeeyes-design"
              target="_blank"
              rel="noreferrer"
            >
              LINK
            </a>
            )
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
  );
}
