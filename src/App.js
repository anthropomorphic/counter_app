import React, { Component } from "react"
import NavBar from "./components/navbar"
import Counters from "./components/counters"
import "./App.css"

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }

  handleDelete = id => {
    this.setState({ counters: this.state.counters.filter(c => c.id !== id) })
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0
      return c
    })
    this.setState({ counters })
  }

  handleIncrement = counter => {
    const counters = this.state.counters.map(c =>
      c.id === counter.id ? { ...c, value: c.value + 1 } : c
    )
    this.setState({ counters })
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    )
  }
}

export default App
