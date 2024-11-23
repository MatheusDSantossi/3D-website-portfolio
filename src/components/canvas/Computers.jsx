import React, { Suspense, useEffect, useState, memo} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';
// import { ComputersCanvas } from '.';

const Computers = ({ isMobile }) => {
  // const computer = useGLTF('./desktop_pc/scene.gltf');
  const { scene } = useGLTF('./desktop_pc/scene.gltf', true, (error) => {
    console.error('Error loading computer model: ', error);
  });
  
  useEffect(() => {
    return () => {
      if (scene) scene.dispose(); // Cleanup GLTF model when comonent unmounts
    }
  }, [scene])

  return (
    <mesh>
      <hemisphereLight intensity={0.99} groundColor='black' />
      <spotLight 
        position={[-10, 50, 10]}
        angle={0.12}
        penumbra={0.5}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive 
      object={scene}
      scale={isMobile ? 0.6 : 0.65}
      position={isMobile ? [0, -4, -2.2] : [0, -4.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]} 
      />
    </mesh>
  )
}

const ComputersCanvas = memo(() => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    // console.log('Canvas mounted');
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    console.log("Canvas Mounted");
    // Remove the listener when the component unmounts to avoid memory leaks
    return () => {  
      console.log("Canvas Unmounted");
      
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
   
  }, []);

  return (
    <Canvas 
    frameloop='demand'
    shadows
    dpr={[1, 2]}
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        enableZoom={false} 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
});

export default ComputersCanvas
