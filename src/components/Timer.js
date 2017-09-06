import React from 'react';
import '../Timer.css';

class Timer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		}
	}


	render() {
		return (
			<div>
				<ul>
					<li>{this.state.days} days</li>
					<li>{this.state.hours} hours</li>
					<li>{this.state.hours} minutes</li>
					<li>{this.state.seconds} seconds</li>
				</ul>
			</div>
		)
	}
}

export default Timer;