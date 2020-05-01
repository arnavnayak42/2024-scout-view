import React, { Component } from 'react'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
export class BooleanStat extends Component {
    state = {
        value: false
    }
    render() {
        return (
            <div style = {overallStyle}>
            <h6>{this.props.title}</h6>
                <ToggleButtonGroup type = 'radio' name = "hi">
                    <ToggleButton type = 'radio' value = "true" variant="danger" size = "lg" style = {buttonStyle}>Yes</ToggleButton>
                    <ToggleButton type = 'radio' value = "false" variant="danger" size = "lg" style = {buttonStyle}>No</ToggleButton>
                </ToggleButtonGroup>
            </div>
        )
    }
}
const overallStyle = {
    textAlign: 'center',
    display: 'inline-block'
}
const buttonStyle = {
    width: "7vw",
    height: "12vh",
    textAlign: "center",
    paddingTop: "3.5vh"
}
export default BooleanStat
