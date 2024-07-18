import { useEffect, useRef, useState } from 'react';

import Modal from './common/Modal';
import { Header } from './common/Header';
import { WorksCard } from './common/WorksCard';
import { Shakerrr } from './works/Shakerrr';
import { Dokdo } from './works/Dokdo';
import { Wevent } from './works/Wevent';
import { Kovo } from './works/Kovo';
import { MatchDiary } from './works/MatchDiary';
import { CustomScrollStateType } from '../types/canvas';
import useIsMobile from '../hooks/useIsMobile';
import useIsResized from '../hooks/useIsResized';
import '../styles/content.css';

function HtmlContent({ scrollState, setScrollState }: CustomScrollStateType) {
  const isMobile = useIsMobile();
  const isResized = useIsResized();

  const getChevronDeg = () => {
    if (isMobile) {
      return scrollState === 4 ? 'rotate-[90deg]' : 'rotate-[270deg]';
    } else if (isResized) {
      return scrollState === 1 ? 'rotate-[90deg]' : 'rotate-[270deg]';
    } else {
      return scrollState === 3 ? 'rotate-[90deg]' : 'rotate-[270deg]';
    }
  };

  return (
    <>
      <Header scrollState={scrollState} setScrollState={setScrollState} />
      <div className="fixed bottom-0 z-[999] w-full h-[200px] mobile:h-[50px] flex flex-col justify-end bg-gradient-to-transparent">
        <div className="w-1/2 px-3 py-1 mx-auto animate-bounce">
          <img
            src="/svg/chevron.svg"
            className={`${getChevronDeg()} mx-auto w-[32px] h-[32px] mobile:w-[16px] mobile:h-[16px] mb-4 mobile:mb-1`}
          />
        </div>
      </div>
      <section className="html-wrapper">
        <FirstSection />
        <SecondSection
          scrollState={scrollState}
          setScrollState={setScrollState}
        />
        <ThirdSection />
        <FourthSection />
      </section>

      <MobileFloatingInfo />
      <FloatingContact />
      <FloatingWorks />
    </>
  );
}

