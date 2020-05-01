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

let data = [];
let dataPoints = 7;
for(let i = 0; i < dataPoints;i++){
    data.push({
        id: i,
        value: "None"
    })
}

export class Autonomous extends Component {
    state = {
        
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
                        <Col><SwitchStat title = "Starting Position" options={["L","C","R"]}/></Col>
                        <Col><BooleanStat title = "Crossed Init. Line?"/></Col>
                    </Row>
                    <Row>
                        <Col><div style = {topSpace}></div></Col>
                    </Row>
                    <Row>
                        <Col ><PlusMinusStat title = "Bottom Scored"/></Col>
                        <Col><PlusMinusStat title = "Outer Scored"/></Col>
                        <Col><PlusMinusStat title = "Inner Scored"/></Col>
                    </Row>
                    <Row>
                        <Col><div style = {topSpace}></div></Col>
                    </Row>
                    <Row>
                        <Col><PlusMinusStat title = "Init Line Attempted"/></Col>
                        <Col><PlusMinusStat title = "Near Trench Attempted"/></Col>
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
