import '../styles/content.css';

function HtmlContent() {
  return (
    <article className="html-wrapper">
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
      <div className="back-title">
        <h1>INFO</h1>
      </div>
      <div className="content-wrapper">
        <h2>내용이 들어갑니다.</h2>
      </div>
    </section>
  );
}
function SecondSection() {
  return (
    <section className="section-wrapper">
      <div className="back-title">
        <h1>STACK</h1>
      </div>
      <div className="content-wrapper">
        <h2>내용이 들어갑니다.</h2>
      </div>
    </section>
  );
}
function ThirdSection() {
  return (
    <section className="section-wrapper">
      <div className="back-title">
        <h1>WORKS</h1>
      </div>
      <div className="content-wrapper">
        <h2>내용이 들어갑니다.</h2>
      </div>
    </section>
  );
}
function FourthSection() {
  return (
    <section className="section-wrapper">
      <div className="back-title">
        <h1>
          CON-
          <br />
          TACT
        </h1>
      </div>
      <div className="content-wrapper">
        <h2>내용이 들어갑니다.</h2>
      </div>
    </section>
  );
}

export default HtmlContent;
