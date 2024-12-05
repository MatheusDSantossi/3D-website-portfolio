import * as THREE from 'three';
// import getLayer from '../libs'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { MeshLine, MeshLineGeometry, MeshLineMaterial } from '../MeshLine';
import { UnrealBloomPass } from 'three/examples/jsm/Addons.js';
import { EffectComposer } from 'three/examples/jsm/Addons.js';
import { RenderPass } from 'three/examples/jsm/Addons.js';
import { useEffect, useRef, useState } from 'react';


const Line = () => {

    const containerRef = useRef(null);

    //TODO: Verify if WebGL is allowed in the user computer

    useEffect(() => {

        const container = containerRef.current;

        if (!container) return;

        // Renderer, Scene, and Camera
        const w = container.offsetWidth;
        const h = container.offsetHeight;

        const canvas = document.createElement("canvas");
        container.appendChild(canvas);

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;


        container.appendChild(renderer.domElement);
        renderer.setSize(w, h);
        container.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
        camera.position.z = 5;

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.03;

        // Disable zoom
        controls.enableZoom = false;

        // Bloom UnrealBloomPass
        const renderScene = new RenderPass(scene, camera);
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 1.5, 0.5, 0.15);
        // bloomPass.threshold = 0.1;
        // bloomPass.strength = 1.5;
        // bloomPass.radius = 0.1;
        const composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);

        const texLoader = new THREE.TextureLoader();

        const linesGroup = new THREE.Group();

        linesGroup.userData.update = function (t) {
            linesGroup.children.forEach((line) => line.userData.update(t));
        };

        const textureLoader = new THREE.TextureLoader();
        const backgroundTexture = textureLoader.load('/src/assets/herobg.png');

        scene.background = new THREE.Color('#050816');
        // scene.background = backgroundTexture;

        scene.add(linesGroup);
        

        function getMeshLine(index) {
            const points = [];
            const numPoints = 300;

            for (let i = 0; i < numPoints; i++) {
                // let x = -1.5 * i * 0.05;
                let x = -2.5 * i * 0.05;
                let y = Math.sin(i * 0.075);
                points.push(x, y, 0);
            }

            const geometry = new MeshLineGeometry();
            geometry.setPoints(points);

            const hue = 0.75 - index * 0.02
            const lightness = 0.5 - index * 0.02;
            const color = new THREE.Color().setHSL(hue, 1.0, lightness)

            const material = new MeshLineMaterial({
                color,
                map: texLoader.load('./strokes/stroke-02.png'),
                useMap: true,
                alphaTest: 0.5,
                transparent: true,
                resolution: new THREE.Vector2(w, h),
                // lineWidth: 1.5,
                lineWidth: 0.5,
                blending: THREE.AdditiveBlending,

            });

            const meshLine = new MeshLine(geometry, material);

            const offset = index + 30;
            const amplitude = 1;
            const waveLength = 0.015;
            // const waveLength = 0.02;

            meshLine.userData.update =
                function (t) {
                    // console.log(`Updating line at offset ${offset}`);
                    for (let p = 0, len = points.length; p < len; p += 3) {
                        points[p + 1] = Math.sin((p - t * offset) * waveLength) * amplitude;
                    }
                    geometry.setPoints(points, (p) => 1);
                };

            return meshLine;
        }

        // scene.add(meshLine);

        // Sprites BG
        // const grandientBackground = getLayer({
        //     hue: 0.6,
        //     numSprites: 8,
        //     opacity: 0.2,
        //     radius: 10,
        //     size: 24,
        //     z: -10.5,
        // });

        // scene.add(grandientBackground);

        const numLines = 5;

        for (let i = 0; i < numLines; i++) {
            const line = getMeshLine(i);
            line.position.y = i * 0.2 - 2;
            line.position.z = i * -0.3;
            line.position.x = i * 1 + 8;
            linesGroup.add(line);
        }
        // const line = getMeshLine();
        // scene.add(line);


        function animate(t = 0) {
            requestAnimationFrame(animate);
            linesGroup.userData.update(t * 0.001);
            composer.render(scene, camera); // Render using composer for bloom effect
            controls.update();
        }

        animate();

        // Handle window resize
        function handleWindowResize() {
            const w = container.offsetWidth;
            const h = container.offsetHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
            composer.setSize(w, h);
        }

        window.addEventListener('resize', handleWindowResize, false);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
            container.removeChild(renderer.domElement);
            renderer.dispose();
            composer.dispose();
            // scene.dispose();
            linesGroup.clear();
        };
    }, []);

    return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
};

export default Line;
