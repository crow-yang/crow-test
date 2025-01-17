/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 scene.gltf --transform --t 
Files: scene.gltf [605.78KB] > /Users/crow/Desktop/crow/crow-test/toss-cat-practice/public/dog/scene-transformed.glb [516.09KB] (15%)
Author: stylo0 (https://sketchfab.com/stylo0)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/dog-415a0951b0d148c79ff6277b3f527760
Title: Dog
*/

import * as THREE from 'three'
import React, { useCallback } from 'react'
import { useFrame, useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF, SkeletonUtils } from 'three-stdlib'

type ActionName = 'attack1' | 'iddle' | 'jump' | 'run' | 'walk' | 'walksent'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    Object_7: THREE.SkinnedMesh
    GLTF_created_0_rootJoint: THREE.Bone
  }
  materials: {
    dogmat: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = React.useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF('dog/scene-transformed.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone) as GLTFResult
  const { actions } = useAnimations(animations, group);
  const anim = useCallback(() => {
    const action = actions['jump'];
    action?.setLoop(THREE.LoopOnce, 1)?.play()?.reset();
  }, []);

  useFrame(() => {
    // console.log(group.current?.rotation.y)
    if (group.current?.rotation) {
      group.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={group} {...props} dispose={null} position={[0,-2,0]} onClick={anim}>
      <group name="Sketchfab_Scene" rotation-y={Math.PI}>
        <primitive object={nodes.GLTF_created_0_rootJoint} scale={5}/>
        <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.dogmat} skeleton={nodes.Object_7.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('dog/scene-transformed.glb')
