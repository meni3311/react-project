import React from 'react'

function MyBotton(props) {
  return (
    <div>
        <button className='btn btn-dark mx-auto d-block'>{props.name}</button>
    </div>
  )
}

export default MyBotton