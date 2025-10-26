
import useSceneState from "../../../hooks/UseSceneState";
import ColorPicker from "../CustomUI/ColorPicker";
import Slider from "../CustomUI/Slider";
import Toggle from "../CustomUI/Toggle";
import "./MaterialEditorStyle.css"

function MaterialEditor() {
    const color = useSceneState((s) => s.sceneState.element.color);
    const finish = useSceneState((s) => s.sceneState.element.finish);
    const transparent = useSceneState((s) => s.sceneState.element.transparent);
    const setElementColor = useSceneState((s) => s.setElementColor);
    const setElementFinish = useSceneState((s) => s.setElementFinish);
    const toggleElementTransparency = useSceneState((s) => s.toggleElementTransparency);

    return (
        <div className="ui-material-editor">
            <h3>Material</h3>
            <ColorPicker color={color} onColorChange={setElementColor} />
            <Slider
                currentValue={finish}
                min="0.0"
                max="1.0"
                step="0.01"
                onValueChange={setElementFinish}
                leftLabel="Matte"
                rightLabel="Glossy"
            />
            <Toggle
                optionA={"Opaque"}
                optionB={"Transparent"}
                currentOption={transparent}
                onToggleChange={toggleElementTransparency}
            />
        </div>
    )
};

export default MaterialEditor;