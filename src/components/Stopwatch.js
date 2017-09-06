import React from 'react';
import PropTypes from 'react-proptypes';
import '../Stopwatch.css'
import { Form, FormControl, Button } from 'react-bootstrap';


class Stopwatch extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			timer: 59,
			newTimer: ''
		};

		this.countingdown = this.countingdown.bind(this);
	}

	//assigns new time from input to state
	countingdown(timer) {
		this.setState({
			timer: this.state.newTimer
		})
	}

	render() {
		if (this.state.timer === 0) {
			alert('DING DING DING, TIME IS UP!');
		}

		return (
			<div id="stopwatch">
				<h1>Here comes a stopwatch!</h1>
				<p>Reaches <strong>ZERO</strong> in {this.state.timer} seconds</p>
				<Form>
					<FormControl className='timer-input' onChange={event => this.setState({ newTimer: event.target.value})} type="number" min='0' max='99999'/>
					<Button onClick={() => this.countingdown()}>Countdown</Button>
				</Form>
			</div>
		)
	}
}

Stopwatch.propTypes = {

}

export default Stopwatch;