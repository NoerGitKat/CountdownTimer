import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer';
import Stopwatch from './components/Stopwatch';
import { Form, FormControl, Button } from 'react-bootstrap';

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
        <Form inline={true} id="newdate">
          <FormControl className='deadline-input' onChange={event => this.setState({ newDeadline: event.target.value})} type="text" placeholder='Insert New Date...'/>
          <br />
          <Button onClick={() => this.handleClick()}>Submit</Button>
        </Form>
        <Stopwatch />
      </div>
    );
  }
}

export default App;
