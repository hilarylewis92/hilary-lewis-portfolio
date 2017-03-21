import React, { Component } from 'react'

export default class App extends Component {

  render() {
    return (
      <div className='Home'>
        <h1 className='light'>
          Hilary Lewis.
        </h1>
        <h1 className='light'>
          Mathematician. Creative.
        </h1>
        <h1 className='light'>
          Teacher. Learner.
        </h1>
        <h1
          className='bold'>
          Front End
          <span className='red'>
            Developer.
          </span>
        </h1>
        <h1 className='light'>
          Denver, Colorado.
        </h1>
      </div>
    )
  }
}