function FirstSection() {
  return (
    <section className="section-wrapper">
      <div className="content-wrapper">
        <div className="content info">
          <div>
            <h2 className="!text-[32px]">
              안녕하세요, {/* <br /> */} 3년차 프론트엔드 개발자 이혜원입니다!
            </h2>
            <br />
            <p className="!text-[20px]">
              데이터 분석을 시작으로 프론트엔드 개발을 접하게 되었고, 현재는
              리액트와 리액트 네이티브를 주로 사용하는 웹/앱 개발자가
              되었습니다.
              <br /> 동시에 프론트엔드 교육 과정의 멘토로 2기째 활동중이고, 직접
              개발한 직관일기 라는 서비스를 운영하는 운영자 이기도 합니다.
            </p>
          </div>
          <div>
            <div
              style={{
                aspectRatio: 1 / 1,
                backgroundColor: 'rgba(255,255,255,0.8)',
                padding: 'auto',
                width: '40%',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                justifyContent: 'center',
                borderRadius: 999,
                position: 'relative',
              }}
            >
              <div className="flex justify-center gap-2 [&_p]:!text-[20px] max-w-[1155px]:!text-[12px]">
                <h3>1997.02.03</h3>
                <p>출생</p>
              </div>
              <div className="flex justify-center gap-2 [&_p]:!text-[20px] max-w-[1155px]:!text-[12px]">
                <h3>2015.03 - 2020.02</h3>
                <p>서울여자대학교 (졸업)</p>
              </div>
              <div className="flex justify-center gap-2 [&_p]:!text-[20px] max-w-[1155px]:!text-[12px]">
                <h3>2021.04 - 2021.10</h3>
                <p>도미네이트 (데이터 분석)</p>
              </div>
              <div className="flex justify-center gap-2 [&_p]:!text-[20px] max-w-[1155px]:!text-[12px]">
                <h3>2022.04 - </h3>
                <p className="!text-left">
                  메이데이 파트너스 <br />
                  (프론트엔드 개발)
                </p>
              </div>
              <div className="flex justify-center gap-2 [&_p]:!text-[20px] max-w-[1155px]:!text-[12px]">
                <h3>2023.12 -</h3>
                <p className="!text-left">
                  프로그래머스 <br /> KDT 클라우딩 어플리케이션
                  <br /> 엔지니어링 과정 멘토
                </p>
              </div>
              <div
                style={{
                  aspectRatio: 1 / 1,
                  borderRadius: 999,
                  width: '25vw',
                  height: '25vw',
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  margin: '0 32px',
                  position: 'absolute',
                  left: '45%',
                  top: '80%',
                  transform: 'translate(10%, -40%)',
                  zIndex: 0,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecondSection({ scrollState }: CustomScrollStateType) {
  const isMobile = useIsMobile();
  const isResized = useIsResized();
  const isAnimationStartRef = useRef(scrollState >= 3 / 5);

  useEffect(() => {
    isAnimationStartRef.current = !isResized
      ? scrollState >= 3 / 5
      : scrollState >= 1 / 5;
  }, [scrollState, isResized, isMobile]);

  return (
    <section className="section-wrapper">
      <div className="flex justify-end h-full mr-12 mobile:mr-4 mobile:h-[80%] mobile:mt-[25%]">
        <div
          className={`skills-animation ${isAnimationStartRef.current ? 'start' : ''} w-1/2 text-right flex flex-col gap-[128px] mobile:gap-[64px]`}
        >
          <div className="relative">
            <img
              src="/svg/typescript.svg"
              alt="skills-typescript"
              width={isMobile ? 28 : 64}
              className="absolute top-[-24px] right-[45%] mobile:right-[90%] translate-x-[100%]"
            />
            <span className="absolute top-[48px] mobile:top-2 right-0 w-[45%] mobile:w-[90%] h-[40px] mobile:h-6 bg-[#5fc576] rounded-[32px] shadow-xl">
              <p className="ml-2 text-left">TypeScript</p>
            </span>
          </div>
          <div className="relative">
            <img
              src="/svg/react.svg"
              alt="skills-react"
              width={isMobile ? 28 : 64}
              className="absolute top-[-24px] right-[50%] mobile:right-[95%] translate-x-[100%]"
            />
            <span className="absolute top-[48px] mobile:top-2 right-0 w-[50%] mobile:w-[95%] h-[40px] mobile:h-6 bg-[#5fc576] rounded-[32px] shadow-xl">
              <p className="ml-2 text-left">React</p>
            </span>
          </div>
          <div className="relative">
            <img
              src="/svg/react.svg"
              alt="skills-react-native"
              width={isMobile ? 28 : 64}
              className="absolute top-[-24px] right-[40%] mobile:right-[85%] translate-x-[100%]"
            />

            <span className="absolute top-[48px] mobile:top-2 right-0 w-[40%] mobile:w-[85%] h-[40px] mobile:h-6 bg-[#88c644] rounded-[32px] shadow-xl">
              <p className="ml-2 text-left">React Native</p>
            </span>
          </div>
          <div className="relative">
            <img
              src="/svg/three.svg"
              alt="skills-three"
              width={isMobile ? 28 : 64}
              className="absolute top-[-24px] right-[35%] mobile:right-[75%] translate-x-[100%]"
            />
            <span className="absolute top-[48px] mobile:top-2 right-0 w-[35%] mobile:w-[75%] h-[40px] mobile:h-6 bg-[#c5c848] rounded-[32px] shadow-xl">
              <p className="ml-2 text-left">Three.js</p>
            </span>
          </div>
          <div className="relative">
            <img
              src="/svg/python.svg"
              alt="skills-python"
              width={isMobile ? 28 : 64}
              className="absolute top-[-24px] right-[30%] mobile:right-[60%] translate-x-[100%]"
            />
            <span className="absolute top-[48px] mobile:top-2 right-0 w-[30%] mobile:w-[60%] h-[40px] mobile:h-6 bg-[#c5c848] rounded-[32px] shadow-xl">
              <p className="ml-2 text-left">Python</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ThirdSection() {
  return <section className="section-wrapper"></section>;
}

function FourthSection() {
  return <section className="section-wrapper"></section>;
}

function MobileFloatingInfo() {
  return (
    <article className="floating-wrapper">
      <div className="content info">
        <div className="information">
          <h2>
            안녕하세요,
            <br />
            3년차 프론트엔드 개발자
            <br /> 이혜원입니다!
          </h2>
        </div>
        <div className="history">
          <div>
            <h3>1997.02.03</h3>
            <p>출생</p>
          </div>
          <div>
            <h3>2015.03 - 2020.02</h3>
            <p>서울여자대학교 졸업</p>
          </div>
          <div>
            <h3>2021.04 - 2021.10</h3>
            <p>도미네이트 (데이터 분석)</p>
          </div>
          <div>
            <h3>2022.04 - </h3>
            <p>메이데이 파트너스 (프론트엔드 개발)</p>
          </div>
          <div>
            <h3>2023.12 -</h3>
            <p>
              프로그래머스 <br /> KDT 클라우딩 어플리케이션
              <br /> 엔지니어링 과정 멘토
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function FloatingWorks() {
  const [modalType, setModalType] = useState('');

  const onClickWorks = (works: string) => {
    setModalType(works);
  };

  const renderComponent = () => {
    switch (modalType) {
      case 'shakerrr':
        return <Shakerrr isModal={true} />;
      case 'dokdo':
        return <Dokdo isModal={true} />;
      case 'wevent':
        return <Wevent isModal={true} />;
      case 'kovo':
        return <Kovo isModal={true} />;
      case 'matchdiary':
        return <MatchDiary isModal={true} />;
      default:
        return <></>;
    }
  };

  return (
    <article className="floating-wrapper">
      <div className="content works">
        <WorksCard
          image={'/works/shakerrr_1.png'}
          title="Shakerrr"
          desc="인플루언서 공동구매 쇼핑몰 플랫폼의 백오피스 개발을 맡았습니다."
          stack={['TypeScript', 'React', 'Redux']}
          onClick={() => onClickWorks('shakerrr')}
        />
        <WorksCard
          image={'/works/dokdo_1.png'}
          title="독도체험관"
          desc="독도체험관 웹페이지 리뉴얼 시 및 최신화 프로젝트의 백오피스 개발을 맡았습니다."
          stack={['TypeScript', 'React', 'Next.js', 'pm2']}
          onClick={() => onClickWorks('dokdo')}
        />
        <WorksCard
          image={'/works/wevent_main_1.png'}
          title="Wevent"
          desc="
            MICE 플랫폼으로서 온/오프라인 이벤트 개최를 통해 네트워크 형성을 위한 공간을 제공하는 플랫폼을 개발하였습니다."
          stack={['React', 'Recoil', 'Stomp.js', 'npm', 'storybook', 'aws']}
          onClick={() => onClickWorks('wevent')}
        />
        <WorksCard
          image={'/works/kovo_web_1.png'}
          title="한국배구연맹"
          desc="한국 배구연맹(KOVO) 및 14개 구단의 통합 웹사이트와 앱을 개발하였습니다."
          stack={['React', 'React Native', 'Recoil', 'Vercel']}
          onClick={() => onClickWorks('kovo')}
        />
        <WorksCard
          image={"/works/5.5' (1).png"}
          title="직관일기"
          desc="쉽게 나의 직관 일기를 기록할 수 있는 직관일기 서비스를 기획 / 디자인 / 개발 하여 운영하고 있습니다."
          stack={['React Native', 'Zustand', 'Python', 'Strapi', 'Heroku']}
          onClick={() => onClickWorks('matchdiary')}
        />
      </div>

      <Modal
        open={!!modalType}
        title={modalType.toLocaleUpperCase()}
        content={renderComponent()}
        onClose={() => setModalType('')}
      />
    </article>
  );
}

function FloatingContact() {
  return (
    <article className="floating-wrapper">
      <div className="content contact">
        <div onClick={() => window.open('https://github.com/hyeoz')}>
          <img
            src="/svg/github.svg"
            alt="contact-github"
            width={48}
            className="mobile:w-8"
          />
        </div>
        <div onClick={() => window.open('https://www.instagram.com/hye_oz/')}>
          <img
            src="/svg/instagram.svg"
            alt="contact-instagram"
            width={48}
            className="mobile:w-8"
          />
        </div>
        <div
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/%ED%98%9C%EC%9B%90-%EC%9D%B4-5a695412b/'
            )
          }
        >
          <img
            src="/svg/linkedin.svg"
            alt="contact-linkedin"
            width={48}
            className="mobile:w-8"
          />
        </div>
        <div onClick={() => window.open('https://hyeoz.tistory.com/')}>
          <img
            src="/svg/tistory.svg"
            alt="contact-tistory"
            width={48}
            className="mobile:w-8"
          />
        </div>
        <div onClick={() => window.open('https://www.youtube.com/@hye_oz')}>
          <img
            src="/svg/youtube.svg"
            alt="contact-youtube"
            width={48}
            className="mobile:w-8"
          />
        </div>
      </div>
    </article>
  );
}
export default HtmlContent;
