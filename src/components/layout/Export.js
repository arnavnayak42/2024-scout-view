import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
var QRCode = require('qrcode.react');
export class Export extends Component {
    render() {
        return (
            <div>
                <header><h3 style = {headerStyle}>Export</h3></header>
                <Container fluid style = {middle}>
                    <Row> 
                        <Col>
                        <p style = {middle}> Go to your lead scout to be scanned! 
                        <br></br>Make sure you actually filled out the whole form
                        <br></br>Maybe at a later stage of the app, we can show warnings here
                        about unanswered questions or something</p>
                        </Col>
                    </Row>
                    <Row style = {fs}> <div style = {topSpace}></div> </Row>
                    <Row>   
                        <QRCode value={JSON.stringify(this.props.data)} style = {big}/>
                    </Row>
                    <Row style = {fs}> <div style = {topSpace}></div> </Row>
                </Container>
            </div>
        )
    }
}

const topSpace = {
    marginTop: '15vh',
    width:'100%'
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
const middle = {
    textAlign: 'center',
    margin: 'auto'
}
const big = {
    textAlign: 'center',
    width: '20%',
    height: '20%',
    margin: 'auto'

}
const fs = {
    height: '100%',
    width: '100%'
}
export default Export
