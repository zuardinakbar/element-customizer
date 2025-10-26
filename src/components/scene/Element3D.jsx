import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import useSceneState from "../../hooks/UseSceneState";
import * as THREE from "three";

function Element3D() {
    const { color, finish, transparent } = useSceneState((s) => s.sceneState.element);
    const gltf = useLoader(GLTFLoader, "public/assets/models/element_2x4.gltf");
    const elementObject = useMemo(() => {
        const sceneClone = gltf.scene.clone(true);

        const plasticMaterial = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(color),
            roughness: 0.7,
            metalness: 0.1,
            clearcoat: finish,
            clearcoatRoughness: 0.05,
            transparent: transparent,
            opacity: 0.75
        });

        sceneClone.traverse((child) => {
            if (child.isMesh) {
                if (child.material) child.material.dispose();
                child.material = plasticMaterial;
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });

        return sceneClone;
    }, [gltf, color, finish, transparent]);

    return (
        <>
            <primitive object={elementObject}
                scale={25}
                dispose={null}
            />
        </>
    );
};
export default Element3D;