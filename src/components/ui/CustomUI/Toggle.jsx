import './ToggleStyle.css'

function Toggle({ optionA, optionB, currentOption, onToggleChange }) {
    return (
        <div className="custom-ui-toggle">
            <span>{optionA}</span>
            <label className="switch">
                <input
                    type="checkbox"
                    checked={currentOption}
                    onChange={(e) => onToggleChange(e.target.checked)}
                />
                <span className="slider-switch"></span>
            </label>
            <span>{optionB}</span>
        </div>
    );
}
export default Toggle
