import {useState} from 'react'

export default function useCounter(_init) {

    const [count, setCount] = useState(_init);
    const addOne =()=> setCount(count+1);
    const subOne =()=> setCount(count-1);
    const reset =()=>setCount(0);
  
    // return {count, addOne, subOne, reset}

    return [count, addOne, subOne, reset]
}

