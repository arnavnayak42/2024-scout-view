import React, { Component } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
export class PlusMinusStat extends Component {
    state = {
        id: this.props.id,
        // entryName: this.props.entryName,
        value: 0
    }
    changeHandle = (value) =>{
        this.setState({value:value}, () => {
            this.props.send(this.state);
        });
    }
    render() {
        return (
            <div style = {centerStyle}>
            <h6>{this.props.title}</h6>
                <p style = {valueStyle} className = "thin">{this.state.value}</p>
                <ButtonGroup className="mb-2 thin">
                    <Button variant="dark" size = "lg" style = {buttonStyle} onClick = {this.decrement}>-</Button>
                    <Button  variant="danger" size = "lg" style = {buttonStyle} onClick = {this.increment}>+</Button>
                </ButtonGroup>
            </div>
        )
    }
    increment = () => {
        console.log("adding");
        this.setState({value:this.state.value+1}, () => {
            this.props.send(this.state);
        });
    }
    decrement = () => {
        if(this.state.value > 0){
            this.setState({value:this.state.value-1}, () => {
                this.props.send(this.state);
            });
        }
    }
}
// weird styling issues need to be fixed soon
const centerStyle = {
    textAlign: 'center',
    fontSize: "150%",
    width: '14vw',
    display: "inline-block",
    marginLeft: '2%',
    marginRight: '2%',
    height: "20vh"
}
const valueStyle = {
    marginBottom: "0px",
    backgroundColor: "rgba(200,0,0,0.6)",
    textAlign: 'center',
    borderRadius: '6px',
    paddingTop: "5px",
    paddingBottom: "5px",   
    color: 'white'
}
const buttonStyle = {
    width:'7vw',
    marginTop: "0px"
}
export default PlusMinusStat
