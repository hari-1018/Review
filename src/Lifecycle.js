import React, { Component } from 'react';

export default class Lifecycle extends Component {
    constructor() {
      super()
      console.log('Lifecycle Component Constructor')
    }

    componentDidMount() {
      console.log('Lifecycle Component Did Mount')
    }

  render() {
    return (
      <div>Lifecycle</div>
    )
  }
}
