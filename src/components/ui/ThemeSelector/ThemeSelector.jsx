import useSceneState from "../../../hooks/UseSceneState";
import defaultPresets from '../../../data/Presets';
import DropDownMenu from "../CustomUI/DropDownMenu";
import ColorPicker from "../CustomUI/ColorPicker";

function ThemeSelector() {
    const theme_options = defaultPresets.theme_options.backgrounds;
    const color = useSceneState((s) => s.sceneState.scene.color);
    const setTheme = useSceneState((s) => s.setTheme);
    const setBackgroundColor = useSceneState((s) => s.setBackgroundColor);


    return (
        <div className="ui-theme-selector">
            <h3>Theme</h3>
            <DropDownMenu options={theme_options} onSelectionChange={setTheme} />
            <ColorPicker currentColor={color} onColorChange={setBackgroundColor} />
        </div>
    );
}
export default ThemeSelector;