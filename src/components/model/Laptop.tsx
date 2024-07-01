import { useEffect, useRef } from 'react';
import { Group, Object3DEventMap } from 'three';
import { useAnimations, useGLTF, useScroll } from '@react-three/drei';
import { GroupProps, useFrame } from '@react-three/fiber';

import useIsMobile from '../../hooks/useIsMobile';
import { CustomScrollStateType } from '../../types/canvas';

export default function Laptop(props: GroupProps & CustomScrollStateType) {
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
    // @ts-ignore
    actions[names[0]].play().paused = false;
    // @ts-ignore
    actions[names[1]].play().paused = true;
  }, []);

  useFrame(() => {
    if (!group.current) return;
    if (!actions[names[0]] || !actions[names[1]]) return;
    if (
      // @ts-ignore
      !actions[names[0]].getClip().duration ||
      // @ts-ignore
      !actions[names[1]].getClip().duration
    )
      return;

    setScrollState(scroll.offset);

    // 스크롤에 따라 position / scale 변경
    if (scroll.offset <= 1.2) {
      group.current.position.x = 2 - (scroll.offset * 4) / 1.2;
      // group.current.scale.x = 2.4 - (scroll.offset * 2.4) / 1.2;
      // group.current.scale.y = 2.4 - (scroll.offset * 2.4) / 1.2;
      // group.current.scale.z = 2.4 - (scroll.offset * 2.4) / 1.2;
    } else if (scroll.offset <= 2.4) {
      group.current.position.x = -2 + ((scroll.offset - 1.2) / 1.2) * 2;
    } else {
      group.current.position.x = 0;
    }

    // 스크롤에 따라 애니메이션
    // const action1 = actions[names[0]];
    const action2 = actions[names[1]];

    // @ts-ignore
    // action1.time = (action1.getClip().duration * scroll.offset) / 2;
    // @ts-ignore
    action2.time = (action2.getClip().duration * scroll.offset) / 3;

    // console.log(scroll.offset);
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={isMobile ? 1.7 : 3}
      position={isMobile ? [-1, -0.5, 0] : [-2, -1, 0]}
    >
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload('./models/laptop-rose.glb');
