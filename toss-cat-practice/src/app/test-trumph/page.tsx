"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Model } from "./Model";

// const Model = () => {
//   const gltf = useLoader(GLTFLoader, "trumph/scene.gltf");
//   const { scene } = gltf;
//   useFrame(() => {
//     scene.rotation.y = +0.01;
//   });

//   return (
//     <>
//       <primitive object={gltf.scene} scale={5} />
//     </>
//   );
// };

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
