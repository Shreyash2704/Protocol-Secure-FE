import React from 'react'
import arrowLeft from "../../assets/arrow-left.svg";
import tableData from './tables.json'
import './CustomTable.css'
import { ColumnsType } from '../../Config/types'

type Props = {
    preClass:string,
    columns:ColumnsType
}


const CustomTable = ({preClass,columns}: Props) => {
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
                    
                  </td>
                  <td>
                    
                  </td>
                  <td>
                    
                  </td>
                  <td></td>
                </tr>
              

            <tr>
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
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default CustomTable