import React from 'react'

function BtPage(props) {
    
    return (
        <button onClick={() => props.setCurrentPage(props.index)} className='btn btn-dark me-2 mb-2' style={{ color: props.currentPage === props.index ? 'red' :'white'}}>
            {props.index + 1}
        </button>
    )
}

export default BtPage