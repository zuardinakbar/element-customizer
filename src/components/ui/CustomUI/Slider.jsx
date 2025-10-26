import "./SliderStyle.css"

function Slider({ currentValue, min, max, step, onValueChange, leftLabel, rightLabel }) {
    return (
        <div className="custom-ui-slider">   
        <span>{leftLabel}</span>
        <div>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={currentValue}
                onChange={(e) => onValueChange(e.target.value)}
                className="slider"
            />
        </div>
        <span>{rightLabel}</span>
    </div>
    );
}

export default Slider;
