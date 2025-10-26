import * as THREE from "three";
import { useLoader, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import useSceneState from "../../hooks/UseSceneState";

function SceneBackground() {
    const { scene } = useThree();
    const { background, color } = useSceneState((s) => s.sceneState.scene);

    let _background;
    let texture;

    if (background !== '') {
        texture = useLoader(THREE.TextureLoader, background);
        texture.colorSpace = THREE.SRGBColorSpace;
        _background = texture;
    } else {
        _background = new THREE.Color(color);
    }

    useEffect(() => {
        scene.background = _background;
    }, [texture, scene, color]);
    return null;
}
export default SceneBackground; 
