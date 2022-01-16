import React, { Component } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
export class SwitchStat extends Component {
	state = {
		id: this.props.id,
		value: this.props.options[0],
	};
	render() {
		let rend;

		return (
			<div style={overallStyle}>
				<h6>{this.props.title}</h6>
				<ToggleButtonGroup
					type='radio'
					name={this.props.title}
					className='thin'
					onChange={this.changeHandle}
				>
					{this.props.options.map((option) => {
						<ToggleButton
							type='radio'
							value={option}
							variant='danger'
							size='lg'
							style={buttonStyle}
						>
							{option}
						</ToggleButton>;
					})}
				</ToggleButtonGroup>
			</div>
		);
	}
	changeHandle = (value) => {
		this.setState({ value: value }, () => {
			this.props.send(this.state);
		});
	};
}
const overallStyle = {
	textAlign: 'center',
	display: 'inline-block',
};
const buttonStyle = {
	width: '7vw',
	height: '12vh',
	textAlign: 'center',
	paddingTop: '3.5vh',
};
export default SwitchStat;
