import React from 'react';
import PropTypes from 'react-proptypes'
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

		console.log(this.props)

		this.getTimeUntil = this.getTimeUntil.bind(this)
	}

	//mounts before render
	componentWillMount() {
		this.getTimeUntil(this.props.deadline);
	}

	//this updates the timer every second
	componentDidMount() {
		setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
	}

	getTimeUntil(deadline) {
		const time = Date.parse(deadline) - Date.parse(new Date());
		
		const seconds = Math.floor((time/1000)%60);
		const minutes = Math.floor((time/1000/60)%60);
		const hours = Math.floor(time/(1000*60*60)%24);
		const days = Math.floor(time/(1000*60*60*24));
	
		this.setState({
			seconds,
			minutes,
			hours,
			days
		});
	}

	leading0(num) {
		if (num < 10) {
			return '0' + num;
		}
		return num;
	}

	render() {
		return (
			<div>
				<ul>
					<li>{this.leading0(this.state.days)} days</li>
					<li>{this.leading0(this.state.hours)} hours</li>
					<li>{this.leading0(this.state.hours)} minutes</li>
					<li>{this.leading0(this.state.seconds)} seconds</li>
				</ul>
			</div>
		)
	}
}

Timer.propTypes = {
	deadline: PropTypes.string.isRequired
}

export default Timer;