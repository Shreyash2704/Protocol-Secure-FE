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
    </div>
  )
}

export default Header