import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import useSceneState from "../../hooks/UseSceneState";
import * as THREE from "three";

function Element3D() {
    const { color, finish, transparent } = useSceneState((s) => s.sceneState.element);
    const gltf = useLoader(GLTFLoader, "/assets/models/element_2x4.gltf");

    // Memoize the cloned scene with updated materials to avoid unnecessary recalculations
    const elementObject = useMemo(() => {
        // Deep clone the loaded scene so we can safely modify materials without affecting other instances
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

        // Traverse the cloned scene tree and only apply changes to mesh
        sceneClone.traverse((child) => {
            if (child.isMesh) {
                if (child.material) child.material.dispose();
                child.material = plasticMaterial;
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });

        return sceneClone;
    }, [gltf, color, finish, transparent]); // Recompute if any dependency changes

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