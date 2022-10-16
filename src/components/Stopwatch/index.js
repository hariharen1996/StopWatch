import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isTrue: false,
      timer: 0,
    }
  }

  clearTimer = () => {
    clearInterval(this.setTimer)
  }

  executeTimer = () => {
    const {isTrue} = this.state
    if (!isTrue) {
      this.setTimer = setInterval(() => {
        this.startTimer()
      }, 1000)
    } else {
      this.clearTimer()
    }
  }

  startBtnTimer = () => {
    this.setState(prevState => ({
      isTrue: !prevState.isTrue,
    }))
    this.executeTimer()
  }

  stopBtnTimer = () => {
    this.setState(prevState => ({
      isTrue: !prevState.isTrue,
    }))
    this.executeTimer()
  }

  resetBtnTimer = () => {
    this.clearTimer()
    this.setState({
      timer: 0,
      isTrue: false,
    })
  }

  startTimer = () => {
    this.setState(prevState => ({
      timer: prevState.timer + 1,
    }))
  }

  convertFormat = () => {
    const {timer} = this.state
    const min = Math.floor(timer / 60)
    const sec = Math.floor(timer % 60)
    const formatMin = min > 9 ? min : `0${min}`
    const formatSec = sec > 9 ? sec : `0${sec}`
    console.log(formatMin, formatSec)
    return `${formatMin}:${formatSec}`
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="card">
          <div className="clock">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
              className="clock-img"
              alt="stopwatch"
            />
            <p className="clock-text">Timer</p>
          </div>
          <h1 className="timer">{this.convertFormat()}</h1>
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-green"
              onClick={this.startBtnTimer}
            >
              Start
            </button>
            <button
              type="button"
              className="btn btn-red"
              onClick={this.stopBtnTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="btn btn-reset"
              onClick={this.resetBtnTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
