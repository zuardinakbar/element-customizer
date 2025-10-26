import { useLoadScene, useUploadScene } from "../../../hooks/UseLoadScene";

export default function SceneLoader() {
    const { load, loading: loadingLoad } = useLoadScene("/data/scene.json");
    const { upload, loading: loadingUpload } = useUploadScene("/data/scene.json");

    return (
        <div style={{ display: "flex", gap: "10px" }}>
            <h3>Load / Upload Scene</h3>
            <button onClick={load} disabled={loadingLoad}>
                {loadingLoad ? "Loading..." : "Load Scene"}
            </button>
            <button onClick={upload} disabled={loadingUpload}>
                {loadingUpload ? "Uploading..." : "Upload Scene"}
            </button>
        </div>
    );
}