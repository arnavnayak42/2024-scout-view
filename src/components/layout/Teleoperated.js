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
        id: 0,//cones high
        value: 0,
      },
      {
        id: 1,//cones mid
        value: 0,
      },
      {
        id: 2,//cones low
        value: 0,
      },
      {
        id: 3,//cones missed
        value: 0,
      },
      {
        id: 4,//cubes high
        value: 0,
      },
      {
        id: 5,//cubes mid
        value: 0,
      },
      {
        id: 6,//cubes low
        value: 0,
      },
      {
        id: 7,//cubes missed
        value: 0,
      },
      {
        id: 8,//intake from
        value: "-1",
      },
      {
        id: 9,//defense
        value: 0,
      },
      //endgame
      {
        id: 10,//attempted charge station
        value: false,
      },
      {
        id: 11,//charge station
        value: "-1",
      },
      {
        id: 12,//
        value: "-1"
      },
      {
        id: 13,
        value: "-1"
      }
    ],
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
        <div style={veryTopSpace}>
        <header>
          <h3 style={headerStyle}>Teleoperated</h3>
        </header>
        </div>
        <div style={topSpace}></div>
        <Container fluid style={center}>
        <Row>
					<Col>
							<PlusMinusStat
								title='Cones High'
								send={this.sendData}
								id={0}
								entryName={'conesHighTeleop'}//was lowerScoredAuto
							/>
						</Col>
						<Col>
							<PlusMinusStat
								title='Cones Mid'
								send={this.sendData}
								id={1}
								entryName={'conesMidTeleop'}//was 
							/>
						</Col>
						<Col>
							<PlusMinusStat
								title='Cones Low'
								send={this.sendData}
								id={2}
								entryName={'conesLowTeleop'}
							/>
						</Col>
						<Col>
							<PlusMinusStat
								title='Cones Missed'
								send={this.sendData}
								id={3}
								entryName={'conesMissedTeleop'}
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
								id={4}
								entryName={'cubesHighTeleop'}
							/>
						</Col>
						<Col>
							<PlusMinusStat
								title='Cubes Mid'
								send={this.sendData}
								id={5}
								entryName={'cubesMidTeleop'}
							/>
						</Col>
						<Col>
							<PlusMinusStat
								title='Cubes Low'
								send={this.sendData}
								id={6}
								entryName={'cubesLowTeleop'}
							/>
						</Col>
            <Col>
							<PlusMinusStat
								title='Cubes Missed'
								send={this.sendData}
								id={7}
								entryName={'cubesMissedTeleop'}
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
								title='Intake From'
								options={["Floor", "Shelf", "Both"]}
								send={this.sendData}
								id={8}
								entryName={'intakeFrom'}//CS = Charging Station
							/>
						</Col>
            <Col>
              <SwitchStat
                title="Defense"
                options={[1, 2, 3, 4, 5]}
                send={this.sendData}
                id={9}
                entryName={"defense"}
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
            <Col>
              <BooleanStat
                title="Attempted Charge Station?"
                send={this.sendData}
                id={10}
                entryName={"CSattempt"}
              />
            </Col>
            <Col>
							<SwitchStat
								title='Charging Station'
								options={["Docked", "Engaged", "None"]}
								send={this.sendData}
								id={11}
								entryName={'CSTeleop'}//CS = Charging Station
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
                title="Climb Efficiency/Stability"
                options={["0","1","2", "3", "4", "5"]}
                send={this.sendData}
                id={12}
                entryName={"climbEfficiency"}
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
                id={13}
                entryName={"timeleft"}
                onChange={this.sendInput}
              >
                <FormControl />
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
const veryTopSpace = {
  marginTop: '650px',
  width: '100%'
}
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