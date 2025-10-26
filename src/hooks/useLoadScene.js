import { useState } from "react";
import useSceneState from "./UseSceneState";
import { loadScene, uploadScene } from "../api/SceneApi";

// Load hook
export function useLoadScene(url) {
  const setSceneState = useSceneState((s) => s.setSceneState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const scene = await loadScene(url);
      setSceneState(scene);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { load, loading, error };
}

// Upload hook
export function useUploadScene(url) {
  const sceneState = useSceneState((s) => s.sceneState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const upload = async () => {
    if (!sceneState) return;
    setLoading(true);
    setError(null);
    try {
      const result = await uploadScene(url, sceneState);
      console.log("Upload result:", result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { upload, loading, error };
}

