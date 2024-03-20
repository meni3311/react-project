import React, { useEffect } from 'react'
import BtPage from './btPage'
import { useState } from 'react'

function Pegenation(props) {


    const P_FOR_PAGE = 9;
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(props.fruits_ar.length / P_FOR_PAGE);

    useEffect(() => {
        const current = props.fruits_ar.slice(currentPage * P_FOR_PAGE, currentPage * P_FOR_PAGE + P_FOR_PAGE);
        props.setRender_ar(current);
    }, [currentPage, props.fruits_ar])

    const createButtons = (_totalPages) => {
        const buttons = [];
        for (let i = 0; i < _totalPages; i++) {
            buttons.push(<BtPage currentPage={currentPage} setCurrentPage={setCurrentPage} key={i} index={i} />);
        }
        return buttons;
    }

    const next = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
        else {
            setCurrentPage(0);
        }
    }

    const back = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
        else {
            setCurrentPage(totalPages - 1);
        }
    }

    return (
        // <div className=''>
        //     <button className='btn btn-dark me-2 mb-2' onClick={back}>back</button>
        //     {createButtons(totalPages)}
        //     <button className='btn btn-dark me-2 mb-2' onClick={next}>next</button>
        // </div>
        <div >
            <button className='btn btn-dark me-2 mb-2' onClick={back}>back</button>
            {createButtons(totalPages)}
            <button className='btn btn-dark me-4 mb-2' onClick={next}>next</button>
        </div>
    )
}

export default Pegenation