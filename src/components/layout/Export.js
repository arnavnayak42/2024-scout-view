import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
var QRCode = require('qrcode.react');
export class Export extends Component {
	render() {
		let newData = [];
		let data = this.props.data.data;

		newData.push(this.props.data.matchNum);
		newData.push(this.props.data.teamNum);
		newData.push(this.props.data.comment);

		for (let i = 0; i < data.auto.length; i++) {
			newData.push(data.auto[i].value);
		}
		for (let i = 0; i < data.teleop.length; i++) {
			newData.push(data.teleop[i].value);
		}
		for (let i = 0; i < data.endgame.length; i++) {
			newData.push(data.endgame[i].value);
		}

		return (
			<div>
				<header>
					<h3 style={headerStyle}>Export</h3>
				</header>
				<Row style={fs}>
					{' '}
					<div style={topSpace}></div>{' '}
				</Row>
				<Container fluid style={middle}>
					<Row>
						<QRCode value={JSON.stringify(newData)} style={big} />
					</Row>
					<Row style={fs}>
						{' '}
						<div style={topSpace}></div>{' '}
					</Row>
					<Row>
						<Col>
							<Button
								variant='danger'
								size='lg'
								style={clearButton}
								onClick={this.props.reset}
							>
								Clear
							</Button>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

const topSpace = {
	marginTop: '20vh',
	width: '100%',
};
const clearButton = {
	textAlign: 'center',
	margin: 'auto',
	width: window.innerWidth * 0.2,
	marginBottom: '5%',
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
const subHead = {
	textAlign: 'center',
	fontSize: '2em',
	padding: '1em',
	paddingBottom: '20px',
	paddingTop: '20px',
	fontFamily: 'Code',
	color: 'white',
};
const middle = {
	textAlign: 'center',
	margin: 'auto',
};
const big = {
	textAlign: 'center',
	margin: 'auto',
	borderStyle: 'solid',
	borderWidth: '10px',
	borderColor: 'white',
	// width: '50vw',
	height: window.innerHeight * 0.4,
	width: window.innerHeight * 0.4,
};
const fs = {
	height: '100%',
	width: '100%',
};
export default Export;
