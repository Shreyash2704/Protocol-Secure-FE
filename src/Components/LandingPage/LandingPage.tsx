import React from 'react'
import './LandingPage.css'
import Header from '../Header/Header'
import logo from '../../assets/app/applogo.svg'
import { Image } from '@chakra-ui/react'
type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div className='LandingPageRoot'>
        <div className="bannerSection">
            <Header />
            <div className="appSec">
            <Image 
               src={logo}
               boxSize={"160px"}
               alt={"logo"}
            />
            
            </div>
            
        </div>
    </div>
  )
}

export default LandingPage