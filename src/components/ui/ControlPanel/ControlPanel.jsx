// src/components/ui/ControlPanel/ControlPanel.jsx

import './ControlPanelStyle.css'
import MaterialEditor from '../MaterialEditor/MaterialEditor';  

// Basic control panel container that will be filled with components
function ControlPanel() {

  return (
    <div className="ui-panel-container">
      <h1>Element Customizer</h1>
      <MaterialEditor/>
    </div>
  );
}

export default ControlPanel;