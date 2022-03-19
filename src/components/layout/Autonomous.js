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
				id: 0,
				value: 'C',
			},
			{
				id: 1,
				value: false,
			},
			{
				id: 2,
				value: 0,
			},
			{
				id: 3,
				value: 0,
			},
			{
				id: 4,
				value: 0,
			},
			{
				id: 5,
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
								options={['C', 'T']}
								send={this.sendData}
								id={0}
								entryName={'startPos'}
							/>
						</Col>
						<Col>
							<BooleanStat
								title='Crossed Tarmac?'
								send={this.sendData}
								id={1}
								entryName={'crossTarmac'}
							/>
						</Col>
						<Col>
							{/* <Button
								variant='outline-primary'
								style={full}
								onClick={this.props.tabSwitch}
							>
								Next
							</Button> */}
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
								title='Lower Scored'
								send={this.sendData}
								id={2}
								entryName={'lowerScoredAuto'}
								// data={this.props.data}
								// green={true}
							/>
						</Col>
						<Col>
							<PlusMinusStat
								title='Lower Missed'
								send={this.sendData}
								id={3}
								entryName={'lowerMissedAuto'}
							/>
						</Col>
						<Col>
							<PlusMinusStat
								title='Upper Scored'
								send={this.sendData}
								id={4}
								entryName={'upperScoredAuto'}
								// green={true}
							/>
						</Col>
						<Col>
							<PlusMinusStat
								title='Upper Missed'
								send={this.sendData}
								id={5}
								entryName={'upperMissedAuto'}
							/>
						</Col>
						{/* <Col>
							<PlusMinusStat
								title='Inside Tarmac'
								send={this.sendData}
								id={4}
								entryName={'insideTarmac'}
							/>
						</Col>
						<Col>
							<PlusMinusStat
								title='Outside Tarmac'
								send={this.sendData}
								id={5}
								entryName={'outsideTarmac'}
							/>
						</Col>
						<Col>
							<PlusMinusStat
								title='Fender'
								send={this.sendData}
								id={6}
								entryName={'fender'}
							/>
						</Col> */}
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
						</Col> */}
					{/* </Row> */}
					<Row>{/* <div style={spacer}></div> */}</Row>
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
