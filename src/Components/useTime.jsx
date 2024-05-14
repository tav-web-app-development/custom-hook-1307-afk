import { useEffect, useRef, useState } from "react";
const useTime =() =>{
    const [time, setTime]= useState(new Date());
    const intervalIdRef = useRef(null);
    useEffect(()=>{
        intervalIdRef.current = setInterval(() =>{
            setTime(new Date());
        },1000);
        return () =>{
            clearInterval(intervalIdRef.current);
        };



    }, []);
    return time;
}
export default useTime;