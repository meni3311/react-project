import React, { useEffect, useState } from 'react'
import useScroll from './useScroll';

function Scroll() {
    const [ar, setAr] = useState([]);
    const [loading, setLoading] = useState(true);
    const { isEnd, setIsEnd } = useScroll();
    const [skipNext, setSkipNext] = useState(10);

    useEffect(() => {
        doApi(skipNext);
        setSkipNext(skipNext + 10);
    }, [isEnd])

    const doApi = async (skip) => {
        try {
            setLoading(true);
            let url = `https://api.fda.gov/food/enforcement.json?skip=${skip}`;
            let resp = await fetch(url);
            let data = await resp.json();
            console.log(data.results);
            setAr([...ar, ...data.results]);
            setLoading(false);
            setIsEnd(false);

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='container'>
            <h1 className='display-4'>List of recells by the F.D.A </h1>
            <div>
                {ar.map(item =>{
                    return (
                        <article key= {item.event_id} className='col-md-7 border p-4 my-2'>
                            <h2>{item.recalling_firm}</h2>
                        </article>
                    )
                })}
                {loading && <p>Loading...</p>}
            </div>
        </div>
    )
}

export default Scroll