import { useState } from 'react';

import Modal from './Modal';
import '../styles/content.css';
import { CustomScrollStateType } from '../types/canvas';
import { Shakerrr } from './works/Shakerrr';
import { Dokdo } from './works/Dokdo';
import { Wevent } from './works/Wevent';
import { Kovo } from './works/Kovo';
import { MatchDiary } from './works/MatchDiary';

/* TODO
  - 모바일 반응형 적용
  - 라우팅
*/

function HtmlContent({ scrollState, setScrollState }: CustomScrollStateType) {
  return (
    <>
      <Header scrollState={scrollState} setScrollState={setScrollState} />
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
      <FloatingWorks />
      <FloatingContact />
    </>
  );
}

function Header({ scrollState, setScrollState }: CustomScrollStateType) {
  const isSelected = () => {
    if (scrollState <= 3 / 4) {
      return 'INFO';
    } else if (scrollState <= 6 / 4) {
      return 'SKILLS';
    } else if (scrollState <= 9 / 4) {
      return 'WORKS';
    } else {
      return 'CONTACT';
    }
  };

  const onClickTab = (tab: string) => {
    switch (tab) {
      case 'INFO':
      default:
    }
  };

  return (
    <div
      className="html-header"
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <h1>hyeoz</h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 48,
          fontFamily: 'IBM Plex Sans KR',
          fontWeight: 700,
          fontSize: '1.5rem',
          backgroundColor: '#fff',
          padding: '8px 48px',
          borderRadius: '32px',
          margin: '0 auto',
        }}
      >
        <p
          className="transition ease-in-out delay-150"
          style={{
            color: isSelected() === 'INFO' ? '#f6ead5' : '#000',
          }}
          onClick={() => onClickTab('INFO')}
        >
          INFO
        </p>
        <p
          className="transition ease-in-out delay-150"
          style={{
            color: isSelected() === 'SKILLS' ? '#f6d9d5' : '#000',
          }}
        >
          SKILLS
        </p>
        <p
          className="transition ease-in-out delay-150"
          style={{
            color: isSelected() === 'WORKS' ? '#bae1ff' : '#000',
          }}
        >
          WORKS
        </p>
        <p
          className="transition ease-in-out delay-150"
          style={{
            color: isSelected() === 'CONTACT' ? '#c9df8a' : '#000',
          }}
        >
          CONTACT
        </p>
      </div>
    </div>
  );
}

