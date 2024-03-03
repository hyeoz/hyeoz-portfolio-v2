import { useScroll } from '@react-three/drei';
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
  const scroll = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

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
    if (isAnimating.current) {
      lastScroll.current = scroll.offset;
      return;
    }

    const currentSection = Math.floor(scroll.offset * scroll.pages);

    if (scroll.offset > lastScroll.current && currentSection === 0) {
      setSection(1);
    }
    if (
      scroll.offset < lastScroll.current &&
      scroll.offset < 1 / (scroll.pages - 1)
    ) {
      setSection(0);
    }
  });

  return null;
}
