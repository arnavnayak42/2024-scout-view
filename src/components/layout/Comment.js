import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
export class Comment extends Component {
	render() {
		return (
			<div style={size}>
				<p>Comment</p>
				<InputGroup onChange={this.props.sendComment} type='text'>
					<FormControl className='textField' />
				</InputGroup>
			</div>
		);
	}
}

const size = {
	textAlign: 'center',
	margin: 'auto',
	width: '80%',
};
export default Comment;
