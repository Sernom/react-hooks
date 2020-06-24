import React, { Component } from 'react'

class ClassCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  incrementCount = (count) => {
    this.setState({ count: count + 1 })
  }

  render() {
    let { count } = this.state
    return (
      <div>
          <button onClick={() => this.incrementCount(count)}> Count {count}</button>
      </div>
    )
  }
}

export default ClassCounter