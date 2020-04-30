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
            <span>{parseInt(hitcount/100)}</span>
            <span>{parseInt(hitcount/10)}</span>
            <span>{hitcount%10}</span>
        </>
    )
}

export default Hit_counter