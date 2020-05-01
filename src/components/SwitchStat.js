import React, { Component } from 'react'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
export class SwitchStat extends Component {
    render() {
        let rend;
        switch(this.props.options.length){
            case 3:
                rend = (
                    <div style = {overallStyle} >
                    <h6>{this.props.title}</h6>
                        <ToggleButtonGroup type = 'radio' name = {this.props.title} className = "thin" >
                            <ToggleButton type = 'radio'  value = {this.props.options[0]} variant="danger" size = "lg" style = {buttonStyle}>{this.props.options[0]}</ToggleButton>
                            <ToggleButton type = 'radio'  value = {this.props.options[1]} variant="danger" size = "lg" style = {buttonStyle}>{this.props.options[1]}</ToggleButton>
                            <ToggleButton type = 'radio'  value = {this.props.options[2]} variant="danger" size = "lg" style = {buttonStyle}>{this.props.options[2]}</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                )
                break;
            case 4:
                rend = (
                    <div style = {overallStyle}>
                    <h6>{this.props.title}</h6>
                        <ToggleButtonGroup type = 'radio' name = {this.props.title} className = "thin">
                            <ToggleButton type = 'radio'  value = {this.props.options[0]} variant="danger" size = "lg" style = {buttonStyle}>{this.props.options[0]}</ToggleButton>
                            <ToggleButton type = 'radio'  value = {this.props.options[1]} variant="danger" size = "lg" style = {buttonStyle}>{this.props.options[1]}</ToggleButton>
                            <ToggleButton type = 'radio'  value = {this.props.options[2]} variant="danger" size = "lg" style = {buttonStyle}>{this.props.options[2]}</ToggleButton>
                            <ToggleButton type = 'radio'  value = {this.props.options[3]} variant="danger" size = "lg" style = {buttonStyle}>{this.props.options[3]}</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                )
                break;
            case 5:
                rend = (
                    <div style = {overallStyle}>
                    <h6>{this.props.title}</h6>
                        <ToggleButtonGroup type = 'radio' name = {this.props.title} className = "thin">
                            <ToggleButton type = 'radio'  value = {this.props.options[0]} variant="danger" size = "lg" style = {buttonStyle}>{this.props.options[0]}</ToggleButton>
                            <ToggleButton type = 'radio'  value = {this.props.options[1]} variant="danger" size = "lg" style = {buttonStyle}>{this.props.options[1]}</ToggleButton>
                            <ToggleButton type = 'radio'  value = {this.props.options[2]} variant="danger" size = "lg" style = {buttonStyle}>{this.props.options[2]}</ToggleButton>
                            <ToggleButton type = 'radio'  value = {this.props.options[3]} variant="danger" size = "lg" style = {buttonStyle}>{this.props.options[3]}</ToggleButton>
                            <ToggleButton type = 'radio'  value = {this.props.options[4]} variant="danger" size = "lg" style = {buttonStyle}>{this.props.options[4]}</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                )
                break;
        }
        return rend
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
export default SwitchStat
