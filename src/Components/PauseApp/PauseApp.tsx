import React, { useState } from "react";
import Header from "../Header/Header";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  TagLabel,
} from "@chakra-ui/react";
import "./PauseApp.css";
import groupicon from "../../assets/app/group_icon.svg";
import ddicon from "../../assets/app/chevron-down.svg";
import mediatoricon from "../../assets/app/mediator.svg";
import { iconMap, MAINTAINER_ENUM } from "../../Config/data";
import { useChains } from "wagmi";

type Props = {};

const PauseApp = (props: Props) => {
  const Chains = useChains();
  const [selectNetwork, setselectNetwork] = useState<any>(null);
  return (
    <>
      <Header />
      <div className="PauseAppRoot">
        <div className="form">
          <div className="headline">List your Protocol</div>
          <FormControl>
            <FormLabel>Protocol Contract address </FormLabel>
            <Input type="text" placeholder="evm address" />
            {/* <FormHelperText></FormHelperText> */}
          </FormControl>

          <div>
            <Menu>
              <label>Select Network</label>
              <MenuButton as={Button}>
                {selectNetwork ? (
                  <>
                    <Image
                      boxSize={"20px"}
                      objectFit="cover"
                      src={iconMap[selectNetwork.id]}
                      alt="logo"
                      sx={
                        {
                          // marginLeft:"auto"
                        }
                      }
                    />
                    {selectNetwork.name}
                  </>
                ) : (
                  <>
                    <Image
                      objectFit="cover"
                      src={groupicon}
                      alt="logo"
                      sx={{
                        borderRadius: "0% !important",
                      }}
                    />
                    +5 networks
                    <Image
                      boxSize={"20px"}
                      objectFit="cover"
                      src={ddicon}
                      alt="logo"
                      sx={{
                        marginLeft: "auto",
                      }}
                    />
                  </>
                )}
              </MenuButton>

              <MenuList>
                {Chains &&
                  Chains.map((ele) => {
                    return (
                      <>
                        <MenuItem onClick={() => setselectNetwork(ele)}>
                          <Image
                            boxSize={"20px"}
                            objectFit="cover"
                            src={iconMap[ele.id]}
                            alt="logo"
                            sx={
                              {
                                // marginLeft:"auto"
                              }
                            }
                          />
                          {ele.name}
                        </MenuItem>
                      </>
                    );
                  })}
              </MenuList>
            </Menu>
          </div>
          <FormControl>
            <FormLabel>Staked Amount</FormLabel>
            <Input type="text" placeholder="1 ETH" />
            {/* <FormHelperText></FormHelperText> */}
          </FormControl>
          <div>
            <Menu>
              <label>Select Mediator</label>
              <MenuButton as={Button}>
                <Image objectFit="cover" src={mediatoricon} alt="logo" />

                <Image
                  boxSize={"20px"}
                  objectFit="cover"
                  src={ddicon}
                  alt="logo"
                  sx={{
                    marginLeft: "auto",
                  }}
                />
              </MenuButton>

              <MenuList>
                <MenuItem>{MAINTAINER_ENUM.GOV.label}</MenuItem>
                <MenuItem>{MAINTAINER_ENUM.PROTO_SECURE.label}</MenuItem>
                <MenuItem>{MAINTAINER_ENUM.SEAL911.label}</MenuItem>
              </MenuList>
            </Menu>
          </div>
          <FormControl>
            <FormLabel>Project Name </FormLabel>
            <Input type="text" placeholder="project name" />
            {/* <FormHelperText></FormHelperText> */}
          </FormControl>

          <FormControl>
            <FormLabel>Logo Url </FormLabel>
            <Input type="text" placeholder="logo url" />
            {/* <FormHelperText></FormHelperText> */}
          </FormControl>

          <button className="form-save" disabled>Save</button>
        </div>
        <div className="preview"></div>
      </div>
    </>
  );
};

export default PauseApp;
