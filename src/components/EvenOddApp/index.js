import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {randomNum: 0}

  getRandomNum = () => {
    this.setState({randomNum: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {randomNum} = this.state
    let evenOdd
    if (randomNum % 2 === 0) {
      evenOdd = 'Even'
    } else {
      evenOdd = 'Odd'
    }
    return (
      <div className="container">
        <div className="scnd-container">
          <h1>Count {randomNum}</h1>
          <p>Count is {evenOdd} </p>
          <button type="button" onClick={this.getRandomNum} className="button">
            Increment
          </button>
          <p>Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
