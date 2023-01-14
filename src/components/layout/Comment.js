import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
export class Comment extends Component {//style={size}
    render() {
        return (
            <><div style={topMargin}/>
            <div className="comment">
                <p>Comment</p>
                <InputGroup onChange={this.props.sendComment} type="text">
                    <FormControl />
                </InputGroup>
            </div></>
        )
    }
}
/** "text-align: center;margin: auto;width: 80%;padding: 30px;margin-top: 500px;"*/
/**const size = {
    textAlign: "center",
    margin: "auto",
    width: "80%",
    padding: 30, 
}*/
const topMargin = {
    topMargin: "10%",
}
export default Comment
