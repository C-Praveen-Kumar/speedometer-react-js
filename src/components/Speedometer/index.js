// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    this.setState(prevState =>
      prevState.speed < 200
        ? {speed: prevState.speed + 10}
        : {speed: prevState.speed},
    )
  }

  brake = () => {
    this.setState(prevState =>
      prevState.speed > 0
        ? {speed: prevState.speed - 10}
        : {speed: prevState.speed},
    )
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-container">
        <h1 className="heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />

        <h1 className="speed">Speed is {speed}mph </h1>
        <p className="instruction">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-card">
          <button
            className="button accelerate"
            type="submit"
            onClick={this.accelerate}
          >
            Accelerate
          </button>
          <button className="button Brake" type="submit" onClick={this.brake}>
            Apply brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
