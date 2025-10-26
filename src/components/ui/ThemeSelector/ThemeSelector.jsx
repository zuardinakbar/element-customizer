import useSceneState from "../../../hooks/UseSceneState";
import defaultPresets from '../../../data/Presets';
import DropDownMenu from "../CustomUI/DropDownMenu";
import ColorPicker from "../CustomUI/ColorPicker";
import "./ThemeSelectorStyle.css"

function ThemeSelector() {
    const currentTheme = useSceneState((s) => s.sceneState.scene.background);
    const theme_options = defaultPresets.theme_options.backgrounds;
    const color = useSceneState((s) => s.sceneState.scene.color);
    const setTheme = useSceneState((s) => s.setTheme);
    const setBackgroundColor = useSceneState((s) => s.setBackgroundColor);

    console.log(currentTheme);

    return (
        <div className="ui-theme-selector">
            <h3>Theme</h3>
            <DropDownMenu currentValue={currentTheme} options={theme_options} onOptionChange={setTheme} />
            <ColorPicker color={color} onColorChange={setBackgroundColor} />
        </div>
    );
}
export default ThemeSelector;