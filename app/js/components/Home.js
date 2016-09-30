import React from 'react'

export default class Home extends React.Component {

  render() {
    return (
      <div id='container'>
        <img id='emoji' src={require('images/emoji.png')} />
        <h1 id='title'>That's it.</h1>
      </div>
    )
  }
}
