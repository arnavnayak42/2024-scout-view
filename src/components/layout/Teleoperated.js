import React, { Component } from 'react';
import PlusMinusStat from '../PlusMinusStat'
import BooleanStat from '../BooleanStat'
import SwitchStat from '../SwitchStat'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
let endgameDataStart = 12;
export class Teleloperated extends Component {
    state = {data:[
        {
            entryName: "botScoredTeleop",
            id: 0,
            value: 0
        },
        {
            entryName: "outerScoredTeleop",
            id: 1,
            value: 0
        },
        {
            entryName: "innerScoredTeleop",
            id: 2,
            value: 0
        },
        {
            entryName: "missed",
            id: 3,
            value: 0
        },
        {
            entryName: "cycles",
            id: 4,
            value: 0
        },
        {
            entryName: "cpRot",
            id: 5,
            value: false
        },
        {
            entryName: "cpPos",
            id: 6,
            value: false
        },
        {
            entryName: "tzoneAttempt",
            id: 7,
            value: 0
        },
        {
            entryName: "initAttempt",
            id: 8,
            value: 0
        },
        {
            entryName: "nTrenchAttempt",
            id: 9,
            value: 0
        },
        {
            entryName: "fTrenchAttmpt",
            id: 10,
            value: 0
        },
        {
            entryName: "defense",
            id: 11,
            value: 0
        },
         // endgame
        {
            entryName: "climbed",
            id: 12,
            value: false
        },
        {
            entryName: "leveled",
            id: 13,
            value: false
        },
        {
            entryName: "climbedPos",
            id: 14,
            value: false
        },
        {
            entryName: "parked",
            id: 15,
            value: false
        },
        {
            entryName: "timeleft",
            id: 16,
            value: 0
        }
    ]

        // tzoneAttempt initAttempt nTrenchAttempt fTrenchAttmpt defense climbed leveled climbedPos parked timeleft
}
    sendData = (data) => {
        let currentState = this.state.data;
        currentState[data.id] = data;
        this.setState({currentState},()=>{
            let teleopData = currentState.slice(0,endgameDataStart);
            this.props.sendTeleop(teleopData);
            let endgameData = currentState.slice(endgameDataStart);
            this.props.sendEndgame(endgameData);
        })
    }
    render() {
        return (
            <div>
                <header><h3 style = {headerStyle}>Teleloperated</h3></header>
                <div style = {topSpace}></div>
                <Container fluid style = {center}>
                    <Row>
                        <Col><PlusMinusStat title = "Bottom Scored" send = {this.sendData} id = {0} entryName = {"botScoredTeleop"}/></Col>
                        <Col><PlusMinusStat title = "Outer Scored" send = {this.sendData} id = {1} entryName = {"outScoredTeleop"}/></Col>
                        <Col><PlusMinusStat title = "Inner Scored" send = {this.sendData} id = {2} entryName = {"innerScoredTeleop"}/></Col>
                        <Col><PlusMinusStat title = "Missed" send = {this.sendData} id = {3} entryName = {"missed"}/></Col>
                    </Row>
                    <Row>
                        <Col><div style = {topSpace}></div></Col>
                    </Row>
                    <Row>
                        <Col><PlusMinusStat title = "Cycles" send = {this.sendData} id = {4} entryName = {"cycles"}/></Col>
                        <Col><BooleanStat title = "CP Rotation?" send = {this.sendData} id = {5} entryName = {"cpRot"}/></Col>
                        <Col><BooleanStat title = "CP Position?" send = {this.sendData} id = {6} entryName = {"cpPos"}/></Col>
                    </Row>
                    <Row>
                        <Col><div style = {topSpace}></div></Col>
                    </Row>
                    <Row>
                        <Col><PlusMinusStat title = "T-Zone Attempt" send = {this.sendData} id = {7} entryName = {"tzoneAttempt"}/></Col>
                        <Col><PlusMinusStat title = "Init Line Attempt" send = {this.sendData} id = {8} entryName = {"initAttempt"}/></Col>
                        <Col><PlusMinusStat title = "N Trench Attempt" send = {this.sendData} id = {9} entryName = {"nTrenchAttempt"}/></Col>
                        <Col><PlusMinusStat title = "F Trench Attempt" send = {this.sendData} id = {10} entryName = {"fTrenchAttempt"}/></Col>
                    </Row>
                    <Row>
                        <Col><SwitchStat title = "Defense" options={[1,2,3,4,5]} send = {this.sendData} id = {11} entryName = {"defense"}/></Col>
                    </Row>
                </Container>
                <div style = {topSpace}></div>
                <header style = {headerStyle}><h3>Endgame</h3></header>
                <div style = {topSpace}></div>
                <Container fluid style = {center}>
                    <Row>
                        <Col><BooleanStat title = "Climbed?" send = {this.sendData} id = {12} entryName = {"climbed"}/></Col>
                        <Col><BooleanStat title = "Leveled?" send = {this.sendData} id = {13} entryName = {"leveled"}/></Col>
                        <Col><SwitchStat title = "Where did they climb?"options={["L","R","C","N/A"]} send = {this.sendData} id = {14} entryName = {"climbedPos"}/></Col>
                    </Row>
                    <Row>
                        <Col><div style = {topSpace}></div></Col>
                    </Row>
                    <Row>
                        <Col><BooleanStat title = "Parked?" send = {this.sendData} id = {15} entryName = {"parked"}/></Col>
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
