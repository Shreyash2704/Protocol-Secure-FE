import React from 'react'
import Header from '../Header/Header'
import { Button, FormControl, FormHelperText, FormLabel, Input, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import './PauseApp.css'


type Props = {}

const PauseApp = (props: Props) => {
  return (
    <>
    <Header />
    <div className="PauseAppRoot">
        <div className="form">
            <div className="headline">List your Protocol</div>
            <FormControl>
                <FormLabel>Protocol Contract address </FormLabel>
                <Input type='text' placeholder='evm address' />
                {/* <FormHelperText></FormHelperText> */}
            </FormControl>

            <Menu>
                <MenuButton as={Button} >
                    Actions
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    
                </MenuList>
                </Menu>
        </div>
        <div className="preview"></div>
    </div>
    </>
  )
}

export default PauseApp