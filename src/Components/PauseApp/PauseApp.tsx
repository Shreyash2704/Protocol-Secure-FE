import React, { useEffect, useState } from "react";
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
import { useChains, useTransactionReceipt, useWriteContract } from "wagmi";
import axios from "axios";
import {abi2} from '../../Config/abi'
import { parseEther } from "ethers";
import { useWeb3Modal } from "@web3modal/wagmi/react";
type Props = {};

type obj = {
  chainId: any;
  contractAddress: string;
  projectName: string;
  logoURL: string;
  bountyAmt: string;
  tokenSymbol: string;
  mediatator: string;
  status: string;
  email: string;
};
const PauseApp = (props: Props) => {
  const initialVal: obj = {
    chainId: null,
    contractAddress: "",
    projectName: "",
    logoURL: "",
    bountyAmt: "",
    tokenSymbol: "ETH",
    mediatator: "yes",
    status: "active",
    email: "",
  };
  const { writeContract, data:hashData, isPending, isSuccess, status } =
    useWriteContract();

  const { data: txReceiptData } = useTransactionReceipt({
    hash: hashData
  })
  const [data, setdata] = useState<obj>(initialVal);
  const { open, close } = useWeb3Modal();

  const AllFilled = () => {
    if (
      data.chainId != "" &&
      data.bountyAmt !== "" &&
      data.contractAddress !== "" &&
    //   data.email !== "" &&
      data.logoURL !== "" &&
      data.mediatator !== "" &&
      data.projectName !== "" &&
    //   data.status !== "" &&
      data.tokenSymbol !== ""
    ) {
      setdisableBtn(false);
    } else {
      setdisableBtn(true);
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setdata((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update the key-value pair
    }));
  };
  const handleOnChange = (name: string, value: string) => {
    console.log(name,":",value)
    setdata((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update the key-value pair
    }));
  };
  const onSubmit = async() =>{
    console.log(data)
    const obj = {
        "formData":data
    }
    await callApi(obj)
  }
  const callApi = async (obj:any) => {
    const url = "https://proto-secure-backend-api.onrender.com/api/submit-form";
    // const body = {
    //   projectName: "yes is good",
    //   logoURL: "NO",
    //   bountyAmt: 201230,
    //   tokenSymbol: "ETH",
    //   mediatator: "yes",
    //   status: "active",
    //   email: "",
    //   contractAddress: "1233245456",
    // };
    const res = await axios.post(url, obj);
    console.log("res",res)
    if(res.status === 200){
      console.log("contact call")
        await callContract()
    }
  };

  const callContract = async() =>{
    console.log("bouty amoutn",data.bountyAmt)
    if (data.bountyAmt !== undefined){

    try {
        const result = await writeContract({
          abi2,
          functionName: "bridgeTo",
          args: [
            data.contractAddress,
            data.mediatator
          ],
          //@ts-ignore
          value:  parseEther(data.bountyAmt),
        });
        // setopenTransactionPopup(true);
      } catch (err) {
        console.log("err", err);
      }

    }
  }

  useEffect(() => {
    AllFilled();
  }, [data]);

  useEffect(() => {
   console.log("callContract txReceiptData",txReceiptData)
  }, [txReceiptData])

  useEffect(() => {
    console.log("callContract hashData",hashData)
   }, [hashData])
  

  const Chains = useChains();
  const [selectNetwork, setselectNetwork] = useState<any>(null);
  const [disableBtn, setdisableBtn] = useState(true);
  return (
    <>
      <Header />
      <div className="PauseAppRoot">
        <div className="form">
          <div className="headline">List your Protocol</div>
          <FormControl>
            <FormLabel>Protocol Contract address </FormLabel>
            <Input
              type="text"
              placeholder="evm address"
              onChange={(e) =>
                handleOnChange("contractAddress", e.target.value)
              }
              className="contractAddress"
            />
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
                        <MenuItem
                          onClick={() => {
                            handleOnChange("chainId", String(ele.id));
                            setselectNetwork(ele);
                            handleOnChange("tokenSymbol",ele.nativeCurrency.symbol)
                          }}
                        >
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
            <Input
              type="text"
              placeholder="1 ETH"
              onChange={(e) => handleOnChange("bountyAmt", e.target.value)}
            />
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
                <MenuItem
                  onClick={() => {
                    handleOnChange("mediatator", MAINTAINER_ENUM.GOV.address);
                  }}
                >
                  <Image
                    src={MAINTAINER_ENUM.GOV.icon}
                    boxSize={"22px"}
                    objectFit="cover"
                  />
                  {MAINTAINER_ENUM.GOV.label}
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleOnChange(
                      "mediatator",
                      MAINTAINER_ENUM.PROTO_SECURE.address
                    );
                  }}
                >
                  <Image
                    src={MAINTAINER_ENUM.PROTO_SECURE.icon}
                    boxSize={"22px"}
                    objectFit="cover"
                  />
                  {MAINTAINER_ENUM.PROTO_SECURE.label}
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    handleOnChange(
                      "mediatator",
                      MAINTAINER_ENUM.SEAL911.address
                    );
                  }}
                >
                  <Image
                    src={MAINTAINER_ENUM.SEAL911.icon}
                    boxSize={"22px"}
                    objectFit="cover"
                  />
                  {MAINTAINER_ENUM.SEAL911.label}
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <FormControl>
            <FormLabel>Project Name </FormLabel>
            <Input type="text" placeholder="project name" onChange={(e) => handleOnChange("projectName",e.target.value)} />
            {/* <FormHelperText></FormHelperText> */}
          </FormControl>

          <FormControl>
            <FormLabel>Logo Url </FormLabel>
            <Input type="text" placeholder="logo url" onChange={(e) => handleOnChange("logoURL",e.target.value)} />
            {/* <FormHelperText></FormHelperText> */}
          </FormControl>

          <button className="form-save" disabled={disableBtn} onClick={onSubmit}>
            Save
          </button>
        </div>
        <div className="preview"></div>
      </div>
    </>
  );
};

export default PauseApp;
