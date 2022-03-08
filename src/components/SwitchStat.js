import React, { Component, useState, useContext, useEffect } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { ClearContext } from '../App';

export default function SwitchStat({ title, send, options, id }) {
	const [value, setValue] = useState(options[0]);
	const changeHandle = (value) => {
		setValue(value);
		send({ id: id, value: value });
	};
	const clearCount = useContext(ClearContext);
	useEffect(() => {
		setValue(options[0]);
		send({ id: id, value: options[0] });
	}, [clearCount]);
	return (
		<div style={overallStyle}>
			<h6>{title}</h6>
			<ToggleButtonGroup
				type='radio'
				name={title}
				className='thin'
				onChange={changeHandle}
			>
				{options.map((option) => (
					<ToggleButton
						type='radio'
						value={option}
						variant='danger'
						size='lg'
						style={buttonStyle}
					>
						{option}
					</ToggleButton>
				))}
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
