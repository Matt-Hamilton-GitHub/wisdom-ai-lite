import React, {useContext} from 'react'
import { TableRow } from './TableRow'
import {TableDataContext} from  '../context/TableContext'



export const TableDisplay = () => {

  const { tableData, isLoadingTB, error } = useContext(TableDataContext);
//   console.table(tableData)
  return (
    isLoadingTB ? <h1>Loading</h1> : 
    <div>
        <h1>Table</h1>
        <TableRow data={tableData.slice(0,10)}/>
    </div>
  )
}
