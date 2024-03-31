import '../styles/content.css';

/* TODO
  - HTML 찐 내용 채우기 (텍스트)
  - 모바일 반응형 적용
*/

function HtmlContent() {
  return (
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
          <h2>
            프-하!
            <br />
            안녕하세요, 3년차 프론트엔드 개발자 이혜원입니다!
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
function ThirdSection() {
  return (
    <section className="section-wrapper">
      <div className="back-title">
        <h1>
          <span>WORKS</span>
        </h1>
      </div>
      <div className="content">
        <p>내용이 들어갑니다.</p>
      </div>
    </section>
  );
}
function FourthSection() {
  return (
    <section className="section-wrapper">
      <div className="back-title">
        <h1>
          <span>CON</span>
          <span>TACT</span>
        </h1>
      </div>
      <div className="content">
        <p>내용이 들어갑니다.</p>
      </div>
    </section>
  );
}

export default HtmlContent;
