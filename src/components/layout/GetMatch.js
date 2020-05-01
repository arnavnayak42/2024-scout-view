import React, { Component } from 'react'

export class GetMatch extends Component {
    state = {

    }
    render() {
        return (
            <div style = {fullScreen}> 
                <p>there will be a qr code scanner to scan the match. We could either send the whole match or scan every time.</p>
            </div>
        )
    }
}

const fullScreen = {
    height:"100vh"
}
export default GetMatch
