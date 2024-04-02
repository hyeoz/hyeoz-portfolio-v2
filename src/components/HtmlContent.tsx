import { useEffect, useState } from 'react';
import '../styles/content.css';
import Modal from './Modal';

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
  return <div>Shakerrr</div>;
}
function Dokdo() {
  return <div>DokDo</div>;
}
function Wevent() {
  return <div>Wevent</div>;
}
function Kovo() {
  return <div>Kovo</div>;
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
