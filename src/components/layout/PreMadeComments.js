import Teleloperated from "./Teleoperated";
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
export class PreMadeComments extends Component{
    state = {
        data: [
            {
                id:0, //Slow or Fast
                value:"-1"
              },
              {
                id:1,//Moved Pieces Between Nodes
                value: false
              },
              {
                id:2,//Drop                                                                                                                                                                                                      ped Pieces Between Nodes
                value: false
              },
              {
                id:3,//Long Time to Intake 
                value: false
              }
        ]
    }
    sendData = (data) => {
        let currentState = this.state.data;
        console.log("original state");
        console.log(currentState);
        currentState[data.id] = data;
        console.log("current state in premade comments");
        console.log(currentState);
        this.setState({ currentState }, () => {
            // let teleopData = currentState.slice(0, endgameDataStart);
            // this.props.sendTeleop(teleopData);
            this.props.sendPreMade(currentState);
        })
    }

    render(){
    return(
    <div>
        <Container fluid style={center}>
        <Row>
            <Col>
              <div style={topSpace}></div>
            </Col>
          </Row>
    <Row>
    <Col>
    <SwitchStat
      title="Slow or Fast"
      options = {["Slow", "Fast"]}
      send={this.sendData}
      id = {0}
      entryName={"slowOrfast"}
    ></SwitchStat>
    </Col>
    <Col>
    <BooleanStat
      title="Moved Pieces Between Nodes"
      send={this.sendData}
      id = {1}
      entryName={"movedPiecesBetweenNodes"}
      ></BooleanStat>
    </Col>
    <Col>
    <BooleanStat
      title="Dropped Pieces Between Nodes"
      send={this.sendData}      
      id = {2}
      entryName={"droppedPiecesBetweenNodes"}
    ></BooleanStat>
    </Col>
    <Col>
    <BooleanStat
      title="Long Time To Intake"
      send={this.sendData}
      id = {3}
      entryName={"longTimeToIntake"}
    ></BooleanStat>
    </Col>
    </Row>
    </Container>
    </div>
    );    
}
}
const topSpace = {
	marginTop: '5vh',
	width: '100%',
};
const center = {
	textAlign: 'center',
};