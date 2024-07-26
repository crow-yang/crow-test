### 토스고양이 키우기 기능구현 (feat. ThreeJs)

## 토스 고양이 키우기란?
https://post.naver.com/viewer/postView.naver?volumeNo=37022768&memberNo=45682599&vType=VERTICAL

## ThreeJs 란?
https://ko.wikipedia.org/wiki/Three.js

대체 : https://www.babylonjs.com/

코딩애플 입문: https://www.youtube.com/watch?v=CojyGfCMvuU

## GLTF란
https://ko.wikipedia.org/wiki/GlTF

https://sketchfab.com/search?type=models

## GLTF 만들기
https://docs.blender.org/manual/en/2.80/getting_started/index.html

## gltfjsx
PMND가 제공하는 gltfjsx는 GLTF(GL Transmission Format) 파일을 JSX(JavaScript XML)로 변환하는 도구입니다. 이를 통해 Three.js와 React를 사용하는 프로젝트에서 쉽게 3D 모델을 활용할 수 있습니다. 아래는 gltfjsx에 대한 주요 설명입니다:

주요 기능
GLTF 파일을 JSX로 변환:

gltfjsx는 .gltf 또는 .glb 파일을 React 컴포넌트 형태의 JSX 코드로 변환합니다.
이를 통해 GLTF 모델을 React 프로젝트에서 컴포넌트로 쉽게 사용하고, 필요에 따라 속성이나 스타일을 조정할 수 있습니다.
Three.js와 React를 위한 최적화:

변환된 JSX 코드는 Three.js 라이브러리와 호환되며, react-three-fiber를 사용하여 React 환경에서 3D 그래픽을 렌더링할 수 있습니다.
react-three-fiber는 React에서 Three.js를 효율적으로 사용할 수 있도록 도와주는 라이브러리입니다.
자동 컴포넌트 분리:

gltfjsx는 GLTF 파일의 각 부분을 개별 컴포넌트로 분리하여 관리하기 쉽게 만듭니다. 이렇게 하면 복잡한 모델을 효율적으로 다룰 수 있습니다.
재질 및 텍스처 지원:

변환 과정에서 모델의 재질(Materials)과 텍스처(Texture)를 포함한 모든 속성이 유지됩니다.
이를 통해 변환된 JSX 코드에서 GLTF 모델의 원본 외관을 그대로 렌더링할 수 있습니다.

명령어)
npx gltfjsx model.gltf --transform
--types, -t         Add Typescript definitions

pnpx gltfjsx scene.gltf --transform --t





## GLTF 모델 다운받는 곳
https://sketchfab.com/feed

## 구현해야 될 기능
1. 고양이를 화면에 띄운다.
2. 마우스포인트 따라가기
3. 고양이가 동작한다(애니메이션)
4. 꾸미기(악세서리 장탈착)
5. 부수효과(말풍선)
6. 놀아주기, 밥주기등 <- 여러 효과를 짬봉한것으로 여기서는 구현하지 않습니다.(고정된 효과는 webp, lottie 등을 활용할수 있을듯)



# react three fiber 예제들
https://docs.pmnd.rs/react-three-fiber/getting-started/examples
https://codesandbox.io/s/r3f-drei-meshwobblematerial-forked-4hbn17?file=/src/App.js

# rounded 2d 만들기
https://discourse.threejs.org/t/roundedrectangle-squircle/28645 <- 2d rounded된 말풍선 만들기

# 같은 gltf모델 2개 띄우기
https://stackoverflow.com/questions/68813736/use-the-same-gltf-model-twice-in-react-three-fiber-drei-three-js

