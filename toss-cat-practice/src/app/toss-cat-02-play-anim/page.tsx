"use client";

import "./style.css";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Model } from "./Model";

export default function TossCat() {
  return (
    <main className={`w-full h-screen flex items-center justify-center`}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <Model />
        </Suspense>
      </Canvas>
    </main>
  );
}
