import React from 'react'
import arrowLeft from "../../assets/arrow-left.svg";
import tableData from './tables.json'
import './CustomTable.css'

type Props = {
    preClass:string,

}

const CustomTable = ({preClass}: Props) => {
  return (
    <div className={`${preClass} table-container`}>
        <table>
          <thead>
            <tr>
              {tableData.Columns.map((ele) =>{
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