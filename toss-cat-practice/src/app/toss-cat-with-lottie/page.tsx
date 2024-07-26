"use client";

import "./style.css";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Model } from "./Model";
import TalkBalloon from "./TalkBalloon";
import { v4 } from "uuid";
import Lottie from "react-lottie";
import lottieJson from "../../../public/heart.json";


interface BalloonState {
  id: number;
  position: [number, number, number];
}


export default function TossCat() {
  const [isInit, setIsInit]= useState(false);
  const [balloons, setBalloons] = useState<any[]>([]);
  const [isLottie, setIsLottie] = useState(false);

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
            setIsLottie(true);
          }} />
          {balloons.map((balloon) => {
            return <TalkBalloon
              key={balloon.id}
              position={balloon.position}
              onRemove={() => setBalloons((balloons) => balloons.filter((b) => b.id !== balloon.id))}/>
          })}
        </Suspense>
      </Canvas>
      {isLottie && <div className="absolute left-0 top-0 w-2/4 h-2/6">
        <Lottie 
          options={{
            loop: false,
            autoplay: true,
            animationData: lottieJson,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
          eventListeners={[
            {
              eventName: 'complete',
              callback: () => setIsLottie(false),
            }
          ]}
        />
      </div>}
    </main>
  );
}
