import React,{useState} from 'react'

function Counter() {
    const initialCount=0;
    const[Count,setCount]=useState(initialCount);
    
    return (
        <div>
         <span className="badge badge-primary" >{Count}</span>   
          <button className="m-2"onClick={()=>setCount(Count+1)}>Increment</button>  
           <button onClick={()=>setCount(initialCount)}>Reset</button>
        </div>
    )
}

export default Counter
