import { useLoadScene, useUploadScene } from "../../../hooks/useLoadScene";
import "./SceneLoaderStyle.css"

export default function SceneLoader() {
    const { load, loading: loadingLoad } = useLoadScene("https://example.com/your-endpoint");
    const { upload, loading: loadingUpload } = useUploadScene("https://example.com/your-endpoint");

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