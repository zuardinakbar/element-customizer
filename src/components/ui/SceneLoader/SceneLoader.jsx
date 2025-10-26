import { useLoadScene, useUploadScene } from "../../../hooks/UseLoadScene";
import "./SceneLoaderStyle.css"

export default function SceneLoader() {
    const { load, loading: loadingLoad } = useLoadScene("/data/scene.json");
    const { upload, loading: loadingUpload } = useUploadScene("/data/scene.json");

    return (
        <div>
            <h3>Load / Upload Scene</h3>
            <div className="ui-scene-loader">
                <button onClick={load} disabled={loadingLoad}>
                    {loadingLoad ? "Loading..." : "Load Scene"}
                </button>
                <button onClick={upload} disabled={loadingUpload}>
                    {loadingUpload ? "Uploading..." : "Upload Scene"}
                </button>
            </div>
        </div>
    );
}