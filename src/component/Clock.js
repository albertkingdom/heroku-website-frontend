import React, { useState, useEffect } from "react"
import { TimePicker } from "antd"

function Clock(){

    const [date,setDate] = useState({date:new Date()})
    const timerID=() => setInterval(
                ()=>tick(),
                1000
            )
    useEffect(()=>{
        
        timerID()
        //componentunmount
        // return ()=>{ clearInterval(timerID);}
    },[])

    function tick(){
        setDate({date:new Date()})
    }
    return (
        <div>
            <h2>{date.date.toLocaleTimeString()}</h2>
        </div>
    )
}

export default Clock