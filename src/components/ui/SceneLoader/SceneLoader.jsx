import Button from "../CustomUI/Button";

function SceneLoader() {
    return (
        <div className="ui-scene-loader">
            <h3 >Load / Upload Scene</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
                <Button name="Load Scene" />
                <Button name="Upload Scene" />
            </div>
        </div>
    );
}

export default SceneLoader;