import { Dispatch, SetStateAction } from 'react';

function Landing({
  setState,
}: {
  setState: Dispatch<SetStateAction<boolean>>;
}) {
  const onClickEnter = () => {
    setState(true);
  };

  return (
    <article className="landing-wrapper">
      <section className="landing-header">
        <h1>HYEOZ</h1>
      </section>

      <section className="landing-content">
        <div className="landing-image-wrapper" onClick={onClickEnter}>
          <div className="landing-image-back">
            <img
              src="/main_photo.png"
              alt="landing-image"
              className="landing-image"
            />
          </div>
          <div className="tooltip">
            <p>여기를 눌러 더 알아보세요!</p>
          </div>
        </div>
        <div className="back-text">
          {new Array(3).fill(null).map((_, idx) => (
            <div className="text-row" key={`lading-text-row-${idx}`}>
              {new Array(3).fill(null).map((_, index) => (
                <p key={`landing-text-${index}`}>
                  3년차 프론트엔드 개발자. 리액트, 3D, 앱 개발 합니다!
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

export default Landing;
