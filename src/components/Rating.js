import React from 'react'

function Rating({data}) {
  return (
    <div>{data.map(item=>(
        <>
        <h3>{item.name}</h3>
        <p>{item.date}</p>
        <p>{item.comments}</p>
        </>
    ))}</div>
  )
}

export default Rating