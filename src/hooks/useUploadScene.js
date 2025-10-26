import { useState } from "react";
import useSceneState from "./UseSceneState";
import { uploadScene } from "../api/SceneApi";

export default function useUploadScene(url) {
  const sceneState = useSceneState((s) => s.sceneState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const upload = async () => {
    if (!sceneState) return;
    setLoading(true);
    setError(null);
    try {
      const result = await uploadScene(url, sceneState);
      console.log("Scene uploaded:", result);
    } catch (err) {
      console.error("Error uploading scene:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { upload, loading, error };
}
