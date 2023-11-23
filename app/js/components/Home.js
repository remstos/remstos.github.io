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
            Senior iOS/macOS Engineer @ <a href='https://beamapp.co' target='_blank'>Beam</a><br/>
            Former Animoji Engineer @ <a href='https://support.apple.com/en-gb/HT208986' target='_blank'>Apple</a><br/>
            Pro rollerblader @ <a href='https://clic-n-roll.com' target='_blank'>Clic-n-Roll</a><br/>
            Clothing Brand @ <a href='https://dusk.style' target='_blank'>dusk.</a>
          </h2>
          </div>
          <img className='memoji left' src={require('images/memoji_left_2.png')} />
          <img className='memoji up' src={require('images/memoji_up_2.png')} />
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
          <a className='link' href="https://buymeacoffee.com/rems">
            <span className='hover-text'>☕️ Cheers</span>
            COFFEE
            </a>
          <a className='link' href="https://apps.apple.com/fr/developer/remi-santos/id556149961">
          APPS
            <div className='hover-box'>
              <a href="https://apps.apple.com/app/id1551048893?itscg=30200&amp;itsct=apps_box_appicon">
                <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/46/f5/d1/46f5d10c-3bac-55db-2c5c-a2ac9119b595/AppIcon-0-0-1x_U007epad-0-85-220.png/540x540bb.jpg" alt="Likeness - Memoji picture" />
                Memoji profile picture creator
              </a>              
              <br/>
              <a href="https://apps.apple.com/us/app/teamzone-world-clock-widget/id6461212745?itscg=30200&amp;itsct=apps_box_appicon">
              <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/04/73/6e/04736e14-731c-528b-b6f2-49b9ecc1f543/AppIcon-0-0-1x_U007epad-0-85-220.png/540x540bb.jpg" alt="TeamZone • World Clock Widget" />
                Teamzone widgets for friends & remote teams</a>
              <br/>
              <a href="https://apps.apple.com/app/id6468965239?itscg=30200&amp;itsct=apps_box_appicon">
                <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/52/e7/d6/52e7d694-d39f-7ca5-2158-8bafe7e8927a/AppIcon-0-1x_U007epad-0-85-220-0.png/540x540bb.jpg" alt="Video Cut, Trim, Split &amp; Join" />
                Video Cut & Merge tool
              </a>
              <br/>
              <a href="">Coming soon: Memoji widgets and backgrounds</a>
            </div>            
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
