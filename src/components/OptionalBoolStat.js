import React, { Component, useState, useContext, useEffect } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import { ClearContext } from '../App';

export default function OptionalBoolStat({ title, send, id, defValue}) {
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
		console.log(id);
		console.log(defValue)
		// if(defValue === undefined){
		// send({ id: id, value: options[0] });}//options[0]
		// else{
			send({ id: id, value: defValue});
		// }
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
			<Button
					type='radio'
					value={true}
					variant='danger'
					size='lg'
					style={buttonStyle}
					checked={false}
					onClick={changeHandle}
					active={value == 'true'}
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
					active={value == 'false'}
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
