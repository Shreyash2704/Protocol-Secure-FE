import React from 'react'
import './LandingPage.css'
import Header from '../Header/Header'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div className='LandingPageRoot'>
        <div className="bannerSection">
            <Header />
        </div>
    </div>
  )
}

export default LandingPage