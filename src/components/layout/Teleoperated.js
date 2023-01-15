import React, { Component } from "react";
import PlusMinusStat from "../PlusMinusStat";
import BooleanStat from "../BooleanStat";
import SwitchStat from "../SwitchStat";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
let endgameDataStart = 12;
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
      {
        id: 4,
        value: 0,
      },
      {
        id: 5,
        value: false,
      },
      {
        id: 6,
        value: false,
      },
      {
        id: 7,
        value: FontFaceSetLoadEvent,
      },
      {
        id: 8,
        value: 0,
      },
      // endgame
      {
        id: 9,
        value: false,
      },
      {
        id: 10,
        value: '',
      },
      {
        id: 11,
        value: 30,
      },
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
        <header>
          <h3 style={headerStyle}>Teleoperated</h3>
        </header>
        <div style={topSpace}></div>
        <Container fluid style={center}>
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
						<Col>
							<PlusMinusStat
								title='Cones Missed'
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
            <Col>
							<PlusMinusStat
								title='Cubes Missed'
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
								title='Intake From'
								options={["Floor", "Shelf"]}
								send={this.sendData}
								id={0}
								entryName={'No Input CS'}//CS = Charging Station
							/>
						</Col>
            <Col>
              <SwitchStat
                title="Defense"
                options={[1, 2, 3, 4, 5]}
                send={this.sendData}
                id={8}
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
                id={9}
                entryName={"climbed"}
              />
            </Col>
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
						<Col>
							<div style={topSpace}></div>
						</Col>
					</Row>
          <Row>
            <Col>
            <SwitchStat
                title="Climb Efficiency"
                options={["0","1","2", "3", "4", "5"]}
                send={this.sendData}
                id={10}
                entryName={"climbLevel"}
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
  textAlign: "center",
  fontSize: "2.5em",
  padding: "1em",
  paddingBottom: "20px",
  paddingTop: "20px",
  fontFamily: "Code",
  backgroundColor: "#ff5555",
  color: "white",
};
const topSpace = {
  marginTop: "5vh",
  width: "100%",
};
const halfWidth = {
  width: "50%",
  margin: "auto",
};
const center = {
  textAlign: "center",
};
export default Teleloperated;