import React from 'react'
import arrowLeft from "../../assets/arrow-left.svg";
import tableData from './tables.json'
import './CustomTable.css'
import { ColumnsType,dataType } from '../../Config/types'
import { Image } from '@chakra-ui/react';
import { iconMap } from '../../Config/data';

type Props = {
    preClass:string,
    columns:ColumnsType,
    data:dataType[] | null
}


const CustomTable = ({preClass,columns,data}: Props) => {
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
           
                <tr>
                  <td>
                    aaaaaa
                  </td>
                  <td>
                    bbbb
                  </td>
                  <td>
                    ccccccccc
                  </td>
                  <td>
                    dddddddddddd
                  </td>
                </tr>
                {data && data.map(ele =>{
                    return<>
                    <tr>
                        <td>{ele.projectName}</td>
                        <td>{ele.bountyAmt}</td>
                        <td>
                          {ele.chainID}
                          <Image src={ele.chainID ? iconMap[ele.chainID] : ""} alt="logo" boxSize={"24px"}/>
                          </td>
                        <td>{ele.status}</td>
                        <td>
                          
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