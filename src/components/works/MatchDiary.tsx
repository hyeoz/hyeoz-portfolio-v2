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
              서비스를 기획 / 디자인 / 개발 하여 앱스토어와 플레이스토어에
              배포했습니다.(
              <a
                href="https://apps.apple.com/kr/app/%EC%A7%81%EA%B4%80%EC%9D%BC%EA%B8%B0/id6503297796?l=en-GB"
                target="_blank"
                rel="noreferrer"
                // className="disabled-link"
              >
                APPSTORE
              </a>
              ,
              <a
                href="https://play.google.com/store/apps/details?id=com.matchdiary.origin"
                target="_blank"
                rel="noreferrer"
                // className="disabled-link"
              >
                PLAYSTORE
              </a>
              )
            </li>
            <li>
              피그마를 이용해 디자인과 레이아웃을 구성하고 퍼블리싱
              진행하였습니다.
            </li>
            <li>
              Node.js 와 express 를 이용하여 서버를 구성하고, API 를
              개발하였습니다. AWS EC2 로 백엔드 서버를 배포하고, pm2 를 통해 EC2
              인스턴스를 재시작할 때 서버도 자동적으로 재시작 할 수 있도록
              구성하였습니다.
            </li>
            <li>
              기록을 서버에 저장할 수 있도록 하였고, 갤러리 사진을 뿐만 아니라
              직접 카메라를 통해 사진을 찍어 기록할 수 있도록 구현하였습니다.
            </li>
            <li>
              랜덤으로 닉네임을 부여하는 로직을 작성하고, 경기장 별 커뮤니티
              기능을 개발하였습니다.
            </li>
            <li>
              웹뷰와 네이버 지도 API 를 이용하여 기록을 남긴 경기장을 지도에서
              확인할 수 있는 기능을 개발하였습니다.
            </li>
            <li>
              Python requests 와 beautifulsoup 모듈을 사용하여 경기 일정 정적
              크롤링하고, EC2 컴퓨터에서 crontab 으로 파이썬 크롤링 자동화가
              가능하도록 구현하였습니다. 그 결과를 슬랙으로 받을 수 있도록 웹
              훅을 연결하였습니다.
            </li>
            <li>
              서버 오류 원인을 찾기위해 Sentry 연결 및 오류 내용을 슬랙 웹 훅을
              통해 알 수 있도록 연결하였습니디. 크롤링 결과 또한 슬랙으로 알 수
              있도록 연결하였습니다.
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
            <div className="stack-tag">AWS</div>
            <div className="stack-tag">pm2</div>
            <div className="stack-tag">naver map api</div>
            <div className="stack-tag">slack webhook</div>
            <div className="stack-tag">sentry</div>
          </div>
        </div>
      </div>
    </>
  );
}
