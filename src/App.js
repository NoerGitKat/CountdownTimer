import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      deadline: this.state.newDeadline
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Countdown to {this.state.deadline}</h1>
        <Timer deadline={this.state.deadline} />
        <div id="newdate">
          <input onChange={event => this.setState({ newDeadline: event.target.value})} type="text" placeholder='Insert New Date...'/>
          <button onClick={() => this.handleClick()}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
