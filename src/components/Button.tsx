// Filename - src/index.js

import React, { useState } from 'react';

export const Button = () => {
const [color, setColor] = useState('green');

const changeColor = () => {
	setColor(color === 'green' ? 'black' : 'green');
};

return (
	<button style={{ backgroundColor: color }} onClick={changeColor}>
	Click me
	</button>
);
};