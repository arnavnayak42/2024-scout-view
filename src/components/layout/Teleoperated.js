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
import OptionalBoolStat from '../OptionalBoolStat';


let endgameDataStart = 14;
export class Teleloperated extends Component {
  state = {
    data: [
      {
        id: 0,//Speaker Scored
        value: 0,
      },
      {
        id: 1,//Speaker Missed
        value: 0,
      },
      {
        id: 2,//Amp Scored
        value: 0,
      },
      {
        id: 3,//Amp Missed
        value: 0,
      },
      {
        id: 4,//Coopertition Button
        value: "-1",
      },
      {
        id: 5,//Climb Level
        value: "-1",
      },
      {
        id: 6,//Trap Counter
        value: "-1",
      },
      // {
      //   id: 7,//cubes missed
      //   value: 0,
      // },
      // {
      //   id: 8,//Intake From Floor Inside Community
      //   value: 0,
      // },
      // {
      //   id: 9, //Intake From Floor Outside Community
      //   value: 0, 
      // },
      // {
      //   id: 10,//Intake From Shelf 
      //   value: 0,
      // },
      // {
      //   id: 11,//Intake From Substation        
      //   value: 0,
      // },
      // {
      //   id: 12,//Defense Quantity 
      //   value: "-1",
      // },
      // {
      //   id: 13, //Defense Quality 
      //   value: "-1"
      // },
      // //endgame
      // {
      //   id: 14,//Charging Station
      //   value: "-1"
      // },
      // {
      //   id: 15, //Additional Robots  
      //   value:"-1"
      // },
      // {
      //   id:16, //Time Left
      //   value: "-1"
      // }
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
								title='Speaker Scored'
								send={this.sendData}
								id={0}
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
								id={1}
								entryName={'speakerMissed'}//was 
							/>
						</Col>
						{/* <Col>
							<PlusMinusStat
								title='Cones Low'
								send={this.sendData}
								id={2}
								entryName={'conesLowTeleop'}
							/>
						</Col>
						<Col>
							<PlusMinusStat
								title='Cones Missed (while placing high/mid)'
								send={this.sendData}
								id={3}
								entryName={'conesMissedTeleop'}
							/>
						</Col> */}
						</Row>
						<Row>
						<Col>
							<div style={topSpace}></div>
						</Col>
					</Row>
          <Row>
            <Col>
            <div style={topSpace}></div>
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
								title='Amp Scored'
								send={this.sendData}
								id={2}
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
								id={3}
								entryName={'cubesMidAuto'}
							/>
						</Col>
						{/* <Col>
							<PlusMinusStat
								title='Cubes Low'
								send={this.sendData}
								id={6}
								entryName={'cubesLowTeleop'}
							/>
						</Col>
            <Col>
							<PlusMinusStat
								title='Cubes Missed (while placing high/mid)'
								send={this.sendData}
								id={7}
								entryName={'cubesMissedTeleop'}
							/>
						</Col> */}
					</Row>
					<Row>
						<Col>
							<div style={topSpace}></div>
						</Col>
					</Row>
          {/* <Row>
          <Col>
          <PlusMinusStat
            title = "Intake From Floor (Community)"
            send = {this.sendData}
            id={8}
            entryName={'intakeFromFloorInside'}
          ></PlusMinusStat>
          </Col>
          <Col>
            <PlusMinusStat
            title = "Intake From Floor (Outside Community)"
            send = {this.sendData}
            id={9}
            entryName={'intakeFromFloorOutside'}
            ></PlusMinusStat>
          </Col>
          <Col>
          <PlusMinusStat
            title = "Intake From Shelf"
            send = {this.sendData}
            id={10}
            entryName={'intakeFromShelf'}
          ></PlusMinusStat>
          </Col>
          <Col>
          <PlusMinusStat
            title = "Intake From Chute"
            send = {this.sendData}
            id={11}
            entryName={'intakeFromSubstation'}
          ></PlusMinusStat>
          </Col>
          </Row> */}
          <Row>
          {/* <Col> 
							<SwitchStat
								title='Defense Quantity(%)'
								options={[0, 25, 50, 75, 100]}
								send={this.sendData}
								id={12}
								entryName={'defenseQuantity'}//CS = Charging Station
							/>
						</Col> */}
            <Col>
             <OptionalBoolStat
              title='Coopertition Button (Yellow Light)'
              send={this.sendData}
              id={4}
              entryName={'coopButton'}
              defValue={'-1'}
             ></OptionalBoolStat>
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
								title='Climb Level'
								options={["Parked", "Climb", "Mic", "N/A"]}
								send={this.sendData}
								id={5}
								entryName={'climbLevel'}//CS = Charging Station
                defValue={"-1"}
							/>
						</Col>
          </Row>
          <Row>
          <div style={topSpace}></div>
          </Row>
          <Row>
            <Col>
            <SwitchStat
                title="Trap Counter"
                options={[1,2,3]}
                send={this.sendData}
                id={6}
                entryName={'trapCounter'}
                defValue={"-1"}
            ></SwitchStat>
            </Col>
          </Row>
          {/* <Row>
						<Col>
							<div style={topSpace}></div>
						</Col>
					</Row> */}
          {/* <div style={topSpace}></div>   */}
          {/* <div style={topSpace}></div> */}
          <Row>
            <Col>
              <div style={topSpace}></div>
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
