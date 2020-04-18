import React from 'react'

export default class Home extends React.Component {

  render() {
    return (
      <div className='container'>
        <img className='emoji' src={require('images/emoji.png')} />
        <h1 className='title'>Hi there! I'm Remi</h1>
        <h2 className='subtitle'>
          iOS developer at <a href='https://luko.eu' target='_blank'>luko.eu</a><br/>
          Previously Animoji Engineer at <a href='https://support.apple.com/en-gb/HT208986' target='_blank'>Apple</a>.
        </h2>
        <div className='socials'>
          <a target='_blank' href='https://github.com/remstos/'><img src={require('images/github.png')}/></a>
          <a target='_blank' href='https://twitter.com/remsandos/'><img src={require('images/twitter.png')}/></a>
          <a target='_blank' href='https://instagram.com/remi_santos/'><img src={require('images/instagram.png')}/></a>
        </div>
      </div>
    )
  }
}
