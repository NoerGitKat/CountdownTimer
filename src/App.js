import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deadline: 'December 25th, 2017',
      newDeadline: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({
      deadline: this.state.newDeadline
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Countdown to {this.state.deadline}</h1>
        <Timer />
        <div id="newdate">
          <input onChange={event => this.setState({ newDeadline: event.target.value})} type="text" placeholder='Insert New Date...'/>
          <button onClick={() => this.handleSubmit()}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
