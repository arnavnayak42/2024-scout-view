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

export class Autonomous extends Component {
	state = {
		data: [
			{
				id: 0,//starting position
				value: '0',
			},
			{
				id: 1,//left community 
				value: false,
			},
			{
				id: 2,//cones high
				value: 0,
			},
			{
				id: 3,//cones mid
				value: 0,
			},
			{
				id: 4, //cones low
				value: 0,
			},
			{
				id: 5,//cubes high
				value: 0,
			},
			{
				id: 6, //cubes mid
				value: 0,
			},
			{
				id: 7, //cubes low 
				value:0,
			},
			{
				id: 8, //charging station
				value: "No Input",
			}
		],
	};
	sendData = (data) => {
		let currentState = this.state.data;
		currentState[data.id] = data;
		this.setState({ currentState }, () => {
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
						<img src={require("../../Assets/key-for-starting-pos.png")} alt="Field diagram" />{/**this may not work globally? */}
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
								<FormControl></FormControl>
							</InputGroup>
						</Col>
						<Col>
							<SwitchStat
								title='Starting Position'
								options={['1', '2', '3', '4']}
								send={this.sendData}
								id={0}
								entryName={'startPos'}
							/>
						</Col>
						<Col>
							<BooleanStat
								title='Left Community?'
								send={this.sendData}
								id={1}
								entryName={'leftCommunity'}//change this to leftTarmac //was crossTarmac
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
								title='Cones High'
								send={this.sendData}
								id={2}
								entryName={'conesHighAuto'}//was lowerScoredAuto
							/>
						</Col>
						<Col>
							<PlusMinusStat
								title='Cones Mid'
								send={this.sendData}
								id={2}
								entryName={'conesMidAuto'}//was 
							/>
						</Col>
						<Col>
							<PlusMinusStat
								title='Cones Low'
								send={this.sendData}
								id={2}
								entryName={'conesLowAuto'}
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
								title='Cubes High'
								send={this.sendData}
								id={2}
								entryName={'cubesHighAuto'}
							/>
						</Col>
						<Col>
							<PlusMinusStat
								title='Cubes Mid'
								send={this.sendData}
								id={2}
								entryName={'cubesMidAuto'}
							/>
						</Col>
						<Col>
							<PlusMinusStat
								title='Cubes Low'
								send={this.sendData}
								id={2}
								entryName={'cubesLowAuto'}
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
							<SwitchStat
								title='Charging Station'
								options={["Docked", "Engaged", "None"]}
								send={this.sendData}
								id={0}
								entryName={'No Input CS'}//CS = Charging Station
							/>
						</Col>
					</Row>
					<Row>
						<div style={specialspacer}></div>
					</Row>
					<Row>
						<Col>
							<Button
								variant='outline-primary'
								style={full}
								onClick={this.props.tabSwitch}
							>
								Next
							</Button>
						</Col>
					</Row>
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
	width: '20%',
	height: '40%',
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
