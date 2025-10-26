import React, { useState } from 'react';

function DropDownMenu({ options, onSelectionChange }) {
    const [selectedValue, setSelectedValue] = useState(options[0].value);
    return (
        <div>
            <select id="custom-ui-dropdown"
                value={selectedValue}
                onChange={onSelectionChange}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default DropDownMenu;