import React, { Component, useState, useContext, useEffect } from 'react';
import ButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import { ClearContext } from '../App';

export default function SwitchStat({ title, send, options, id }) {
	const [value, setValue] = useState('none');
	const [unselect, setUnselect] = useState(false);

	const changeHandle = (e) => {
		let val = e.currentTarget.value;
		setValue(val);
		send({ id: id, value: val });
	};
	const clearCount = useContext(ClearContext);
	useEffect(() => {
		console.log('very cool clear detected');
		setValue('none');
		send({ id: id, value: options[0] });
	}, [clearCount]);
	return (
		<div style={overallStyle}>
			<h6>{title}</h6>
			{/* <ButtonGroup
				type='radio'
				name={title}
				className='thin'
				onChange={changeHandle}
			> */}
			{options.map((option) => (
				<Button
					type='radio'
					value={option}
					variant='danger'
					size='lg'
					style={buttonStyle}
					checked={false}
					onClick={changeHandle}
					active={value == option}
				>
					{option}
				</Button>
			))}
			{/* </ButtonGroup> */}
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
