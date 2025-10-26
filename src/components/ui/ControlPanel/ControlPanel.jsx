// src/components/ui/ControlPanel/ControlPanel.jsx

import './ControlPanelStyle.css'
import MaterialEditor from '../MaterialEditor/MaterialEditor';
import ThemeSelector from '../ThemeSelector/ThemeSelector';

// Basic control panel container that will be filled with components
function ControlPanel() {

    return (
        <div className="ui-panel-container">
            <h1>Element Customizer</h1>
            {/* <ThemeSelector /> */}
            <MaterialEditor />
        </div>
    );
}

export default ControlPanel;