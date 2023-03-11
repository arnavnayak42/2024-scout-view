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
		let newData = [];
		let data = this.props.data.data;
		newData.push(this.props.data.matchNum);
		newData.push(this.props.data.teamNum);
		newData.push(this.props.data.comment);
		console.log("auton")
		let x = 3;//this is to see the index of a certain value, starting at 3 b/c the first 3 are match num, team num, and comment
		//just to check
	// 	if(typeof data.auto[0].value !== undefined){
	// 	switch(data.auto[0].value){
	// 		case 'A':
	// 			newData.push('1');
	// 			break;
	// 		case 'B':
	// 			newData.push('2');
	// 			break;
	// 		case 'C':
	// 			newData.push('3');
	// 			break;
	// 		case 'D':
	// 			newData.push('4');
	// 			break;
	// 	}
	// }
		for (let i = 1; i < data.auto.length; i++) {
			newData.push(data.auto[i].value);
			console.log("id:" + i + ", value: " + data.auto[i].value + ", actual index: " + x);
			x++;
		}
		console.log("teleop");
		for (let i = 0; i < data.teleop.length; i++) {
			newData.push(data.teleop[i].value);
			console.log("id:" + i + ", value: " + data.teleop[i].value + ", actual index: " + x);
			x++;
		}
		console.log("endgame");
		for (let i = 0; i < data.endgame.length; i++) {
			if(i>=2){
				if(data.endgame[i].value === 'true'){
					newData.push(true);
				}
				else if(data.endgame[i].value === 'false'){
					newData.push(false);
				}
				else{
					newData.push(data.endgame[i].value);
				}
			}
			else{
			newData.push(data.endgame[i].value);
			console.log("id:" + i + ", value: " + data.endgame[i].value + ", actual index: " + x);
			x++;
			}
		}
		newData.push(this.props.data.scout);
		console.log(newData);
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
					{/**<QRCode value={jack} style={big} renderAs="svg"/> */}<QRCode value={JSON.stringify(newData)} style={big} renderAs="svg"/>
				</Row>
					<Row style={fs}>
						{' '}
						<div style={topSpace}></div>{' '}
					</Row>
					<Row>
						<Col></Col>
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
	borderWidth: '20px',
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
