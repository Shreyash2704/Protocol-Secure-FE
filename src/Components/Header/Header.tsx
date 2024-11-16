import React from 'react'
import icon from '../../assets/app/header/logo.svg'
import { Image } from '@chakra-ui/react'
import './Header.css'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='HeaderRoot'>
        <div className="leftSection">
            <Image
                boxSize='25px'
                objectFit='cover'
                src={icon}
                alt='logo'
            />
            <div className='tag'>
            Proto<span>Secure</span>
            </div>

            
        </div>
        <div className="rightSection">
            <button className='initite-freeze'>Initiate Freeze</button>
            <button className='list-protocol'>List Protocol</button>
            <button className='connect-wallet'>Connect Wallet</button>
        </div>
    </div>
  )
}

export default Header