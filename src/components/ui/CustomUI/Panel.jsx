import './PanelStyle.css'

function StatPanel({ displayMessage }) {
    const message = displayMessage || "No data available.";

    return (
        <div className="custom-ui-panel">
            <p>{message}</p>
        </div>
    );
}
export default StatPanel;