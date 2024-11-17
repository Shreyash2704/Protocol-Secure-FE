import React from 'react'
import arrowLeft from "../../assets/arrow-left.svg";
import tableData from './tables.json'
import './CustomTable.css'
import { ColumnsType,dataType } from '../../Config/types'
import { Image } from '@chakra-ui/react';
import { iconMap } from '../../Config/data';
import { useAccount, useSwitchChain, useTransactionReceipt, useWriteContract } from 'wagmi';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import {abi2} from '../../Config/abi'
import { parseEther } from 'ethers';

type Props = {
    preClass:string,
    columns:ColumnsType,
    data:dataType[] | null
}


const CustomTable = ({preClass,columns,data}: Props) => {
  const { chains, switchChain } = useSwitchChain();
  const {address, chain}  = useAccount()
  const { open, close } = useWeb3Modal();

  const {writeContract,data:txHash,error,status} =  useWriteContract();
  const {data:txReceipt} = useTransactionReceipt();
  const freezeApp = async(productId:number,stakeAmt:string) =>{
    try{
      await writeContract({
        abi:abi2,
        address:"0x1781ce9307FE2524823c7cc86927C6B5125f0b60",
        functionName: "submitSecurityAlert",
        args:[BigInt(productId)],
        value:parseEther(stakeAmt)
      })
    }catch(err){
      console.error("err",err)
    }
  }
  return (
    <div className={`${preClass} table-container`}>
        <table>
          <thead>
            <tr>
              {columns.map((ele) =>{
                return(
                    <>
                    <th>{ele.label}</th>
                    </>
                )
              })}
            </tr>
          </thead>
          <tbody>
                {data && data.map(ele =>{
                    return<>
                    <tr>
                        <td>{ele.projectName}</td>
                        <td>{ele.bountyAmt}</td>
                        <td>
                          {/* {ele.chainID} */}
                          <Image src={ele.chainID ? iconMap[ele.chainID] : ""} alt="logo" boxSize={"24px"}
                          sx={{
                            borderRadius:"50%"
                          }}
                          />
                          </td>
                        <td>{ele.status}</td>
                        <td>
                          {
                            chain && address ? (
                              ele.chainID && parseInt(ele.chainID) === chain.id ? 
                              (<button className='freeze' onClick={async() => await freezeApp(ele.productID,ele.bountyAmt.toString())}>Freeze</button>) : (
                                <button className='switch-network' onClick={() =>{
                                  ele.chainID && switchChain({
                                    chainId:parseInt(ele.chainID)
                                  })
                                }}>Switch Network</button>
                              )
                            ) : (
                              <button className='connect-button' onClick={() => open()}>Connect Wallet</button>
                            )
                          } 
                          
                          

                        </td>
                    </tr>
                    </>
                })}
              

            {/* <tr>
              <td colSpan={6}>
                <div className="table-footer">
                  <button
                    className="previous btns"
                    // onClick={onClickPrev}
                    // disabled={!(pageNo > 1)}
                  >
                    <img src={arrowLeft} className="prev-arrow" />
                    Previous
                  </button>
                  <div className="pagination"></div>
                  <button
                    className="next btns"
                    // onClick={onClickNext}
                    // disabled={!(totalPages > pageNo)}
                  >
                    Next <img src={arrowLeft} className="next-arrow" />
                  </button>
                </div>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
  )
}

export default CustomTable