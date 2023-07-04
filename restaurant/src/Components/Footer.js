import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import '../Styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='social-media'>
            <InstagramIcon/>
            <TwitterIcon/>
            <FacebookIcon/>
            <LinkedinIcon/>

        </div>
        <p>&copy; 2023 deliciouspizza.com</p>

    </div>
  )
}

export default Footer