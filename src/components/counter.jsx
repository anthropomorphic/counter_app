import React, { Component } from "react"

class Counter extends Component {
  state = {
    value: this.props.value
  }

  handleIncrement = () => {
    this.setState({ count: this.state.value + 1 })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <span className={this.counterClasses()}>
          {this.state.value === 0 ? "Zero" : this.state.value}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    )
  }

  counterClasses() {
    return `badge m-2 badge-${this.state.value === 0 ? "warning" : "primary"}`
  }
}

export default Counter
