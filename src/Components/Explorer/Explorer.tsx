import React, { useEffect, useState } from 'react'
import './Explorer.css'
import Header from '../Header/Header'
import CustomTable from '../CustomTable/CustomTable'
import tableData from './tabledata.json'
import { ColumnsType } from '@/Config/types'
import axios from 'axios'
type Props = {}

const columns = tableData["Columns"] as ColumnsType

type dataType ={
        guid: string;
        projectName: string;
        email: string | null;
        logoURL: string;
        transactionHash: string | null;
        status: string | null;
        contractAddress: string;
        chainID: string | null;
        bountyAmt: number;
        tokenSymbol: string;
        mediatator: string;
        createdAt: string; // ISO date string
        updatedAt: string; // ISO date string
        id: string;
}
const Explorer = (props: Props) => {

    const [data, setdata] = useState<null | dataType[]>(null)
    const fetchData = async() =>{
        const url ="https://proto-secure-backend-api.onrender.com/api/list-projects"
        const res = await axios.get(url)
        console.log("fetchData",res)
        setdata(res.data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    
  return (
    <>
    <Header />
    <div className='ExplorerRoot'>
        <div className="SearchProject">
            <input type="text" className='searchInput' placeholder='Search or Paste contract address'/>
            <button>Submit</button>
        </div>
        <CustomTable preClass={"explorer"} columns={columns} data={data}></CustomTable>
    </div>
    </>
  )
}

export default Explorer