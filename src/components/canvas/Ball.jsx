import { Suspense, useEffect } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  const texture = useLoader(THREE.TextureLoader, imgUrl);
  const { gl, invalidate } = useThree();

  useEffect(() => {
    if (!texture) return;

    // Making texture look correct on sRGB encoded assests (common for icons)
    texture.encoding = THREE.sRGBEncoding;

    // Anisotropy improves sharpness
    const maxAniso = gl.capabilities ? gl.capabilities.getMaxAnisotropy() : 1;
    texture.anisotropy = maxAniso || 1;
    texture.needsUpdate = true;

    // force a render (important if frameloop='demand')
    invalidate();
  }, [texture, gl, invalidate]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatingRange={2}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          // map={decal}
          map={texture}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
