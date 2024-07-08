import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';

const RoundedPlane = () => {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(0, 10);
  shape.quadraticCurveTo(0, 12, 2, 12); // Adjust curve as needed
  shape.lineTo(8, 12);
  shape.quadraticCurveTo(10, 12, 10, 10); // Adjust curve as needed
  shape.lineTo(10, 0);
  shape.lineTo(0, 0);

  const extrudeSettings = {
    steps: 2,
    depth: 1,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 1,
    bevelOffset: 0,
    bevelSegments: 1,
  };

  return (
    <Canvas>
      <mesh>
        <extrudeGeometry args={[shape, extrudeSettings]} />
        <meshBasicMaterial color="blue" />
      </mesh>
    </Canvas>
  );
};

export default RoundedPlane;
