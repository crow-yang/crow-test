import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group, Object3DEventMap } from "three";
import { useInterval } from "./useInterval";
import * as THREE from 'three'

export default function useCursorRotation(group: THREE.Group | null) {
  const scroll = useScroll();

  // const initPos =() => {
  //   setTimeout(() => {
  //     scroll.el.scrollLeft = scroll.el.scrollWidth / 3;
  //   }, 20);
  // }
  // useEffect(initPos, []);

  const isTouched= useRef(false);
  const touchStartY = useRef(null);
  const touchStartX = useRef(null);
  useEffect(() => {
    const handleTouchStart = (e: any) => {
      isTouched.current = true;
      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = () => {
      isTouched.current = false;
      touchStartY.current = null;
    };

    const xRotate = (e: any) => {
      if (!group) return;
      const currentY = e.touches[0].clientY;
      const diffY = currentY - (touchStartY.current || 0);
      const rotationXtick = diffY / 10000;
      const nextRotaionX = group.rotation.x + rotationXtick;
      if (nextRotaionX < 0 || nextRotaionX > 0.4) return;
      group.rotation.x = nextRotaionX;
    };
    const yRotate = (e: any) => {
      if (!group) return;
      const currentX = e.touches[0].clientX;
      const diffX = currentX - (touchStartX.current || 0);
      const rotationYtick = diffX / 5000;
      const nextRotaionY = group.rotation.y + rotationYtick;
      group.rotation.y = nextRotaionY;
    };
    const handleTouchMove = (e: any) => {
        xRotate(e);
        yRotate(e);
    };
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [group]);

  useFrame(() => {
    if (isTouched.current || !group) return;
    const xTick = 0.01;
    const xDiff = group.rotation.x;
    if (Math.abs(xDiff) < xTick) {
      group.rotation.x = 0;
    } else if (xDiff > 0) {
      group.rotation.x -= xTick;
    } else {
      group.rotation.x += xTick;
    }
    const yTick = 0.05;
    const yDiff = group.rotation.y;
    if (Math.abs(yDiff) < yTick) {
      group.rotation.y = 0;
    } else if (yDiff > 0) {
      group.rotation.y -= yTick;
    } else {
      group.rotation.y += yTick;
    }
  });
}