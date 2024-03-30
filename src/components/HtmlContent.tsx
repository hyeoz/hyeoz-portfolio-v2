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
        <div className="content">
          <p>내용이 들어갑니다.</p>
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
        <div className="js-ts"></div>
        <div className="react"></div>
        <div className="three"></div>
        <div className="react-native"></div>
        <div className="python"></div>
        <div className="and-so-on"></div>
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
