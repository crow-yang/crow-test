"use client";

import "./style.css";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { ScrollControls } from '@react-three/drei'
import { CatModel } from "./CatModel";

export default function TossCat() {
  const [isInit, setIsInit]= useState(false);
  const [hasBox, setHasBox] = useState(false);
  const [hasEar, setHasEar] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsInit(true), 500);
  }, []);
  return (
    <main className={`w-full h-[400px] flex-col items-center justify-center ${isInit ? "visible" : "invisible"}`}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <CatModel hasBox={hasBox} hasEar={hasEar} />
        </Suspense>
      </Canvas>
      <div className="bg-blue-300" onClick={() => setHasEar(prev => !prev)}>{hasEar ? "귀 없애기" : "귀 넣기"}</div>
      <div className="bg-red-300" onClick={() => setHasBox(prev => !prev)}>{hasBox ? "박스 없애기" : "박스 넣기"}</div>
    </main>
  );
}
