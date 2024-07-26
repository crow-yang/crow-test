/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 scene.gltf --transform --types 
Files: scene.gltf [145.87KB] > /Users/crow/Desktop/crow/crow-test/toss-cat-practice/public/cat/scene-transformed.glb [591.32KB] (-305%)
Author: cacaoin3d (https://sketchfab.com/cacaoin3d)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/little-cat-1e6f360989b04b53a393f398d5372205
Title: Little Cat
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useSpring, animated } from '@react-spring/three'

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

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function Model(props: any) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF('cat_copy/scene-transformed.glb') as GLTFResult

  return (
    <group name="Sketchfab_Scene" scale={4} >
      <primitive object={nodes._rootJoint} rotation-y={-Math.PI/6} />
      <skinnedMesh name="Object_27" geometry={nodes.Object_27.geometry} material={materials.Body} skeleton={nodes.Object_27.skeleton} scale={0.625} />
      <skinnedMesh name="Object_29" geometry={nodes.Object_29.geometry} material={materials.Eyes} skeleton={nodes.Object_29.skeleton} scale={0.625} />
      <skinnedMesh name="Object_33" geometry={nodes.Object_33.geometry} material={materials.Ears_Cat} skeleton={nodes.Object_33.skeleton} scale={0.625} />
      <skinnedMesh name="Object_31" geometry={nodes.Object_31.geometry} material={materials.Eyebrows} skeleton={nodes.Object_31.skeleton} morphTargetDictionary={nodes.Object_31.morphTargetDictionary} morphTargetInfluences={nodes.Object_31.morphTargetInfluences} scale={0.625} />
      <skinnedMesh name="Object_35" geometry={nodes.Object_35.geometry} material={materials.EyelidsTail_Cat} skeleton={nodes.Object_35.skeleton} morphTargetDictionary={nodes.Object_35.morphTargetDictionary} morphTargetInfluences={nodes.Object_35.morphTargetInfluences} scale={0.625} />
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
