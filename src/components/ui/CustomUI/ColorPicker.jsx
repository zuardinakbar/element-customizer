
function ColorPicker(color, onColorChange) {
  return (
    <div className="custom-ui-color-picker">
      <span>Color</span>
      <input type="color"
        value={color}
        onChange={(e) => onColorChange(e.target.value)} />
    </div>
  );
}

export default ColorPicker;