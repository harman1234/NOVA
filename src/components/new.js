import { react } from "fontawesome";
import { useEffect, useRef, useState,useMemo } from "react";

export default function New(){
    const [Val, setVal] = useState();
    const Val2 = useRef("fghj");
    const btn = useRef();
    const inp = useRef();
    
    
    useEffect(()=>{
        btn.current.addEventListener('click',(e)=>{
            setVal(inp.current.value)
            console.log(Val2.current)
        });
    },[]);

    return<>
        <h1>{Val}</h1><br></br>
        <h1>{Val2.current}</h1><br></br>

        
        <input type="text" ref={inp} />
        <button ref={btn}>click</button>
        <button onClick={()=>{Val2.current = "on4";console.log(Val2.current)}}>button2</button>
        
    </>
}