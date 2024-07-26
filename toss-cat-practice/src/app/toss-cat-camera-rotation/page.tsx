"use client";

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { GLTF } from 'three-stdlib'
import { OrbitControls, useGLTF } from '@react-three/drei';
import { a, useSpring } from '@react-spring/three';
import * as THREE from 'three';

type GLTFResult = GLTF & {
  nodes: {
    Object_27: THREE.SkinnedMesh
    Object_29: THREE.SkinnedMesh
    Object_33: THREE.SkinnedMesh
    Object_31: THREE.SkinnedMesh
    Object_35: THREE.SkinnedMesh
    _rootJoint: THREE.Bone
  }
  materials: {
    Body: THREE.MeshStandardMaterial
    Eyes: THREE.MeshStandardMaterial
    Ears_Cat: THREE.MeshStandardMaterial
    Eyebrows: THREE.MeshStandardMaterial
    EyelidsTail_Cat: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName = '01_TPose_LittleFriends' | '02_Idle_LittleFriends' | '03_Walk_LittleFriends' | '04_Run_LittleFriends' | '05_Jump_LittleFriends' | '06_Greeting_LittleFriends' | '07_Eat_LittleFriends' | '08_Sleep01_LittleFriends' | '09_Sleep02_LittleFriends' | '10_Sleep03_LittleFriends'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}
type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['skinnedMesh'] | JSX.IntrinsicElements['bone']>>


const Model: React.FC = (props: JSX.IntrinsicElements['group']) => {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF('cat/scene-transformed.glb') as GLTFResult

  useFrame(() => {
    console.log(group.current?.rotation.y);
  });

  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene" rotation-y={-Math.PI/6}>
          <primitive object={nodes._rootJoint} scale={5}/>
          <skinnedMesh name="Object_27" geometry={nodes.Object_27.geometry} material={materials.Body} skeleton={nodes.Object_27.skeleton} scale={0.625} />
          <skinnedMesh name="Object_29" geometry={nodes.Object_29.geometry} material={materials.Eyes} skeleton={nodes.Object_29.skeleton} scale={0.625} />
          <skinnedMesh name="Object_33" geometry={nodes.Object_33.geometry} material={materials.Ears_Cat} skeleton={nodes.Object_33.skeleton} scale={0.625} />
          <skinnedMesh name="Object_31" geometry={nodes.Object_31.geometry} material={materials.Eyebrows} skeleton={nodes.Object_31.skeleton} morphTargetDictionary={nodes.Object_31.morphTargetDictionary} morphTargetInfluences={nodes.Object_31.morphTargetInfluences} scale={0.625} />
          <skinnedMesh name="Object_35" geometry={nodes.Object_35.geometry} material={materials.EyelidsTail_Cat} skeleton={nodes.Object_35.skeleton} morphTargetDictionary={nodes.Object_35.morphTargetDictionary} morphTargetInfluences={nodes.Object_35.morphTargetInfluences} scale={0.625} />
        </group>
      </group>
      <OrbitControls 
        minAzimuthAngle={-Math.PI * 0.75}
        maxAzimuthAngle={Math.PI * 0.75}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI * 0.55}
      />
    </>
  );
};

const App: React.FC = () => {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Model />
      </Canvas>
    </main>
  );
};

export default App;