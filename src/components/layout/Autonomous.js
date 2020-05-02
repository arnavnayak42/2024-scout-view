import React, { Component } from 'react';
import PlusMinusStat from '../PlusMinusStat'
import BooleanStat from '../BooleanStat'
import SwitchStat from '../SwitchStat'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export class Autonomous extends Component {
    state = {data:[
            {
                entryName: "startPos",
                id: 0,
                value: "C"
            },
            {
                entryName: "initLine",
                id: 1,
                value: false
            },
            {
                entryName: "botScoredAuto",
                id: 2,
                value: 0
            },
            {
                entryName: "outerScoredAuto",
                id: 3,
                value: 0
            },
            {
                entryName: "innerScoredAuto",
                id: 4,
                value: 0
            },
            {
                entryName: "initAttempt",
                id: 5,
                value: 0
            },
            {
                entryName: "nTrenchAttempt",
                id: 6,
                value: 0
            },
        ]
    }
    sendData = (data) => {
        let currentState = this.state.data;
        currentState[data.id] = data;
        this.setState({currentState},()=>{
            this.props.send(currentState);
        });
    }
    render() {
        return (
            <div style = {fullScreen}>
                <header><h3 style = {headerStyle}>Autonomous</h3></header>
                <Container fluid style = {center}>
                    <Row>
                        <Col style = {middleAllign}>
                        <p>Scout Name</p>
                        <InputGroup style = {halfWidth}>
                            <FormControl       
                                placeholder="Name"
                                aria-label="Name"
                                aria-describedby="basic-addon1"/>
                        </InputGroup >
                        </Col>
                        <Col><SwitchStat title = "Starting Position" options={["L","C","R"]}  send = {this.sendData} id = {0} entryName = {"startPos"}/></Col>
                        <Col><BooleanStat title = "Crossed Init. Line?" send = {this.sendData} id = {1} entryName = {"initLine"}/></Col>
                    </Row>
                    <Row>
                        <Col><div style = {topSpace}></div></Col>
                    </Row>
                    <Row>
                        <Col ><PlusMinusStat title = "Bottom Scored"  send = {this.sendData} id = {2} entryName = {"botScoredAuto"}/></Col>
                        <Col><PlusMinusStat title = "Outer Scored"  send = {this.sendData} id = {3} entryName = {"outerScoredAuto"}/></Col>
                        <Col><PlusMinusStat title = "Inner Scored"  send = {this.sendData} id = {4} entryName = {"innerScoredAuto"}/></Col>
                    </Row>
                    <Row>
                        <Col><div style = {topSpace}></div></Col>
                    </Row>
                    <Row>
                        <Col><PlusMinusStat title = "Init Line Attempted" send = {this.sendData} id = {5} entryName = {"initAttempt"}/></Col>
                        <Col><PlusMinusStat title = "Near Trench Attempted" send = {this.sendData} id = {6} entryName = {"nTrenchAttempt"}/></Col>
                        <Col><p>Next</p><Button variant="outline-primary" style = {full} onClick = {this.props.tabSwitch}>Next</Button></Col>
                    </Row>
                </Container>
            </div>
        )
    }
    
}
const headerStyle = {
    textAlign: 'center',
    fontSize: "2.5em",
    padding: "1em",
    paddingBottom: '20px',
    paddingTop: '20px',
    fontFamily: "Code",
    backgroundColor: "#ff5555",
    color: "white"
}
const middleAllign = {
}
const full = {
    width: "50%",
    height: '50%',
    margin: "auto"
}
const topSpace = {
    marginTop: '5vh',
    width:'100%'
}
const halfWidth = {
    width: "50%",
    margin: "auto"
}
const center = {
    textAlign: 'center'
}
const fullScreen = {
    height:"100vh"
}
export default Autonomous
