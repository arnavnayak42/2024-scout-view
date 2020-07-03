import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
var QRCode = require("qrcode.react");
export class Export extends Component {
  render() {
    return (
      <div>
        <header>
          <h3 style={headerStyle}>Export</h3>
        </header>
        <Row style={fs}>
          {" "}
          <div style={topSpace}></div>{" "}
        </Row>
        <Container fluid style={middle}>
          <Row>
            <QRCode value={JSON.stringify(this.props.data)} style={big} />
          </Row>
          <Row style={fs}>
            <div style={topSpace}></div>
          </Row>
        </Container>
      </div>
    );
  }
}

const topSpace = {
  marginTop: "25vh",
  width: "100%",
};
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
const subHead = {
  textAlign: "center",
  fontSize: "2em",
  padding: "1em",
  paddingBottom: "20px",
  paddingTop: "20px",
  fontFamily: "Code",
  color: "white",
};
const middle = {
  textAlign: "center",
  margin: "auto",
};
const big = {
  textAlign: "center",
  margin: "auto",
  borderStyle: "solid",
};
const fs = {
  height: "100%",
  width: "100%",
};
export default Export;
