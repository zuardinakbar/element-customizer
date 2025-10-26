
// Simulates uploading a scene JSON (+ downloads as a file locally)
export async function uploadScene(url, sceneState) {
    console.log(`Uploading: HTTP POST request to ${url}...`, sceneState);

    // simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    try {
        // Prepare JSON blob
        const elementBlob = new Blob([JSON.stringify(sceneState, null, 2)], {
            type: "application/json",
        });

        // Send to server via Fetch API 
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sceneState),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Scene successfully uploaded:", result);

    } catch (err) {
        console.error("Error uploading scene:", err);
        throw err;
    }
}

