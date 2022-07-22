import React from "react";
import { useState } from "react";

const App=()=>{
    let purple='#8e44ad'
    const [bg,setbg]=useState(purple);
    const[name,setname]=useState('Click Me');

    const bgChange=()=>{
        let newColor='#34495e';
        setbg(newColor);
        setname('wow!!:🤩');

    }
    const bgback=()=>{
        setbg(purple);
        setname('Yum:😋')
    }
return(
    <>
        <div style={{backgroundColor:bg}}>
            <button onClick={bgChange} onDoubleClick={bgback}>{name}</button>
        </div>
    </>
)
}
export default App;

