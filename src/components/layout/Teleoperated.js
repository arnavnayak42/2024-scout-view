import React, { Component } from 'react';
import PlusMinusStat from '../PlusMinusStat';
import BooleanStat from '../BooleanStat';
import SwitchStat from '../SwitchStat';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Button } from 'react-bootstrap';
let endgameDataStart = 9;
export class Teleloperated extends Component {
	state = {
		data: [
			{
				id: 0,
				value: 0,
			},
			{
				id: 1,
				value: 0,
			},
			{
				id: 2,
				value: 0,
			},
			{
				id: 3,
				value: 0,
			},
			// {
			// 	id: 4,
			// 	value: 0,
			// },
			{
				id: 4,
				value: 0,
			},
			{
				id: 5,
				value: 0,
			},
			{
				id: 6,
				value: 0,
			},
			{
				id: 7,
				value: 0,
			},
			{
				id: 8,
				value: 0,
			},
			{
				id: 9,
				value: 0,
			},
			// endgame
			// {
			// 	id: 10,
			// 	value: false,
			// },
			{
				id: 10,
				value: '',
			},
			{
				id: 11,
				value: 30,
			},
		],

		// tzoneAttempt initAttempt nTrenchAttempt fTrenchAttmpt defense climbed leveled climbedPos parked timeleft
	};
	sendData = (data) => {
		let currentState = this.state.data;
		currentState[data.id] = data;
		this.setState({ currentState }, () => {
			let teleopData = currentState.slice(0, endgameDataStart);
			this.props.sendTeleop(teleopData);
			let endgameData = currentState.slice(endgameDataStart);
			this.props.sendEndgame(endgameData);
		});
	};
	sendInput = (data) => {
		let currentState = this.state.data;
		currentState[11].value = data.target.value; // hard coded for now until text fields are a component
		this.setState({ currentState }, () => {
			let teleopData = currentState.slice(0, endgameDataStart);
			this.props.sendTeleop(teleopData);
			let endgameData = currentState.slice(endgameDataStart);
			this.props.sendEndgame(endgameData);
		});
	};
	render() {
		return (
			<div>
				<header>
					<h3 style={headerStyle}>Teleloperated</h3>
				</header>
				<div style={topSpace}></div>
				<Container fluid style={center}>
					<Row>
						<Col>
							<PlusMinusStat
								title='Upper Scored'
								send={this.sendData}
								id={0}
								entryName={'upperScoredTeleop'}
							/>
						</Col>
						<Col>
							<PlusMinusStat
								title='Upper Missed'
								send={this.sendData}
								id={1}
								entryName={'upperMissedTeleop'}
							/>
						</Col>
						<Col>
							<PlusMinusStat
								title='Bottom Scored'
								send={this.sendData}
								id={2}
								entryName={'bottomScoredTeleop'}
							/>
						</Col>
						<Col>
							<PlusMinusStat
								title='Bottom Missed'
								send={this.sendData}
								id={3}
								entryName={'bottomMissedTeleop'}
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
								title='Fender?'
								send={this.sendData}
								value={this.data}
								id={4}
								entryName={'fender'}
							/>
						</Col>
						<Col>
							<PlusMinusStat
								title='Tarmac?'
								send={this.sendData}
								id={5}
								entryName={'tarmac'}
							/>
						</Col>
						<Col>
							<PlusMinusStat
								title='Launch Pad?'
								send={this.sendData}
								id={6}
								entryName={'launchPad'}
							/>
						</Col>
						<Col>
							<PlusMinusStat
								title='Outside Tarmac?'
								send={this.sendData}
								id={7}
								entryName={'outsideTarmac'}
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
								title='Defense Quality'
								options={['NA', 'Awful', 'Ok', 'Good', 'Great']}
								send={this.sendData}
								id={8}
								entryName={'defenseQuality'}
							/>
						</Col>
						<Col>
							<SwitchStat
								title='Defense Quantity %'
								options={[0, 25, 50, 75, 100]}
								send={this.sendData}
								id={9}
								entryName={'defenseQuantity'}
							/>
						</Col>
					</Row>
					<div style={topSpace}></div>
				</Container>
				<div style={topSpace}></div>
				<header style={headerStyle}>
					<h3>Endgame</h3>
				</header>
				<div style={topSpace}></div>
				<Container fluid style={center}>
					<Row>
						{/* <Col>
							<BooleanStat
								title='Climbed?'
								send={this.sendData}
								id={10}
								entryName={'climbed'}
							/>
						</Col> */}
						<Col>
							<SwitchStat
								title='Level'
								options={['NA', 'Fail', 'L', 'M', 'H', 'T']}
								send={this.sendData}
								id={10}
								entryName={'climbLevel'}
							/>
						</Col>
					</Row>
					<div style={topSpace}></div>
					<div style={topSpace}></div>
					<Row>
						<Col>
							<div style={topSpace}></div>
						</Col>
					</Row>
					<Row>
						<Col>
							<p> Time Left </p>
							<InputGroup
								style={halfWidth}
								id={11}
								entryName={'timeleft'}
								onChange={this.sendInput}
							>
								<FormControl className='textField' />
							</InputGroup>
						</Col>
					</Row>
					<Row>
						<Col>
							<div style={topSpace}></div>
						</Col>
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
const full = {
	marginTop: '0%',
	width: '40%',
	height: '80%',
};
export default Teleloperated;
