import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import App from '../../App.js'
export class Comment extends Component {//style={size}
    render(props) {
        console.log("trying to render comment")
        console.log(this.props.curTab)/**  
        if(getTab == 2){//this doesn't work because App object isn't created 
            console.log("we're in teleop");*/
            //if(App.getTab() == 2){console.log("finally this works")}
            //if(props.curTab == 2){console.log("finally this works")}
        if(this.props.curTab==2){
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
        else{
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
}
/** "text-align: center;margin: auto;width: 80%;padding: 30px;margin-top: 500px;"*/
const size = {
    textAlign: "center",
    margin: "auto",
    width: "80%",
    padding: 30, 
}
const topMargin = {
    topMargin: "10%",
}
export default Comment
