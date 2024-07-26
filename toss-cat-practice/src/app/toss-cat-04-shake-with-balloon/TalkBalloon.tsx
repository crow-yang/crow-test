import { animated, useSpring } from "@react-spring/three";
import { Plane, RoundedBox, Text } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";
import RoundedPlane from "./RoundedBox";


const messages = ["Hello", "Hi", "Greetings", "Welcome", "Bonjour", "Hola"];
const textOptions = {
  size: 10,
  height: 1
};


export default function TalkBalloon({ position, onRemove }: {
  position: [number, number, number];
  onRemove: () => void;
}) {
  const randomX = useMemo(() => (Math.random() * 0.4) - 0.2, []);
  const randomXdiff = useMemo(() => (Math.random() * 4) - 2, []);
  const randomMessage = useMemo(() => messages[Math.floor(Math.random() * messages.length)], []);

  const { pos } = useSpring({
    from: { pos: [0 + randomX, 1.5, 0] },
    to: { pos: [0+ randomXdiff, 1.5 + 5, 0] },
    onRest: () => {
      if (pos.get()[1] > 4) {
        onRemove();
      }
    },
    config: { duration: 3000 },
  });


  return (
    <animated.group position={pos}>
      {/* 풍선 */}
      <mesh >
        {/* <sphereGeometry args={[0.5, 10, 10]} /> */}
        {/* <Plane args={[1, 1]} /> */}
        {/* <RoundedPlane /> */}
        {/* <meshStandardMaterial color="pink" /> */}
        <Text
          position={[0, 0, 0]} // 텍스트를 풍선의 중앙으로 이동
          fontSize={0}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          {randomMessage}
        </Text>
        <RoundedPlane w={1} h={0.5} r={0.15} s={10} />
        {/* <RoundedBox args={[1, 1, 0.1]} radius={0.2} bevelSegments={0} >
          <meshStandardMaterial attach="material" color={"pink"} wireframe/>
        </RoundedBox> */}


      </mesh>
    </animated.group>
  );
}