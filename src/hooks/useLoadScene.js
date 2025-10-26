import { useState } from "react";
import useSceneState from "./UseSceneState";
import { uploadScene } from "../api/SceneApi";

// Load hook
export function useLoadScene() {
  const setSceneState = useSceneState((s) => s.setSceneState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const load = () => {
    setError(null);

    // Create a hidden file input
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";

    input.onchange = async (event) => {
      const file = event.target.files[0];
      if (!file) return;

      setLoading(true);
      try {
        const text = await file.text();
        const scene = JSON.parse(text);
        setSceneState(scene);
        console.log("Scene loaded locally from file:", file.name);
      } catch (err) {
        console.error("Error reading local file:", err);
        setError("Invalid or unreadable JSON file");
      } finally {
        setLoading(false);
      }
    };

    // Trigger the native file picker
    input.click();
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

    // Local save first
    const fileName = prompt("Enter file name to save locally:", "scene.json") || "scene.json";
    sceneState.name = fileName;
    const blob = new Blob([JSON.stringify(sceneState, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(link.href);
    console.log(`Scene saved locally as: ${fileName}`);

    // Remote upload
    setLoading(true);
    setError(null);
    try {
      const result = await uploadScene(url, sceneState); // ONLY upload remotely
      console.log("Upload result:", result);
    } catch (err) {
      console.error("Error uploading scene:", err);
      setError(err.message || err);
    } finally {
      setLoading(false);
    }
  };

  return { upload, loading, error };
}



