import React, { useState, useContext, useEffect } from 'react';
import ButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Button from 'react-bootstrap/Button';
import { ClearContext } from '../App';

export default function BooleanStat({ id, title, send }) {
	const [value, setValue] = useState(false);

	const clearCount = useContext(ClearContext);
	const changeHandle = (e) => {
		console.log(e.currentTarget.value);
		let val = JSON.parse(e.currentTarget.value);
		setValue(val);
		send({ id: id, value: val });
	};
	useEffect(() => {
		console.log('very cool clear detected');
		setValue('lol');
		send({ id: id, value: false });
		console.log((document.getElementsByClassName('textField')[0].value = ''));
		console.log((document.getElementsByClassName('textField')[1].value = ''));
		console.log((document.getElementsByClassName('textField')[2].value = ''));
		console.log((document.getElementsByClassName('textField')[3].value = ''));
		console.log((document.getElementsByClassName('textField')[4].value = ''));
		// document.getElementsByClassName('textField').map((el) => {
		// el.reset();
		// });
	}, [clearCount]);
	return (
		<div style={overallStyle}>
			<h6>{title}</h6>
			{/* <ButtonGroup name='hi' onChange={changeHandle}> */}
			<Button
				type='radio'
				value={true}
				variant='danger'
				size='lg'
				style={buttonStyle}
				checked={false}
				onClick={changeHandle}
				active={value == true}
			>
				Yes
			</Button>
			<Button
				type='radio'
				value={false}
				variant='danger'
				size='lg'
				style={buttonStyle}
				checked={false}
				onClick={changeHandle}
				active={value == false}
			>
				No
			</Button>
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
