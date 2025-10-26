// src/components/ui/ControlPanel/ControlPanel.jsx

import './ControlPanelStyle.css'
import MaterialEditor from '../MaterialEditor/MaterialEditor';
import ThemeSelector from '../ThemeSelector/ThemeSelector';
import SceneLoader from '../SceneLoader/SceneLoader';
import InfoBox from '../InfoBox/InfoBox';

// Basic control panel container that will be filled with components
function ControlPanel() {

    return (
        <div className="ui-control-panel">
            <h1>Element Customizer</h1>
            {/* <ThemeSelector /> */}
            <MaterialEditor />
            <SceneLoader/>
            <InfoBox/>
        </div>
    );
}

export default ControlPanel;