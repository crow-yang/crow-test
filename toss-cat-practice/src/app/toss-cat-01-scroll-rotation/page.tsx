"use client";

import "./style.css";

import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Suspense, useEffect, useRef, useState } from "react";
import { ScrollControls, useScroll } from '@react-three/drei'
import { useInterval } from "./useInterval";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "cat/scene.gltf");
  const { scene } = gltf;
  const scroll = useScroll();

  const initPos =() => {
    setTimeout(() => {
      scroll.el.scrollLeft = scroll.el.scrollWidth / 3;
    }, 20);
  }
  useEffect(initPos, []);

  const isTouched= useRef(false);
  const touchStartY = useRef(null);
  useEffect(() => {
    const handleTouchStart = (e: any) => {
      isTouched.current = true;
      touchStartY.current = e.touches[0].clientY;
    };
    const handleTouchEnd = () => {
      isTouched.current = false;
      touchStartY.current = null;
    };
    const handleTouchMove = (e: any) => {
      const currentY = e.touches[0].clientY;
      const diffY = currentY - (touchStartY.current || 0);
      const rotationXtick = diffY / 10000;
      const nextRotaionX = scene.rotation.x + rotationXtick;
      if (nextRotaionX < 0 || nextRotaionX > 0.4) return;
      scene.rotation.x = nextRotaionX;
    };
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scene]);

  useFrame(() => {
    scene.rotation.y = -(scroll.offset - 0.5) * 2 * Math.PI;
  });

  useInterval(() => {
    if (isTouched.current) return;
    const standard = scroll.el.scrollWidth / 3;
    const scrollTick = scroll.el.scrollWidth / 30;

    const diff = standard - scroll.el.scrollLeft;

    if (Math.abs(diff) < scrollTick) {
      scroll.el.scrollLeft = standard;
    } else if (diff > 0) {
      scroll.el.scrollLeft += scrollTick;
    } else {
      scroll.el.scrollLeft -= scrollTick;
    }
  },25);

  useInterval(() => {
    if (isTouched.current) return;
    const xTick = 0.01;
    const diff = scene.rotation.x;
    if (Math.abs(diff) < xTick) {
      scene.rotation.x = 0;
    } else {
      scene.rotation.x -= xTick;
    }
  },25);
  return (
    <>
      <primitive object={gltf.scene} scale={5} />
    </>
  );
};

export default function TossCat() {
  const [isInit, setIsInit]= useState(false);
  useEffect(() => {
    setTimeout(() => setIsInit(true), 500);
  }, []);
  return (
    <main className={`w-full h-screen flex items-center justify-center ${isInit ? "visible" : "invisible"}`}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <ScrollControls pages={3} horizontal >
            <Model />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </main>
  );
}
