import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
export class Comment extends Component {
    render() {
        return (
            <><div style={topMargin}/>
            <div style={size}>
                <p>Comment</p>
                <InputGroup onChange={this.props.sendComment} type="text">
                    <FormControl />
                </InputGroup>
            </div></>
        )
    }
}

const size = {
    textAlign: "center",
    margin: "auto",
    width: "80%",
}
const topMargin = {
    topMargin: "20"
}
export default Comment
