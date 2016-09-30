import React from 'react'

export default class Home extends React.Component {

  render() {
    return (
      <div>
        Home
        <img id="emoji" src={require('images/trash.png')} />
      </div>
    )
  }
}
