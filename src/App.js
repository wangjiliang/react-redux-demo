import React, { Component } from 'react'
import CartList from './components/CartLIst'

export default class App extends Component {
  render() {
    return (
      <div>
        <CartList store={this.props.store} />
      </div>
    )
  }
}
