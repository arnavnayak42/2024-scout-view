import React, { Component } from 'react';
import PlusMinusStat from '../PlusMinusStat'
import BooleanStat from '../BooleanStat'
import SwitchStat from '../SwitchStat'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
export class Teleloperated extends Component {
    state = {
        
    }
    render() {
        return (
            <div>
                <header><h3 style = {headerStyle}>Teleloperated</h3></header>
                <div style = {topSpace}></div>
                <Container fluid style = {center}>
                    <Row>
                        <Col><PlusMinusStat title = "Bottom Scored"/></Col>
                        <Col><PlusMinusStat title = "Outer Scored"/></Col>
                        <Col><PlusMinusStat title = "Inner Scored"/></Col>
                        <Col><PlusMinusStat title = "Missed"/></Col>
                    </Row>
                    <Row>
                        <Col><div style = {topSpace}></div></Col>
                    </Row>
                    <Row>
                        <Col><PlusMinusStat title = "Cycles"/></Col>
                        <Col><BooleanStat title = "CP Rotation?"/></Col>
                        <Col><BooleanStat title = "CP Position?"/></Col>
                    </Row>
                    <Row>
                        <Col><div style = {topSpace}></div></Col>
                    </Row>
                    <Row>
                        <Col><PlusMinusStat title = "T-Zone Attempt"/></Col>
                        <Col><PlusMinusStat title = "Init Line Attempt"/></Col>
                        <Col><PlusMinusStat title = "N Trench Attempt"/></Col>
                        <Col><PlusMinusStat title = "F Trench Attempt"/></Col>
                    </Row>
                    <Row>
                        <Col><SwitchStat title = "Defense" options={["1","2","3","4","5"]}/></Col>
                    </Row>
                </Container>
                <div style = {topSpace}></div>
                <header style = {headerStyle}><h3>Endgame</h3></header>
                <div style = {topSpace}></div>
                <Container fluid style = {center}>
                    <Row>
                        <Col><BooleanStat title = "Climbed?"/></Col>
                        <Col><BooleanStat title = "Leveled?"/></Col>
                        <Col><SwitchStat title = "Where did they climb?"options={["L","R","C","N/A"]}/></Col>
                    </Row>
                    <Row>
                        <Col><div style = {topSpace}></div></Col>
                    </Row>
                    <Row>
                        <Col><BooleanStat title = "Parked?"/></Col>
                        <Col>
                        <p> Time Left </p>
                        <InputGroup style = {halfWidth}>
                            <FormControl       
                                placeholder="Time"
                                aria-label="Time"
                                aria-describedby="basic-addon1"/>
                        </InputGroup >
                        </Col>
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
export default Teleloperated
