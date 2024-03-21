import '../styles/content.css';

function Html() {
  return (
    <article className="html-wrapper">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </article>
  );
}

function Introduce() {
  // TODO 가장 상단 섹션 하나 더 추가
  // TODO 백그라운드 이미지 + 이름 + section 이동 버튼
}

function FirstSection() {
  return (
    <section>
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
    <section>
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
    <section>
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
    <section>
      <div className="back-title">
        <h1>CONTACT</h1>
      </div>
      <div className="content-wrapper">
        <h2>내용이 들어갑니다.</h2>
      </div>
    </section>
  );
}

export default Html;
