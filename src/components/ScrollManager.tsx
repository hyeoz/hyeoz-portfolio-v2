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
    console.log(scroll.offset, scroll.pages, scroll, 'SCROLL');
    l;

    const currentSection = Math.floor(scroll.scroll.current * scroll.pages);
    if (scroll.scroll.current > lastScroll.current && currentSection === 0) {
      setSection(1);
    }
    if (
      scroll.scroll.current < lastScroll.current &&
      scroll.scroll.current < 1 / (scroll.pages - 1)
    ) {
      setSection(0);
    }
    lastScroll.current = scroll.scroll.current;
  });

  return null;
}
