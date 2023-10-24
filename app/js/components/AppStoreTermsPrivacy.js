import React from 'react'

export default class AppStoreTermsPrivacy extends React.Component {

  renderEmpty() {
    return (
      <div></div>
    )
  }

  isValidAppName(appName) {
    return ["likeness", "teamzone", "derush"].includes(appName.toLowerCase())
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    let paths = window.location.hash.split("/")
    if (paths.length < 3) {
        return this.renderEmpty()
    }
    let appName = paths[2]
    if (!this.isValidAppName(appName)) {
      return this.renderEmpty()
    }
    appName = this.capitalizeFirstLetter(appName)
    
    return (
      <div>
        {/* Center Container */}
        <div className='container appstore-legals'>
          <div className='titlesContainer'>
            <h1 className='title'>{appName} • Terms of Use & Privacy Policy</h1>
          <h2 className='subtitle' id="terms">Terms of Use</h2>
          {this.renderTerms()}

          <br/>
          <hr/>

          <h2 className='subtitle' id="privacy">Privacy Policy</h2>
          {this.renderPrivacy()}
          </div>

          <br/>
          

          <p>
            <hr/>
            <br/>
            <h2 className='subtitle' id="terms">Contact Us</h2>
            If you have any questions or suggestions about my Privacy Policy or Terms of Use, do not hesitate to contact me at support@remi.st
            <br/>
            <br/><br/><br/>
          </p>
        </div>


      </div>
    )
  }

  renderTerms(appName) {
    return (<p>
By downloading or using the app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app. 
<br/>
You’re not allowed to copy or modify the app, any part of the app, or our trademarks in any way.
<br/>
You’re not allowed to attempt to extract the source code of the app, and you also shouldn’t try to translate the app into other languages or make derivative versions. 
<br/>
The app itself, and all the trademarks, copyright, database rights, and other intellectual property rights related to it, still belong to Remi Santos.
<br/>
<br/>
Remi Santos is committed to ensuring that the app is as useful and efficient as possible. 
<br/>
For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you’re paying for.
<br/>
<br/>
The {appName} app stores and processes personal data that you have provided to us, to provide my Service. It’s your responsibility to keep your phone and access to the app secure.
<br/>
We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the {appName} app won’t work properly or at all.
<br/>
<br/>
<br/>
Link to Terms and Conditions of third-party service providers used by the app
<ul>
<li><a href="https://www.revenuecat.com/terms">RevenueCat</a></li>
<li><a href="https://mixpanel.com/legal/terms-of-use">MixPanel</a></li>
</ul>
<br/>
You should be aware that there are certain things that Remi Santos will not take responsibility for. Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi or provided by your mobile network provider, but Remi Santos cannot take responsibility for the app not working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of your data allowance left.
<br/><br/>
If you’re using the app outside of an area with Wi-Fi, you should remember that the terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third-party charges. In using the app, you’re accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you’re using the app, please be aware that we assume that you have received permission from the bill payer for using the app.
<br/><br/>
Along the same lines, Remi Santos cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged – if it runs out of battery and you can’t turn it on to avail the Service, Remi Santos cannot accept responsibility.
<br/><br/>
With respect to Remi Santos’s responsibility for your use of the app, when you’re using the app, it’s important to bear in mind that although we endeavor to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. Remi Santos accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app.
<br/><br/>
At some point, we may wish to update the app. The app is currently available on Apple AppStore – the requirements for the system(and for any additional systems we decide to extend the availability of the app to) may change, and you’ll need to download the updates if you want to keep using the app. Remi Santos does not promise that it will always update the app so that it is relevant to you and/or works with the iOS or macOS version that you have installed on your device. However, you promise to always accept updates to the application when offered to you, We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device.
<br/>
<br/>
<br/>
<strong>Changes to This Terms and Conditions</strong>
<br/><br/>
I may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Terms and Conditions on this page.
<br/>
<br/>
These terms and conditions are effective as of 2023-10-23
    </p>)
  }

  renderPrivacy(appName) {
    return (<p>
Remi Santos built the {appName} app as a Freemium app. This SERVICE is provided by Remi Santos at no cost and is intended for use as is.
<br/><br/>
This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.
<br/><br/>
If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.
<br/><br/>
The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at {appName} unless otherwise defined in this Privacy Policy.
<br/><br/><br/>
<strong>Information Collection and Use</strong>
<br/>
<br/>
For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information. The information that I request will be retained on your device and is not collected by me in any way.
<br/><br/>
The app does use third-party services that may collect information used to identify you.
<br/><br/>
Link to the privacy policy of third-party service providers used by the app
<ul>
<li><a href="https://www.revenuecat.com/terms">RevenueCat</a></li>
<li><a href="https://mixpanel.com/legal/terms-of-use">MixPanel</a></li>
</ul>
<br/>
<strong>Log Data</strong>
<br/><br/>
I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.
<br/><br/><br/>
<strong>Cookies</strong>
<br/><br/>
Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device’s internal memory.
<br/><br/>
This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
<br/><br/><br/>
<strong>Service Providers</strong>
<br/><br/>
I may employ third-party companies and individuals due to the following reasons:
<br/>
• To facilitate our Service;<br/>
• To provide the Service on our behalf;<br/>
• To perform Service-related services; or<br/>
• To assist us in analyzing how our Service is used.<br/>
I want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
<br/><br/><br/>
<strong>Security</strong>
<br/><br/>
I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.
<br/><br/><br/>
<strong>Links to Other Sites</strong>
<br/><br/>
This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
<br/><br/><br/>
<strong>Children’s Privacy</strong>
<br/><br/>
These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13 years of age. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do the necessary actions.
<br/><br/><br/>
<strong>Changes to This Privacy Policy</strong>
<br/><br/>
I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page.
<br/><br/>
This policy is effective as of 2023-09-12
    </p>)
  }
}
