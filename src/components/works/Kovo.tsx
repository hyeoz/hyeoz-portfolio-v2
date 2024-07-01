import { useNavigate } from 'react-router-dom';
import Carousel from '../Carousel';

export function Kovo({ isModal }: { isModal: boolean }) {
  const navigate = useNavigate();

  return (
    <>
      {!isModal && (
        <div className="flex items-center justify-between gap-4 px-12 mt-3 works-page-header">
          <p className="text-[250%] font-bold">한국배구연맹(KOVO)</p>
          <button
            className="px-8 py-2 border-2 text-[150%] text-[#2837e6] border-[#2837e6] rounded-lg hover:bg-[#2837e6] hover:text-[#fff] transition-all"
            onClick={() => navigate('/')}
          >
            MAIN
          </button>
        </div>
      )}
      <div className={isModal ? 'works-modal-wrapper' : 'works-page-wrapper'}>
        <Carousel
          images={[
            '/works/kovo_web_1.png',
            '/works/kovo_web_2.png',
            '/works/kovo_web_3.png',
            '/works/kovo_web_4.png',
            '/works/kovo_web_5.png',

            '/works/kovo_cms_1.png',

            '/works/kovo_app_1.png',
            '/works/kovo_app_2.png',
            '/works/kovo_app_3.png',
            '/works/kovo_app_4.png',
            '/works/kovo_app_5.png',
          ]}
        />
        <div className="flex flex-col !pl-6 justify-between works-content-wrapper hide-scroll-bar">
          <ul className="[&_li]:list-disc">
            <li>
              한국 배구연맹(KOVO) 의 통합 웹사이트와 앱을 개발하는 데
              참여했습니다. KOVO 및 14개 구단의 홈페이지를 같은 도메인으로
              통합시키고, 통합 로그인을 통해 웹사이트 및 공식 스토어를 이용할 수
              있도록 개발하였습니다.
            </li>
            <li>
              추가로 관리자 페이지를 이용하여 각 구단별 콘텐츠를 업로드 하거나
              메뉴 노출 여부, 새로운 하위 메뉴를 생성하는 등 통합적으로 운영하는
              동시에 개별성을 가질 수 있도록 구현하였습니다.
            </li>
            <li className="!list-none font-bold">
              메인(
              <a href="https://www.kovo.co.kr" target="_blank" rel="noreferrer">
                LINK
              </a>
              )
            </li>
            <ul>
              <li>
                경기 일정 및 선수 데이터와 같이 다량의 스포츠 데이터를
                시각화하여 KOVO 및 구단 홈페이지에 노출하였습니다.
              </li>
              <li>
                KOVO 및 14개 구단의 메인 화면에 랭킹과 구단 별 유튜브 컨텐츠 등
                다양한 정보를 구현하고, Light House 를 이용하여 성능 측정 후 80%
                이상 개선하였습니다.
              </li>
              <li>
                실시간 데이터 fetching 을 통해 문자중계 화면을 구현하고, 상태
                관리를 통해 부분적인 화면만 리렌더링 되도록 로직 작성하였습니다.
              </li>
              <li>
                비정상적 접근을 시도하는 IP를 확인하고, 해당 IP 기반으로 접근을
                차단하는 로직 및 화면을 개발하였습니다.
              </li>
            </ul>
            <li className="!list-none font-bold">
              CMS(
              <a href="https://www.admin.kovo.co.kr" className="disabled-link">
                LINK
              </a>
              )
            </li>
            <ul>
              <li>
                홈페이지에 올라가는 모든 콘텐츠를 관리할 수 있는 관리자 페이지
                개발에 참여하였습니다.
              </li>
              <li>
                Kakao Postcode 와 Kakao map 컴포넌트를 작성하여 검색한 주소를
                지도에 표시할 수 있도록 개발 하였습니다.
              </li>
              <li>
                사이트 접근 시 확인할 수 있는 배너 및 팝업창을 관리할 수 있는
                기능을 구현하였습니다.
              </li>
            </ul>
            <li className="!list-none font-bold">
              APP(
              <a
                href="https://apps.apple.com/kr/app/kovo-%ED%95%9C%EA%B5%AD%EB%B0%B0%EA%B5%AC%EC%97%B0%EB%A7%B9/id6466750160?l=en-GB"
                target="_blank"
                rel="noreferrer"
              >
                LINK
              </a>
              )
            </li>
            <ul>
              <li>
                React Native 를 이용하여 통합 앱을 개발하고, 특정 페이지에 대해
                웹뷰를 구현하여 window 객체를 통해 토큰을 전달하여 로그인이
                유지되도록 개발하였습니다.
              </li>
              <li>
                구단별로 다른 바텀탭 컬러와 애니메이션을 이용해 통합 앱의 장점을
                극대화할 수 있도록 구현하였습니다.
              </li>
              <li>
                React 및 React Navive 에서 기본 CSS 및 기본 라이브러리를
                활용하여 데이터 로드 시 생기는 대기시간을 스켈레톤 구현을 통해
                유저 경험 개선하였습니다.
              </li>
            </ul>
          </ul>
          <div className="stack-tag-wrapper">
            <div className="stack-tag">TypeScript</div>
            <div className="stack-tag">JavaScript</div>
            <div className="stack-tag">REACT</div>
            <div className="stack-tag">REACT Native</div>
            <div className="stack-tag">Recoil</div>
            <div className="stack-tag">ANTD</div>
            <div className="stack-tag">vercel</div>
          </div>
        </div>
      </div>
    </>
  );
}
