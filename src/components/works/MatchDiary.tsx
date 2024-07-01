import Carousel from '../Carousel';

export function MatchDiary({ isModal }: { isModal: boolean }) {
  return (
    <div className={isModal ? 'works-modal-wrapper' : ''}>
      <Carousel
        images={[
          "/works/5.5' (1).png",
          "/works/5.5' (2).png",
          "/works/5.5' (3).png",
          "/works/5.5' (4).png",
          "/works/5.5' (5).png",
        ]}
      />
      <div className="flex flex-col justify-between works-content-wrapper hide-scroll-bar">
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
            파이썬을 이용하여 경기 일정 및 결과를 크롤링하고, strapi 를 통해
            구축한 백엔드 서버에 데이터를 저장하였습니다.
          </li>
          <li>
            크롤링은 heroku 스케쥴러를 설정하여 매일 밤 12시에 작동합니다.
            크롤링이 정상적으로 작동했는지는 Slack webhook을 이용하여 메세지로
            확인할 수 있습니다.
          </li>
          <li>
            기록한 사진과 텍스트에 대해서는 스토리지를 이용하여 기기 자체에
            저장하도록 구현하여 로그인 및 인증 로직이 필요없도록 개발하였습니다.
          </li>
          <li>
            네이버 맵 API 와 위치 정보를 이용하여 경기장괴의 거리를 측정하고,
            경기장 근처에서 푸쉬 알림을 받을 수 있도록 구현하였습니다.
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
  );
}
