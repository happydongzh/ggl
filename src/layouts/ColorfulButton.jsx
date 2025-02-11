import React, { useState } from 'react';
import './ColorfulButton.less'; 

const ColorfulButton = ({ children, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button 
            className={`colorful-button ${isHovered ? 'light' : 'primary'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick} 
        >
            {children}
        </button>
    );
};

export default ColorfulButton;
