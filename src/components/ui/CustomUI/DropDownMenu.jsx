function DropDownMenu({ currentValue, options, onOptionChange }) {
    return (
        <div>
            <select id="custom-ui-dropdown"
                value={currentValue}
                onChange={(e) => onOptionChange(e.target.value)}>

                {/* Map over the options to create <option> elements */}
                {options.map((opt, index) => (
                    <option key={index} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default DropDownMenu;
