import React from 'react'

export default class Home extends React.Component {

  render() {
    return (
      <div className='container'>
        <img className='emoji' src={require('images/emoji.png')} />
        <h1 className='title'>Hi there! I'm Remi</h1>
        <div className='socials'>
          <a target='_blank' href='https://github.com/kemcake/'><img src={require('images/github.png')}/></a>
          <a target='_blank' href='https://twitter.com/kemcake/'><img src={require('images/twitter.png')}/></a>
          <a target='_blank' href='https://instagram.com/remi_santos/'><img src={require('images/instagram.png')}/></a>
        </div>
      </div>
    )
  }
}
