import Carousel from '../common/Carousel';

export function MatchDiary({ isModal }: { isModal: boolean }) {
  return (
    <>
      {!isModal && (
        <div className="flex items-center justify-between gap-4 px-12 mt-3 works-page-header">
          <p className="text-[250%] font-bold">직관일기</p>
          <button
            className="px-8 py-2 border-2 text-[150%] text-[#b1d597] border-[#b1d597] rounded-lg hover:bg-[#b1d597] hover:text-[#fff] transition-all"
            onClick={() =>
              window.location.replace(window.location.origin + '/main')
            }
          >
            MAIN
          </button>
        </div>
      )}
      <div className={isModal ? 'works-modal-wrapper' : 'works-page-wrapper'}>
        <Carousel
          images={[
            "/works/5.5' (1).png",
            "/works/5.5' (2).png",
            "/works/5.5' (3).png",
            "/works/5.5' (4).png",
            "/works/5.5' (5).png",
          ]}
        />
        <div className="flex flex-col justify-between !pl-6 works-content-wrapper hide-scroll-bar">
          <ul className="[&_li]:list-disc">
            <li>
              쉽게 나의 직관 일기를 기록할 수 있는 <strong>직관일기</strong>{' '}
              서비스를 기획 / 디자인 / 개발 하여 앱스토어에 배포했습니다.(
              <a
                href="https://apps.apple.com/kr/app/%EC%A7%81%EA%B4%80%EC%9D%BC%EA%B8%B0/id6503297796?l=en-GB"
                target="_blank"
                rel="noreferrer"
                // className="disabled-link"
              >
                LINK
              </a>
              )
            </li>
            <li>
              피그마를 이용해 디자인과 레이아웃을 구성하고 퍼블리싱
              진행하였습니다.
            </li>
            <li>
              기록한 사진과 텍스트에 대해서는 스토리지를 이용하여 기기 자체에
              저장하도록 구현하여 로그인 및 인증 로직이 필요없도록
              개발하였습니다.
            </li>
            <li>
              랜덤으로 닉네임을 부여하는 로직을 작성하고, 경기장 별 커뮤니티
              기능을 개발하였습니다.
            </li>
            <li>
              React Native Background Geolocation 기능과 Naver map api 를
              사용하여 경기장 접근시 노티피케이션이 울리도록 구현하였습니다.
            </li>
            <li>
              Python requests 와 beautifulsoup 모듈을 사용하여 경기 일정 정적
              크롤링하고, Strapi 를 통해 구축한 백엔드 서버에 데이터를
              저장하였습니다.
            </li>
            <li>
              크롤링은 heroku 스케쥴러를 설정하여 매일 밤 12시에 작동하도록
              하고, 크롤링이 정상적으로 작동했는지는 Slack webhook을 이용하여
              메세지로 확인할 수 있습니다.
            </li>
            <li>레포지토리 확인</li>
            <ul>
              <li className="!list-none font-bold">
                <a
                  href="https://github.com/hyeoz/match-diary"
                  target="_blank"
                  rel="noreferrer"
                >
                  IOS 앱 레포지토리
                </a>
              </li>
              <li className="!list-none font-bold">
                <a
                  href="https://github.com/hyeoz/2024_match_crawling"
                  target="_blank"
                  rel="noreferrer"
                >
                  웹 크롤링 레포지토리
                </a>
              </li>
            </ul>
          </ul>
          <div className="stack-tag-wrapper">
            <div className="stack-tag">REACT Native</div>
            <div className="stack-tag">zustand</div>
            <div className="stack-tag">python</div>
            <div className="stack-tag">strapi</div>
            <div className="stack-tag">heroku</div>
            <div className="stack-tag">naver map api</div>
            <div className="stack-tag">slack webhook</div>
          </div>
        </div>
      </div>
    </>
  );
}
