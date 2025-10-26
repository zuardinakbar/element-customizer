
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei'
import './Scene3DStyle.css'
import Element3D from './Element3D'
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import SceneBackground from './SceneBackground'

// Main 3D Canvas for the whole visualization
function Scene3D() {
    return (
        <div className='scene-3d'>
            <Canvas
                gl={{
                    toneMapping: THREE.ACESFilmicToneMapping,
                    outputEncoding: THREE.sRGBEncoding,
                    physicallyCorrectLights: true,
                }}
                camera={{ position: [-1, 1, 1], fov: 45 }}
                shadows={true}
            >
                <SceneBackground/>
                <Element3D />
                <ambientLight intensity={0.3} />
                <directionalLight
                    position={[5, 10, 5]}
                    intensity={1}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-bias={-0.001}
                />
                <directionalLight position={[-5, 5, -5]} intensity={0.5} />
                <Environment preset="city" />
                <OrbitControls
                    enablePan={false}
                />
                {/* Post-Processing Effects for realism */}
                <EffectComposer>
                    <Bloom
                        luminanceThreshold={1} // Only apply to areas brighter than this
                        luminanceSmoothing={0.3}
                        intensity={0.1} // Adjust intensity to preference
                    />
                </EffectComposer>
            </Canvas>
        </div>
    );
};

export default Scene3D;