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
import { PreMadeComments } from './PreMadeComments';


let endgameDataStart = 13;
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
        id: 8,//Intake From Floor 
        value: 0,
      },
      {
        id: 9,//Intake From Shelf 
        value: 0,
      },
      {
        id: 10,//Intake From Substation        
        value: 0,
      },
      {
        id: 11,//Defense Quantity 
        value: "-1",
      },
      {
        id: 12, //Defense Quality 
        value: "-1"
      },
      //endgame
      {
        id: 13,//Charging Station
        value: "-1"
      },
      {
        id: 14, //Additional Robots  
        value:"-1"
      },
      {
        id:15, //Time Left
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
    currentState[15].value = data.target.value; // hard coded for now until text fields are a component
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
          <PlusMinusStat
            title = "Intake From Floor"
            send = {this.sendData}
            id={8}
            entryName={'intakeFromFloor'}
          ></PlusMinusStat>
          </Col>
          <Col>
          <PlusMinusStat
            title = "Intake From Shelf"
            send = {this.sendData}
            id={9}
            entryName={'intakeFromShelf'}
          ></PlusMinusStat>
          </Col>
          <Col>
          <PlusMinusStat
            title = "Intake From Chute"
            send = {this.sendData}
            id={10}
            entryName={'intakeFromSubstation'}
          ></PlusMinusStat>
          </Col>
          </Row>
          <Row>
          <Col>
							<SwitchStat
								title='Defense Quantity(%)'
								options={[0, 25, 50, 75, 100]}
								send={this.sendData}
								id={11}
								entryName={'defenseQuantity'}//CS = Charging Station
							/>
						</Col>
            <Col>
              <SwitchStat
                title="Defense Quality"
                options={[0,1, 2, 3, 4, 5]}
                send={this.sendData}
                id={12}
                entryName={"defenseQuality"}
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
							<SwitchStat
								title='Charging Station'
								options={["Docked", "Engaged", "Parked", "None"]}
								send={this.sendData}
								id={13}
								entryName={'CSTeleop'}//CS = Charging Station
							/>
						</Col>
          </Row>
          <Row>
          <div style={topSpace}></div>
          </Row>
          <Row>
            <Col>
            <SwitchStat
                title="Additional Robots"
                options={[0,1,2]}
                send={this.sendData}
                id={14}
                entryName={'additionalRobots'}
            ></SwitchStat>
            </Col>
          </Row>
          <Row>
						<Col>
							<div style={topSpace}></div>
						</Col>
					</Row>
          {/* <div style={topSpace}></div>   */}
          {/* <div style={topSpace}></div> */}
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
                id={15}
                entryName={"timeleft"}
                onChange={this.sendInput}
              >
                <FormControl className='textField'/>
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