function FirstSection() {
  return (
    <section className="section-wrapper">
      <div className="content-wrapper">
        <div className="content info">
          <div>
            <h2>
              안녕하세요, {/* <br /> */} 3년차 프론트엔드 개발자 이혜원입니다!
            </h2>
            <br />
            <p>
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
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                justifyContent: 'center',
                borderRadius: 999,
              }}
            >
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
                <p>
                  메이데이 파트너스 <br />
                  (프론트엔드 개발)
                </p>
              </div>
              <div>
                <h3>2023.12 -</h3>
                <p className="text-left">
                  프로그래머스 <br /> KDT 클라우딩 어플리케이션
                  <br /> 엔지니어링 과정 멘토
                </p>
              </div>
            </div>
            <div
              style={{
                aspectRatio: 1 / 1,
                borderRadius: 999,
                width: '30vw',
                height: '30vw',
                backgroundColor: 'rgba(0,0,0,0.2)',
                margin: '0 32px',
                position: 'absolute',
                left: '60%',
                top: '80%',
                transform: 'translate(-100%, -10%)',
                zIndex: 0,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SecondSection({ scrollState }: CustomScrollStateType) {
  const isAnimationStart = scrollState >= 3 / 4;
  return (
    <section className="section-wrapper">
      {/* <div className="back-title">
        <h1>SKILLS</h1>
      </div> */}
      <div className="flex items-center justify-end h-full mr-12">
        {/* {isAnimationStart && ( */}
        <div
          className={`skills-animation ${isAnimationStart ? 'start' : ''} w-1/2 text-right flex flex-col gap-[128px]`}
        >
          <div className="relative">
            <img
              src="/svg/typescript.svg"
              alt="skills-typescript"
              width={64}
              className="absolute top-[-24px] right-[45%] translate-x-[100%]"
            />
            <span className="absolute top-[48px] right-0 w-[45%] h-[40px] bg-[#5fc576] rounded-[32px] shadow-xl">
              <p className="ml-2 text-left">TypeScript</p>
            </span>
            {/* <span className="absolute w-1/2 h-[2px] bg-[#b4b4b4] bottom-[-50px] right-0" /> */}
          </div>
          <div className="relative">
            <img
              src="/svg/react.svg"
              alt="skills-react"
              width={64}
              className="absolute top-[-24px] right-[50%] translate-x-[100%]"
            />
            <span className="absolute top-[48px] right-0 w-[50%] h-[40px] bg-[#5fc576] rounded-[32px] shadow-xl">
              <p className="ml-2 text-left">React</p>
            </span>
            {/* <span className="absolute w-1/2 h-[2px] bg-[#b4b4b4] bottom-[-50px] right-0" /> */}
          </div>
          <div className="relative">
            <img
              src="/svg/react.svg"
              alt="skills-react-native"
              width={64}
              className="absolute top-[-24px] right-[40%] translate-x-[100%]"
            />

            <span className="absolute top-[48px] right-0 w-[40%] h-[40px] bg-[#88c644] rounded-[32px] shadow-xl">
              <p className="ml-2 text-left">React Native</p>
            </span>
            {/* <span className="absolute w-1/2 h-[2px] bg-[#b4b4b4] bottom-[-50px] right-0" /> */}
          </div>
          <div className="relative">
            <img
              src="/svg/three.svg"
              alt="skills-three"
              width={64}
              className="absolute top-[-24px] right-[35%] translate-x-[100%]"
            />
            <span className="absolute top-[48px] right-0 w-[35%] h-[40px] bg-[#c5c848] rounded-[32px] shadow-xl">
              <p className="ml-2 text-left">Three.js</p>
            </span>
            {/* <span className="absolute w-1/2 h-[2px] bg-[#b4b4b4] bottom-[-50px] right-0" /> */}
          </div>
          <div className="relative">
            <img
              src="/svg/python.svg"
              alt="skills-python"
              width={64}
              className="absolute top-[-24px] right-[30%] translate-x-[100%]"
            />
            <span className="absolute top-[48px] right-0 w-[30%] h-[40px] bg-[#c5c848] rounded-[32px] shadow-xl">
              <p className="ml-2 text-left">Python</p>
            </span>
          </div>
        </div>
        {/* )} */}
      </div>
    </section>
  );
}

function ThirdSection() {
  return (
    <section className="section-wrapper">
      {/* <div className="back-title">
        <h1>
          <span>WORKS</span>
        </h1>
      </div> */}
    </section>
  );
}

function FourthSection() {
  return (
    <section className="section-wrapper">
      {/* <div className="back-title">
        <h1>
          <span>CON</span>
          <span>TACT</span>
        </h1>
      </div> */}
    </section>
  );
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
          <br />
          <p>
            데이터 분석을 시작으로 프론트엔드 개발을 접하게 되었고, 현재는
            리액트와 리액트 네이티브를 주로 사용하는 웹/앱 개발자가 되었습니다.
            <br /> 동시에 프론트엔드 교육 과정의 멘토로 2기째 활동중이고, 직접
            개발한 직관일기 라는 서비스를 운영하는 운영자 이기도 합니다.
            {/* 저는 파이썬을 통한 데이터분석으로 코딩에 입문하여, 현재는 웹, 앱
            프론트엔드 개발자로 일하고 있습니다. */}
            {/* 리액트를 주로 사용하고,
            리액트-스러운 개발을 위헤 컴포넌트 재사용성에 대해 고민함과 동시에
            사용자 편리성을 위해 더 나은 기능을 구현하려고 노력하고 있습니다! */}
          </p>
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
      default:
        return <MatchDiary isModal={true} />;
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

function WorksCard({
  image,
  title,
  desc,
  stack,
  onClick,
}: {
  image: string;
  title: string;
  desc: string;
  stack: string[];
  onClick: () => void;
}) {
  return (
    <div
      className="flex flex-col h-[450px] border rounded-xl p-4 justify-between cursor-pointer"
      style={{
        backgroundColor: 'rgba(255,255,255,0.8)',
      }}
      onClick={() => onClick()}
    >
      <img
        src={image}
        alt={`image-${title}`}
        className="w-full h-[300px] object-cover object-top"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <p className="text-[#4f5bd5]">{stack.map((st) => `#${st} `)}</p>
      </div>
    </div>
  );
}

function FloatingContact() {
  return (
    <article className="floating-wrapper">
      <div className="content contact">
        <div onClick={() => window.open('https://github.com/hyeoz')}>
          <img src="/svg/github.svg" alt="contact-github" />
        </div>
        <div onClick={() => window.open('https://www.instagram.com/hye_oz/')}>
          <img src="/svg/instagram.svg" alt="contact-instagram" />
        </div>
        <div
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/%ED%98%9C%EC%9B%90-%EC%9D%B4-5a695412b/'
            )
          }
        >
          <img src="/svg/linkedin.svg" alt="contact-linkedin" />
        </div>
        <div onClick={() => window.open('https://hyeoz.tistory.com/')}>
          <img src="/svg/tistory.svg" alt="contact-tistory" />
        </div>
        <div onClick={() => window.open('https://www.youtube.com/@hye_oz')}>
          <img src="/svg/youtube.svg" alt="contact-youtube" />
        </div>
      </div>
    </article>
  );
}
export default HtmlContent;
