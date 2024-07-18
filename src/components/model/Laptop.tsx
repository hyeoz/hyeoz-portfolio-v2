import { useEffect, useRef } from 'react';
import { Group, Object3DEventMap } from 'three';
import { useAnimations, useGLTF, useScroll } from '@react-three/drei';
import { GroupProps, useFrame } from '@react-three/fiber';

import useIsMobile from '../../hooks/useIsMobile';
import { CustomScrollStateType } from '../../types/canvas';

export default function Laptop({
  ...props
}: GroupProps & CustomScrollStateType) {
  const { scrollState, setScrollState } = props;

  const isMobile = useIsMobile();
  const group = useRef<Group<Object3DEventMap> | any>(null);
  const {
    animations,
    scene,
  }: {
    animations: any;
    scene: any;
  } = useGLTF('./models/laptop-rose.glb');
  const { actions, names } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    if (!group || !actions[names[0]] || !actions[names[1]]) return;
    group.current.rotateX((1.0 * Math.PI) / 8); // to convert from Deg to Rad.
    group.current.rotateY((-1.0 * Math.PI) / 2); // to convert from Deg to Rad.

    // 애니메이션 초기화 및 재생
    // @ts-ignore
    // actions[names[0]].reset().setLoop(LoopRepeat, Infinity).play();
    actions[names[0]].reset().play();
    // @ts-ignore
    actions[names[1]].reset().play();
    // actions[names[1]].reset().setLoop(LoopRepeat, Infinity).play();
  }, [actions, names]);

  useFrame((_, delta) => {
    if (!group.current) return;
    if (!actions[names[0]] || !actions[names[1]]) return;
    if (
      // @ts-ignore
      !actions[names[0]].getClip().duration ||
      // @ts-ignore
      !actions[names[1]].getClip().duration
    )
      return;

    // console.log('delta:', scrollState); // delta 값 로그 출력

    setScrollState(scroll.offset);
    const POSITION_BREAKPOINT = isMobile ? 1 : 2;
    const SCROLL_BREAKPOINT = [1.2, 2.4];

    // 스크롤에 따라 position / scale 변경
    if (scroll.offset <= SCROLL_BREAKPOINT[0]) {
      group.current.position.x =
        POSITION_BREAKPOINT -
        (scroll.offset * (isMobile ? 2 : 4)) / SCROLL_BREAKPOINT[0];
      if (isMobile) {
        group.current.position.y =
          1.5 - (scroll.offset * 2) / SCROLL_BREAKPOINT[0];
      }
    } else if (scroll.offset <= SCROLL_BREAKPOINT[1]) {
      group.current.position.x =
        -POSITION_BREAKPOINT +
        ((scroll.offset - SCROLL_BREAKPOINT[0]) / SCROLL_BREAKPOINT[0]) *
          (isMobile ? 1 : 2);
      if (isMobile) {
        group.current.position.y =
          -0.5 +
          ((scroll.offset - SCROLL_BREAKPOINT[0]) / SCROLL_BREAKPOINT[0]) * 0.2;
      }
    } else {
      group.current.position.x = 0;
    }

    // 스크롤과 무관하게 애니메이션 시간 업데이트
    const action1 = actions[names[0]];
    const action2 = actions[names[1]];

    if (delta > 0) {
      // delta 값이 0보다 큰 경우에만 시간 업데이트
      // @ts-ignore
      action1.time += delta / 2;
    }

    // @ts-ignore
    action2.time =
      // @ts-ignore
      (action2.getClip().duration * scroll.offset) / (isMobile ? 4 : 3);
  });
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={isMobile ? 1.7 : 3}
      position={isMobile ? [-0.5, 1.5, 0] : [-2, -1, 0]}
    >
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload('./models/laptop-rose.glb');
