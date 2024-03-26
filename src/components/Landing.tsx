import { Dispatch, SetStateAction } from 'react';

function Landing({
  setState,
}: {
  setState: Dispatch<SetStateAction<boolean>>;
}) {
  const onClickEnter = () => {
    setState(true);
  };
  // TODO 랜딩페이지에서 버튼 클릭 시 스트롤 섹션으로 넘어갈 수 있도록 설정
  return (
    <article className="landing-wrapper">
      <section className="landing-header">
        <h1>HYEOZ</h1>
      </section>

      <section className="landing-content">
        <div className="landing-image-wrapper" onClick={onClickEnter}>
          <div className="landing-image-back">
            <img src="" alt="landing-image" />
          </div>
          <div className="tooltip">
            <p>여기를 눌러 더 알아보세요!</p>
          </div>
        </div>
        <div className="back-text">
          <div className="text-row">
            <p>3년차 프론트엔드 개발자. 리액트, 3D, 앱 개발 합니다!</p>
            <p>3년차 프론트엔드 개발자. 리액트, 3D, 앱 개발 합니다!</p>
          </div>
          <div className="text-row">
            <p>3년차 프론트엔드 개발자. 리액트, 3D, 앱 개발 합니다!</p>
            <p>3년차 프론트엔드 개발자. 리액트, 3D, 앱 개발 합니다!</p>
          </div>
          <div className="text-row">
            <p>3년차 프론트엔드 개발자. 리액트, 3D, 앱 개발 합니다!</p>
            <p>3년차 프론트엔드 개발자. 리액트, 3D, 앱 개발 합니다!</p>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Landing;
