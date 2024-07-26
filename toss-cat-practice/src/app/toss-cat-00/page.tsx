"use client";

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';

export default function TossCat() {
  const canvasRef = useRef(null);
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  useEffect(() => {
    //1.장면 만들기, 이 scene 위에 그림 그릴 수 있음(add)
    if (!mount || !canvasRef.current) return;
    let scene=new THREE.Scene();
    //2.브라우저에 띄우기
    let renderer=new THREE.WebGLRenderer({
        //어디에 띄울지
        canvas: canvasRef.current,
        antialias: true,

    });

    // renderer.outputColorSpace = THREE.SRGBColorSpace;

    //카메라, 조명, 배경 세팅
    const fov = 30;
    const aspect = 2;  // the canvas default
    const near = 0.5;
    const far = 2;

    let camera=new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0,0.15,1)
    scene.background=new THREE.Color('white');
    const ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
    scene.add( ambientLight );

    const dirLight = new THREE.DirectionalLight( 0xefefff, 2 );
    dirLight.position.set( 10, 10, 10 );
    scene.add( dirLight );

    // scene.add(new THREE.GridHelper());


    let loader= new GLTFLoader();
    loader.load('cat/scene.gltf', (gltf) =>{
        //load 된 후 실행될 콜백함수
        scene.add(gltf.scene);
        
        //애니메이션 적용
        function animate(){
            requestAnimationFrame(animate)
            gltf.scene.rotation.y+=0.005;
            renderer.render(scene, camera);
        }
        animate();
    })
  }, [mount]);
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <canvas id="canvas" className='w-[600px] h-[300px]' ref={canvasRef} />
    </main>
  );
}
