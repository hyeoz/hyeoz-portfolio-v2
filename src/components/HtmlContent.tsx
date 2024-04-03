import { useState } from 'react';

import '../styles/content.css';
import Modal from './Modal';
import Swiper from './Swiper';

/* TODO
  - HTML 찐 내용 채우기 (텍스트)
  - 모바일 반응형 적용
*/

function HtmlContent() {
  return (
    <>
      <article className="html-wrapper">
        <div
          className="html-header"
          onClick={() => location.reload()}
          style={{
            cursor: 'pointer',
          }}
        >
          <h1>HYEOZ</h1>
        </div>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </article>

      <FloatingWorks />
      <FloatingContact />
    </>
  );
}

function FirstSection() {
  return (
    <section className="section-wrapper">
      <div className="content-wrapper">
        <div className="back-title">
          <h1>
            <span>IN</span>
            <span>FO</span>
          </h1>
        </div>
        <div className="content info">
          <div>
            <h2>
              안녕하세요,
              <br />
              3년차 프론트엔드 개발자 이혜원입니다!
            </h2>
            <br />
            <p>
              저는 파이썬을 통한 데이터분석으로 코딩에 입문하여, <br />
              현재는 웹, 앱 프론트엔드 개발자로 일하고 있습니다. <br />
              리액트를 주로 사용하고, 리액트-스러운 개발을 위헤 <br />
              컴포넌트 재사용성에 대해 고민함과 동시에 <br />
              사용자 편리성을 위해 더 나은 기능을 <br />
              구현하려고 노력하고 있습니다!
            </p>
          </div>
          <div>
            <div>
              <h3>1997.02.03</h3>
              <p>출생</p>
            </div>
            <div>
              <h3>2015.03 - 2020.02</h3>
              <p>서울여자대학교 졸업</p>
            </div>
            <div>
              <h3>2021.04 - 2021.10</h3>
              <p>도미네이트 (데이터 분석)</p>
            </div>
            <div>
              <h3>2022.04 - </h3>
              <p>메이데이 파트너스 (프론트엔드 개발)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecondSection() {
  return (
    <section className="section-wrapper">
      <div className="back-title">
        <h1>SKILLS</h1>
      </div>
      <div className="content skills">
        <div className="react">
          <img src="/cloud.png" alt="cloud-react" />
          <p>React</p>
        </div>
        <div className="js-ts">
          <img src="/cloud.png" alt="cloud-js" />
          <p>JavaScript / TypeScript</p>
        </div>
        <div className="three">
          <img src="/cloud.png" alt="cloud-three" />
          <p>Three.js</p>
        </div>
        <div className="react-native">
          <img src="/cloud.png" alt="cloud-native" />
          <p>React Native</p>
        </div>
        <div className="python">
          <img src="/cloud.png" alt="cloud-python" />
          <p>Python</p>
        </div>
        {/* <div className="and-so-on">
          <img src="/cloud.png" alt="cloud-js" />
          <p>JavaScript / TypeScript</p>
        </div> */}
      </div>
    </section>
  );
}

// TODO 프로젝트 정리, 어려움 극복 관련 + 사진 등 자세한 내용 모달로 띄우기
function ThirdSection() {
  return (
    <section className="section-wrapper">
      <div className="back-title">
        <h1>
          <span>WORKS</span>
        </h1>
      </div>
    </section>
  );
}
// TODO SNS
function FourthSection() {
  return (
    <section className="section-wrapper">
      <div className="back-title">
        <h1>
          <span>CON</span>
          <span>TACT</span>
        </h1>
      </div>
    </section>
  );
}

function FloatingWorks() {
  const [modalType, setModalType] = useState('');

  const onClickWorks = (works: string) => {
    setModalType(works);
  };

  const renderComponent = () => {
    switch (modalType) {
      case 'shakerrr':
        return <Shakerrr />;
      case 'dokdo':
        return <Dokdo />;
      case 'wevent':
        return <Wevent />;
      case 'kovo':
        return <Kovo />;
      default:
        return <></>;
    }
  };

  return (
    <article className="floating-wrapper">
      <div className="content works">
        <div>
          <div className="shakerrr" onClick={() => onClickWorks('shakerrr')}>
            <img src="/online-store.png" alt="shakerrr-icon" />
            <h2>SHAKERRR</h2>
          </div>
          <div className="dokdo" onClick={() => onClickWorks('dokdo')}>
            <img src="/museum.png" alt="dokdo-icon" />
            <h2>DOKDO MUSEUM</h2>
          </div>
        </div>
        <div>
          <div className="wevent" onClick={() => onClickWorks('wevent')}>
            <img src="/event.png" alt="wevent-icon" />
            <h2>WEVENT</h2>
          </div>
          <div className="kovo" onClick={() => onClickWorks('kovo')}>
            <img src="/ball.png" alt="kovo-icon" />
            <h2>KOVO</h2>
          </div>
        </div>
      </div>

      <Modal
        open={!!modalType}
        title={modalType.toLocaleUpperCase()}
        content={renderComponent()}
        onClose={() => setModalType('')}
      />
    </article>
  );
}

function Shakerrr() {
  return (
    <div className="works-modal-wrapper">
      <div>
        <ul>
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
          <div className="stack-tag">ANTD</div>
        </div>
      </div>
      <div>
        <Swiper />
      </div>
    </div>
  );
}
function Dokdo() {
  return (
    <div className="works-modal-wrapper">
      <div>
        <ul>
          <li>
            독도체험관이 이전함에 따라 노후화된 웹페이지를 차세대 기술을
            이용하여 새롭게 개발하였습니다.
          </li>
          <li>
            관리자 페이지를 도맡아 개발하였고, 디자인 없이 핵심 기능만 구현
            가능하도록 개발되었습니다.
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
          <li>
            <a
              href="http://admindokdomuseum.nahf.kr/"
              target="_blank"
              rel="noreferrer"
            >
              http://admindokdomuseum.nahf.kr/
            </a>
          </li>
        </ul>
        <div className="stack-tag-wrapper">
          <div className="stack-tag">TypeScript</div>
          <div className="stack-tag">Next.js</div>
          <div className="stack-tag">ANTD</div>
          <div className="stack-tag">pm2</div>
        </div>
      </div>
      <div>
        <Swiper />
      </div>
    </div>
  );
}
function Wevent() {
  return (
    <div className="works-modal-wrapper">
      <div>
        <ul>
          <li>
            MICE 플랫폼으로서 온/오프라인 이벤트 개최를 통해 아이디어 교환,
            토론, 네트워크 형성을 위한 공간을 제공하는 플랫폼을 개발하였습니다.
          </li>
          <li>
            메인페이지와 관리자페이지, 유저페이지(온라인 이벤트 참여 페이지)
            개발에 참여하였습니다.
          </li>
          <li>메인</li>
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
          <li>관리자</li>
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
          <li>유저</li>
          <ul>
            <li></li>
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
            시스템을 도맡아 개발하고 npm 을 통해 배포하는 경험을 쌓았습니다.
          </li>
          <ul>
            <li>
              <a
                href="https://www.npmjs.com/package/@maydaydevteam/yeeeyes-design"
                target="_blank"
                rel="noreferrer"
              >
                https://www.npmjs.com/package/@maydaydevteam/yeeeyes-design
              </a>
            </li>
          </ul>
          <li>
            <a href="https://wevent.co.kr/" target="_blank" rel="noreferrer">
              https://wevent.co.kr/
            </a>
            <a className="disabled-link">https://manager.wevent.co.kr/</a>
            <a className="disabled-link">https://user.wevent.co.kr/:id/lobby</a>
          </li>
        </ul>
        <div className="stack-tag-wrapper">
          <div className="stack-tag">TypeScript</div>
          <div className="stack-tag">REACT</div>
          <div className="stack-tag">Next.js</div>
          <div className="stack-tag">Stomp</div>
          <div className="stack-tag">Recoil</div>
          <div className="stack-tag">ANTD</div>
          <div className="stack-tag">AWS</div>
          <div className="stack-tag">npm</div>
        </div>
      </div>
      <div>
        <Swiper />
      </div>
    </div>
  );
}
function Kovo() {
  return (
    <div className="works-modal-wrapper">
      <div>
        <ul>
          <li>
            한국 배구연맹(KOVO) 의 통합 웹사이트와 앱을 개발하는 데
            참여했습니다. KOVO 및 14개 구단의 홈페이지를 같은 도메인으로
            통합시키고, 통합 로그인을 통해 웹사이트 및 공식 스토어를 이용할 수
            있도록 개발하였습니다. 추가로 관리자 페이지를 이용하여 각 구단별
            콘텐츠를 업로드 하거나 메뉴 노출 여부, 새로운 하위 메뉴를 생성하는
            등 통합적으로 운영하는 동시에 개별성을 가질 수 있도록
            구현하였습니다.
          </li>
          <li>메인</li>
          <ul>
            <li>
              구단 메인은 두 가지 디자인 중 하나를 선택하여 보여줄 수 있도록
              개발하였습니다.
            </li>
            <li>
              경기 일정 및 데이터를 시각화하여 KOVO 및 구단 홈페이지에
              노출하였습니다.
            </li>
            <li>
              이벤트를 생성하거나, 사진 / 영상 등을 업로드하고 인터파크와
              협업하여 통합 홈페이지 내에서 티켓을 예매할 수 있도록
              구현하였습니다.
            </li>
          </ul>
          <li>CMS</li>
          <ul>
            <li>
              홈페이지에 올라가는 모든 콘텐츠를 관리할 수 있는 관리자 페이지
              개발에 참여하였습니다.
            </li>
            <li>
              로그인 권한을 부여하여 최고관리자 / 구단관리자를 구분하여
              웹사이트를 관리할 수 있도록 하였습니다.
            </li>
          </ul>
          <li>APP</li>
          <ul>
            <li>
              네이티브 앱과 웹뷰를 이용하여 통합 앱을 개발하는 데 참여했습니다.
            </li>
            <li>
              구단별로 다른 바텀탭 컬러와 애니메이션을 이용해 통합 앱의 장점을
              극대화할 수 있도록 구현하였습니다.
            </li>
          </ul>
        </ul>
        <div className="stack-tag-wrapper">
          <div className="stack-tag">TypeScript</div>
          <div className="stack-tag">JavaScript</div>
          <div className="stack-tag">REACT</div>
          <div className="stack-tag">REACT Native</div>
          <div className="stack-tag">Recoil</div>
          <div className="stack-tag">ANTD</div>
          <div className="stack-tag">vercel</div>
        </div>
      </div>
      <div>
        <Swiper />
      </div>
    </div>
  );
}

function FloatingContact() {
  return (
    <article className="floating-wrapper">
      <div className="content contact">
        <div onClick={() => window.open('https://github.com/hyeoz')}>
          <img src="/svg/github.svg" alt="contact-github" />
        </div>
        <div onClick={() => window.open('https://www.instagram.com/hye_oz/')}>
          <img src="/svg/instagram.svg" alt="contact-instagram" />
        </div>
        <div
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/%ED%98%9C%EC%9B%90-%EC%9D%B4-5a695412b/'
            )
          }
        >
          <img src="/svg/linkedin.svg" alt="contact-linkedin" />
        </div>
        <div onClick={() => window.open('https://hyeoz.tistory.com/')}>
          <img src="/svg/tistory.svg" alt="contact-tistory" />
        </div>
        <div onClick={() => window.open('https://www.youtube.com/@hye_oz')}>
          <img src="/svg/youtube.svg" alt="contact-youtube" />
        </div>
      </div>
    </article>
  );
}
export default HtmlContent;
