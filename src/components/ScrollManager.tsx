import { ScrollControlsState, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ScrollManagre({
  section,
  setSection,
}: {
  section: number;
  setSection: Dispatch<SetStateAction<number>>;
}) {
  const scroll: ScrollControlsState & { scroll?: { current: number } } =
    useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  scroll.fill.style['position'] = 'absolute';
  scroll.fill.style['top'] = '0';

  useEffect(() => {
    gsap.to(scroll.el, {
      duration: 1,
      scrollTop: section * scroll.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [section]);

  useFrame(() => {
    if (!scroll.scroll) return;

    if (isAnimating.current) {
      lastScroll.current = scroll.scroll.current;
      return;
    }

    const currentSection = Math.floor(scroll.scroll.current * scroll.pages);
    // console.log(
    //   Math.floor(+scroll.scroll.current.toFixed(4) * 1000) / 1000,
    //   currentSection,
    //   '??',
    //   scroll.scroll.current > 2 / (scroll.pages - 1)
    // );

    // NOTE TOP TO BOTTOM
    // 두번째 섹션 이동
    if (scroll.scroll.current > lastScroll.current && currentSection === 0) {
      setSection(1);
    }
    // 세번째 섹션 이동
    if (
      scroll.scroll.current > 1 / (scroll.pages - 1) &&
      currentSection === 1
    ) {
      setSection(2);
    }
    // 네번째 섹션 이동
    if (
      Math.floor(+scroll.scroll.current.toFixed(4) * 1000) / 1000 >
        2 / (scroll.pages - 1) &&
      currentSection === 2
    ) {
      setSection(3);
    }
    // NOTE BOTTOM TO TOP
    // 첫번째 섹션 이동
    if (
      scroll.scroll.current < lastScroll.current &&
      scroll.scroll.current < 1 / (scroll.pages - 1)
    ) {
      setSection(0);
    }
    // 두번째 섹션 이동
    if (
      scroll.scroll.current < lastScroll.current &&
      scroll.scroll.current < 2 / (scroll.pages - 1) &&
      currentSection === 2
    ) {
      setSection(1);
    }
    // 세번째 섹션 이동
    if (
      scroll.scroll.current < lastScroll.current &&
      scroll.scroll.current < 1 &&
      currentSection === 3
    ) {
      setSection(2);
    }

    lastScroll.current = scroll.scroll.current;
  });

  return null;
}
