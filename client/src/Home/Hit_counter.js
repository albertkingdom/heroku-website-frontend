import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './Hit_counter.scss'

function Hit_counter(){
    const [hitcount,setHitcount] = useState(null)
    
    useEffect(()=>{
        fetch('/hitcount',{
            method:'GET'
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data[0]['count(1)']);
            setHitcount(data[0]['count(1)'])
        })
    },[])
    return (
        <>
            <h6>瀏覽次數</h6>
            <span className="hitcounter">{parseInt(hitcount/100)}</span>
            <span className="hitcounter">{parseInt(hitcount%100/10)}</span>
            <span className="hitcounter">{hitcount%10}</span>
        </>
    )
}

export default Hit_counter