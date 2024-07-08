"use client";

import "./style.css";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Model } from "./Model";
import TalkBalloon from "./TalkBalloon";
import { v4 } from "uuid";

interface BalloonState {
  id: number;
  position: [number, number, number];
}


export default function TossCat() {
  const [isInit, setIsInit]= useState(false);
  const [balloons, setBalloons] = useState<any[]>([]);

  useEffect(() => {
    setTimeout(() => setIsInit(true), 500);
  }, []);

  return (
    <main className={`w-full h-screen flex items-center justify-center ${isInit ? "visible" : "invisible"}`}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <Model addBalloon={(event: any) => {
            const [x, y, z] = [0, event.point.y, 0];
            setBalloons([...balloons, { id: v4(), position: [x, y, z] }]);
          }} />
          {balloons.map((balloon) => {
            return <TalkBalloon
              key={balloon.id}
              position={balloon.position}
              onRemove={() => setBalloons((balloons) => balloons.filter((b) => b.id !== balloon.id))}/>
          })}
        </Suspense>
      </Canvas>
    </main>
  );
}
