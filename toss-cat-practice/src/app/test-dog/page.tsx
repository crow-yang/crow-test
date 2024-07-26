"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Model } from "./Model";

export default function TossCat() {
  return (
    <main className={`w-full h-full`}>
      <Canvas className="w-full" style={{height: "800px"}}>
        <Suspense fallback={null}>
          <ambientLight />
          <Model />
        </Suspense>
      </Canvas>
    </main>
  );
}
