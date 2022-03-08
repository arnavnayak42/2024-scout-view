import React, { Component, useContext, useEffect, useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { ClearContext } from '../App';

export default function PlusMinusStat({ id, send, title }) {
	const [value, setValue] = useState(0);
	const changeHandle = (value) => {
		setValue(value);
		send({ id: id, value: value });
	};
	const increment = () => {
		console.log('adding');

		setValue(value + 1);
		send({ id: id, value: value + 1 });
	};
	const decrement = () => {
		if (value > 0) {
			setValue(value - 1);
			send({ id: id, value: value - 1 });
		}
	};
	const clearCount = useContext(ClearContext);
	useEffect(() => {
		setValue(0);
		send(0);
		console.log('CLEARING!!!');
		// console.log(clearCount);
	}, [clearCount]);
	return (
		<div style={centerStyle}>
			<h6>{title}</h6>
			<p style={valueStyle} className='thin'>
				{value}
			</p>
			<ButtonGroup className='mb-2 thin'>
				<Button
					variant='dark'
					size='lg'
					style={buttonStyle}
					onClick={decrement}
				>
					-
				</Button>
				{/* {console.log('clear: ' + clearCount)} */}
				<Button
					variant={'danger'}
					size='lg'
					style={buttonStyle}
					onClick={increment}
				>
					+
				</Button>
			</ButtonGroup>
		</div>
	);
}

// weird styling issues need to be fixed soon
const centerStyle = {
	textAlign: 'center',
	fontSize: '150%',
	width: '14vw',
	display: 'inline-block',
	marginLeft: '2%',
	marginRight: '2%',
	height: '20vh',
};
const valueStyle = {
	marginBottom: '0px',
	backgroundColor: 'rgba(200,0,0,0.6)',
	textAlign: 'center',
	borderRadius: '6px',
	paddingTop: '5px',
	paddingBottom: '5px',
	color: 'white',
};
const greenValueStyle = {
	marginBottom: '0px',
	backgroundColor: 'rgba(0,200,0,0.8)',
	textAlign: 'center',
	borderRadius: '6px',
	paddingTop: '5px',
	paddingBottom: '5px',
	color: 'white',
};
const buttonStyle = {
	width: '7vw',
	marginTop: '0px',
};
