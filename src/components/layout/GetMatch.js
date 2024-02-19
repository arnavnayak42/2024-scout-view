import React, { Component } from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
export class GetMatch extends Component {
	state = {};
	render() {
		return (
			<div style={fullScreen}>
				<header>
					<h3 style={headerStyle}>Get Match</h3>
				</header>
				{/* <p>In the future there will be a qr code scanning section here. For now it is manual</p> */}
				<p>Go to your lead scout to get your matches!</p>

				<p>Team Number</p>
				<InputGroup style={size} onChange={this.props.sendTeam} type="number" pattern="[0-9]*" inputmode="numeric">
					<FormControl
						value={this.props.teamNum}
						className='textField'
					></FormControl>
				</InputGroup>
				<div style={topSpace}></div>
				<p>Match Number</p>
				<InputGroup style={size} onChange={this.props.sendMatch} type="number" pattern="[0-9]*" inputmode="numeric">
					<FormControl
						value={this.props.matchNum}
						className='textField'
					></FormControl>
				</InputGroup>
				{/* <Button
					variant='outline-primary'
					style={full}
					onClick={this.props.goToAuto}
				>
					Next
				</Button> */}
			</div>
		);
	}
}

const topSpace = {
	marginTop: '5vh',
	width: '100%',
};
const headerStyle = {
	textAlign: 'center',
	fontSize: '2.5em',
	padding: '1em',
	paddingBottom: '20px',
	paddingTop: '20px',
	fontFamily: 'Code',
	backgroundColor: '#ff5555',
	color: 'white',
};
const size = {
	textAlign: 'center',
	margin: 'auto',
	width: '80%',
};
const fullScreen = {
	height: '100vh',
	textAlign: 'center',
};

const full = {
	marginTop: '10%',
	width: '40%',
	height: '10%',
};
export default GetMatch;
