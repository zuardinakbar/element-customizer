// src/components/scene/Scene3D.jsx

import React from 'react';
import { Canvas } from '@react-three/fiber';
import useSceneData from '../../hooks/UseSceneData';

export default function Scene3D() {

    const { sceneData } = useSceneData();
    const { color } = sceneData.element;

    return (
        <div className='scene-3d'>
            <Canvas>
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={color} />
                </mesh>
                <ambientLight intensity={0.5} />
                <pointLight position={[5, 5, 5]} />
            </Canvas>
        </div>
    )
}