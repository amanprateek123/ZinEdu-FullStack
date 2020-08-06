import React from 'react'
import './Footer.scss'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HomeIcon from '@material-ui/icons/Home';
import Copyright from './Copyright'

export default function Footer() {
    return (
        <div>
        <div className="footer">
            <div className="social">
            <FacebookIcon fontSize="inherit"/>
            <InstagramIcon fontSize="inherit"/>
            <YouTubeIcon fontSize="inherit"/>
            <TwitterIcon fontSize="inherit"/>            
            <LinkedInIcon fontSize="inherit"/>
            </div>
            <div className="foot">
                <div className="contact">
                       <h1>CONTACT US:</h1>
                       <ul>
                           <li>
                          <span>
                              <PhoneInTalkIcon fontSize="inherit"/>
                          </span>
                          +919998887776
                           </li>
                           <li>
                          <span>
                              <MailOutlineIcon fontSize="inherit"/>
                          </span>
                          info@zinedulive.com
                           </li>
                           <li>
                          <span>
                              <HomeIcon fontSize="inherit"/>
                          </span>
                          D 215 Suite G-08, Devsha Business Park, Sec-63 Noida, Uttar Pradesh 201301
                           </li>
                          
                       </ul>
                </div>
                <div className="links">
                  <h1>
                      OTHER USEFULL LINKS:
                  </h1>
                  <ul>
                      <li>About Us</li>
                      <li>Privacy Policy</li>
                      <li>Terms & Conditions</li>
                      <li>Refund Policies</li>
                  </ul>
                </div>
            </div>
        </div>
        <Copyright/>
        </div>
    )
}
