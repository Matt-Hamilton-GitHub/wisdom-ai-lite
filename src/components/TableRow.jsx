import React from 'react'

export const TableRow = ({data}) => {

 console.table(data)
  
  
  return (
      <>
    {data.map(item => {
        return <span>{item.title}</span>
    })}
    </>
  )
}
