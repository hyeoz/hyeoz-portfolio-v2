function Landing({ setState }: { setState: any }) {
  // TODO 사파리 초기 화면 따라한 랜딩페이지
  // TODO 랜딩페이지에서 버튼 클릭 시 스트롤 섹션으로 넘어갈 수 있도록 설정
  return (
    <article className="landing-wrapper">
      <section className="landing-header">
        <h1>HYEOZ</h1>
      </section>

      <section className="landing-content">
        <div className="landing-image" />
        <div className="back-text">
          <p>
            내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
            들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
            들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
            들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.
          </p>
        </div>
      </section>
    </article>
  );
}

export default Landing;
