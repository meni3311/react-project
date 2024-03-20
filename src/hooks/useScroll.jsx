import {useEffect, useState} from 'react'

export default function useScroll() {

    const [isEnd, setIsEnd] = useState(true);

    useEffect(() => {
       window.addEventListener('scroll', onScroll);
       return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onScroll = () => {
        let windowHeight = window.innerHeight;
        let scrollTop = window.document.documentElement.scrollTop;
        let docHeight = document.documentElement.offsetHeight;
        if(docHeight == (windowHeight+scrollTop)) {
            alert('You are at the bottom of the page');
    }};

    return{isEnd, setIsEnd};
}
