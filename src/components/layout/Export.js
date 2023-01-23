import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {QRCodeCanvas} from 'qrcode.react';
console.log(QRCodeCanvas);
//var QRCode = require('qrcode.react');
var QRCode = require('qrcode.react');
export class Export extends Component {//JSON.stringify(this.props.data)
	render() {
		let jack = JSON.stringify({"data":{"auto":[],"teleop":[{"id":7,"value":2},{"id":7,"value":2},{"id":7,"value":2},{"id":7,"value":2},{"id":7,"value":2},{"id":7,"value":2}],"endgame":[{"id":12,"value":"3"},{"id":13,"value":"NoInputTimeLeft"}]},"comment":"whats-good-g","matchNum":"2590","teamNum":"2","scout":"jivon"}).replace(/\s/g,'');
		let settings = {"height": 400, "width": 400};
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
						{/**<QRCode value={jack} style={big} renderAs="svg"/> */}<QRCode value={JSON.stringify(this.props.data)} style={big} renderAs="svg"/>
					</Row>
					<Row style={fs}>
						{' '}
						<div style={topSpace}></div>{' '}
					</Row>
				</Container>
			</div>
		);
	}
}

const topSpace = {
	marginTop: '25vh',
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
	borderWidth: '40px',
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
