import React from 'react'

export default class Home extends React.Component {

  render() {
    const date = new Date()
    const today = date.toLocaleString('default', { month: 'long', day: 'numeric' })
    return (
      <div>

        {/* Vertical Date */}
        <div className='verticalText'>
          {today}
        </div>

        {/* Center Container */}
        <div className='container'>
          <div className='titlesContainer'>
          <h1 className='title'>REMI.<br/>S<span className='transparent'>AN</span>T<span className='transparent'>OS</span></h1>
          <h2 className='subtitle'>
            iOS developer @ <a href='https://luko.eu' target='_blank'>luko</a><br/>
            Previously Animoji Engineer @ <a href='https://support.apple.com/en-gb/HT208986' target='_blank'>Apple</a><br/>
            Pro rollerblader @ <a href='https://clic-n-roll.com' target='_blank'>Clic-n-Roll</a>.
          </h2>
          </div>
          <img className='memoji left' src={require('images/memoji_left.png')} />
          <img className='memoji up' src={require('images/memoji_up.png')} />
        </div>

        {/* Top Container */}
        <div className='topContainer'>
          <a className='link' target='blank' href='https://instagram.com/remi_santos'>
            <span className='hover-text'>📸 Some fun</span>
            <span className='rotated'>INSTAGRAM</span>
            </a>
          <a className='link' target='blank' href='https://www.linkedin.com/in/remisantos/'>
            <span className='hover-text'>📇 Resume</span>
            <span className='rotated'>LINKEDIN</span>
          </a>

          <a className='link' target='blank' href='https://twitter.com/remsandos'>
            <span className='hover-text'>🦆 Coin</span>
            <span className='rotated'>TWITTER</span>
          </a>
        </div>

        {/* Bottom Container */}
        <div className='bottomContainer'>
          <a className='link disabled'>
            <span className='hover-text'>🙅‍♂️ Come back later</span>
            TODAY
            </a>
          <a className='link disabled'>
            <span className='hover-text'>🙅‍♂️ Come back later</span>
            APPS
          </a>
          <a className='link' href='mailto://hello[hat]remi.st'>
          <span className='hover-text'>📫 Reach out</span>
            HELLO🎩REMI.ST
          </a>
        </div>


      </div>
    )
  }
}
