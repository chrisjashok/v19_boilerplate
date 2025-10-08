import  { useEffect, useState } from 'react'

function useDimesions() {
    const [sizes, setSizes] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    useEffect(() => {
        const sizeHandler = () => {
            setSizes({ height: window.innerHeight, width: window.innerWidth })
        };
        window.addEventListener('resize', sizeHandler);
        return () => {
            window.removeEventListener('resize', sizeHandler);
        }
    })
    return sizes
}


export default useDimesions;