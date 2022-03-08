import React, { useState, useContext, useEffect } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { ClearContext } from '../App';

export default function BooleanStat({ id, title, send }) {
	const [value, setValue] = useState(false);
	const changeHandle = (value) => {
		setValue(value);
		send({ id: id, value: value });
	};
	const clearCount = useContext(ClearContext);
	useEffect(() => {
		setValue(false);
		send({ id: id, value: false });
	}, [clearCount]);
	return (
		<div style={overallStyle}>
			<h6>{title}</h6>
			<ToggleButtonGroup type='radio' name='hi' onChange={changeHandle}>
				<ToggleButton
					type='radio'
					value={true}
					variant='danger'
					size='lg'
					style={buttonStyle}
				>
					Yes
				</ToggleButton>
				<ToggleButton
					type='radio'
					value={false}
					variant='danger'
					size='lg'
					style={buttonStyle}
				>
					No
				</ToggleButton>
			</ToggleButtonGroup>
		</div>
	);
}

const overallStyle = {
	textAlign: 'center',
	display: 'inline-block',
};
const buttonStyle = {
	width: '7vw',
	height: '12vh',
	textAlign: 'center',
	paddingTop: '3.5vh',
};
