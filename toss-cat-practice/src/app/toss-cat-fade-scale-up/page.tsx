"use client";

import "./style.css";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Model } from "./Model";
import TalkBalloon from "./TalkBalloon";
import { v4 } from "uuid";
import { FadeModel } from "./FadeModel";

interface BalloonState {
  id: number;
  position: [number, number, number];
}


export default function TossCat() {
  const [isAnim,setAnim] = useState(false);
  const onClick = () => {
    setAnim(true);
    setTimeout(() => {
      setAnim(false);
    }, 1000);
  }

  console.log(isAnim);

  return (
    <main className={`w-full h-[600px] flex items-center justify-center visible flex-col`}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <FadeModel isAnim={isAnim}/>
          <Model />
        </Suspense>
      </Canvas>
      <div className="bg-slate-400" onClick={onClick}>
        효과주기
      </div>
    </main>
  );
}
