import React from 'react'
import './Explorer.css'
import Header from '../Header/Header'
import CustomTable from '../CustomTable/CustomTable'
import tableData from './tabledata.json'
import { ColumnsType } from '@/Config/types'
type Props = {}

const data = tableData["Columns"] as ColumnsType

const Explorer = (props: Props) => {
  return (
    <>
    <Header />
    <div className='ExplorerRoot'>
        <div className="SearchProject">
            <input type="text" className='searchInput' placeholder='Search or Paste contract address'/>
            <button>Submit</button>
        </div>
        <CustomTable preClass={"explorer"} columns={tableData.Columns}></CustomTable>
    </div>
    </>
  )
}

export default Explorer