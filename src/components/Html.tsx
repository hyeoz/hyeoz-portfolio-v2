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

// TODO 가장 상단 섹션 하나 더 추가?
function FirstSection() {
  return (
    <section>
      <h1>SECTION1 {'->'} INFOMATION</h1>
    </section>
  );
}
function SecondSection() {
  return (
    <section>
      <h1>SECTION2 {'->'} STACKS</h1>
    </section>
  );
}
function ThirdSection() {
  return (
    <section>
      <h1>SECTION3 {'->'} WORKS</h1>
    </section>
  );
}
function FourthSection() {
  return (
    <section>
      <h1>SECTION4 {'->'} CONTACK</h1>
    </section>
  );
}

export default Html;
