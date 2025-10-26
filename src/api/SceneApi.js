
export async function loadScene(url) {
    console.log(`Fetching scene from ${url}...`);

    // simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to load JSON from ${url}`);
        const scene = await response.json();
        console.log("Scene loaded:", scene);
        return scene;
    } catch (err) {
        console.error("Error loading scene:", err);
        throw err;
    }
}


// Simulates uploading a scene JSON (downloads as a file)
export async function uploadScene(url, sceneState) {
    console.log(`Uploading: HTTP POST request to ${url}...`, sceneState);

    // simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    try {
        const blob = new Blob([JSON.stringify(sceneState, null, 2)], {
            type: "application/json",
        });

        // trigger download in browser
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "scene.json";
        a.click();
        URL.revokeObjectURL(a.href);

        console.log("Scene saved as JSON locally:", sceneState);
        return { success: true };
    } catch (err) {
        console.error("Error uploading scene:", err);
        throw err;
    }
}
