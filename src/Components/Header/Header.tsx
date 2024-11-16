import React from 'react'
import icon from '../../assets/app/header/logo.svg'
import { Image } from '@chakra-ui/react'
import './Header.css'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useChains, useSwitchChain, useTransactionReceipt, useWriteContract, useWaitForTransactionReceipt } from "wagmi";

type Props = {}

const Header = (props: Props) => {
    const { open, close } = useWeb3Modal();
    const { address, isConnecting, isDisconnected, chain } = useAccount();
  return (
    <div className='HeaderRoot'>
        <div className="leftSection">
            <a href="/">
            <Image
                boxSize='25px'
                objectFit='cover'
                src={icon}
                alt='logo'
            />
            <div className='tag'>
            Proto<span>Secure</span>
            </div>
            </a>
           

            
        </div>
        <div className="rightSection">
            {/* <a className='explorer' href="/explorer">Explorer</a> */}
            <a className='initite-freeze' href="/explorer">Explorer</a>
            <a className='list-protocol' href="/listProtocol">List Protocol</a>
            {/* <a className='connect-wallet'
             onClick={() =>{ 
                if(address){
                    
                }else{
                    open()
                }
                
                }}>{address ? address : "Connect Wallet"}</button> */}
                <w3m-button />
        </div>
    </div>
  )
}

export default Header