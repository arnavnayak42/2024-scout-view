import React, { Component } from 'react';
import PlusMinusStat from '../PlusMinusStat';
import BooleanStat from '../BooleanStat';
import SwitchStat from '../SwitchStat';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import OptionalBoolStat from '../OptionalBoolStat';

export class Autonomous extends Component {
	state = {
		data: [
			{
				id: 0,//starting position
				value: '0',
			},
			{
				id: 1,//left wing? 
				value: false,
			},
			{
				id: 2,//Speaker Scored 
				value: 0,
			},
			{
				id: 3,//Speaker Missed 
				value: 0,
			},
			{
				id: 4, //Amp Scored 
				value: 0,
			},
			{
				id: 5, //Amp Missed 
				value: 0,
			},
		],
	};
	sendData = (data) => {
		let currentState = this.state.data;
		currentState[data.id] = data;
		this.setState({ currentState }, () => {
			console.log('updating data in qr code');
			console.log(currentState);
			this.props.send(currentState);
		});
	};
	render() {
		return (
			<div style={fullScreen}>
				<header>
					<h3 style={headerStyle}>Autonomous</h3>
				</header>
				<Container fluid style={center}>
					<Row>
						<Col>
							<div style={topSpace}></div>
						</Col>
					</Row>
					<Row>
						<Col>
						<img src={require("../../Assets/editedCrecendo.webp")} alt="Field diagram" width={"654"} height={"406"} />{/**this may not work globally? +convert this to webp*/}
						</Col>
						</Row>
						<Row>
						<Col>
							<div style={topSpace}></div>
						</Col>
					</Row>
					<Row>
						<Col style={middleAllign}>
							<p>Scout Name</p>
							<InputGroup
								style={halfWidth}
								onChange={this.props.updateScout}
								type='text'
							> 
								<FormControl className='textField'></FormControl>
							</InputGroup>
						</Col>
						<Col>
							<SwitchStat
								title='Starting Position'
								options={['A', 'B', 'C', 'D']}
								send={this.sendData}
								id={0}
								entryName={'startPos'}
							/>
						</Col>
						<Col>
							<OptionalBoolStat
								title='Leave Wing?'
								send={this.sendData}
								id={1}
								defValue={'-1'}//change this to leftTarmac //was crossTarmac
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							<div style={topSpace}></div>
						</Col>
					</Row>
					<Row>
					<Col>
							<PlusMinusStat
								title='Speaker Scored'
								send={this.sendData}
								id={2}
								entryName={'speakerScored'}//was lowerScoredAuto
							/>
						</Col>
						<Col>
						<img src={require("../../Assets/SPEAKER.png")} alt="Field diagram" width={"300"} height={"200"} />{/**this may not work globally? +convert this to webp*/}
						</Col>
						<Col>
							<PlusMinusStat
								title='Speaker Missed'
								send={this.sendData}
								id={3}
								entryName={'speakerMissed'}//was 
							/>
						</Col>
						{/* <Col>
							<PlusMinusStat
								title='Cones Low'
								send={this.sendData}
								id={4}
								entryName={'conesLowAuto'}
							/>
						</Col>
						<Col>
							<PlusMinusStat
								title='Cones Missed (while placing high/mid)'
								send={this.sendData}
								id={5}
								entryName={'conesMissedAuto'}
							/>
						</Col> */}
						</Row>
						<Row>
						<div style={spacer}></div>
						</Row>
						<Row>
						<Col>
							<div style={topSpace}></div>
						</Col>
					</Row>
					<Row>
					<Col>
							<PlusMinusStat
								title='Amp Scored'
								send={this.sendData}
								id={4}
								entryName={'ampScored'}
							/>
						</Col>
						<Col>
						<img src={require("../../Assets/AMP.png")} alt="Field diagram" width={"300"} height={"200"}/>{/**this may not work globally? +convert this to webp*/}
						</Col>
						 <Col>
							<PlusMinusStat
								title='Amp Missed'
								send={this.sendData}
								id={5}
								entryName={'ampMissed'}
							/>
						</Col>
						{/* <Col>
							<PlusMinusStat
								title='Cubes Low'
								send={this.sendData}
								id={8}
								entryName={'cubesLowAuto'}
							/>
						</Col>
						<Col>
							<PlusMinusStat
								title='Cubes Missed (while placing high/mid)'
								send={this.sendData}
								id={9}
								entryName={'cubesMissedAuto'}
							/>
						</Col>  */}
					</Row>
					<Row>
						<Col>
							<div style={topSpace}></div>
						</Col>
					</Row>
					<Row>
						<div style={specialspacer}></div>
					</Row>
					{/* <Row>
						<Col>
							<Button
								variant='outline-primary'
								style={full}
								onClick={this.props.tabSwitch}
							>
								Next
							</Button>
						</Col>
					</Row> */}
					<Row>
						<div style={spacer}></div>
					</Row>
					
				</Container>
			</div>
		);
	}
}
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

const spacer = {
	marginTop: '5vh',
	width: '100%',
};
const specialspacer = {
	marginTop: '0.3vh',
	width: '100%',
};
const middleAllign = {};
const full = {
	marginTop: '10%',
	width: '40%',
	height: '80%',
};
const topSpace = {
	marginTop: '5vh',
	width: '100%',
};
const halfWidth = {
	width: '50%',
	margin: 'auto',
};
const center = {
	textAlign: 'center',
};
const fullScreen = {
	height: '100vh',
};
export default Autonomous;
