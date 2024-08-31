// import React from 'react'
import {useState, useRef} from "react"

import Card from './Card';
function Foreground() {
    const data =
    [
        {
            desc :"the background color of the card and the background",
            filesize: ".9mb",
            close: true,
            tag: {isOpen:true, tagTitle :"Download Now", tagColor :"green"}
        },
        {
            desc :"the background color of the card and the background",
            filesize: ".9mb",
            close: true,
            tag: {isOpen:true, tagTitle :"Download Now", tagColor :"green"}
        },
        {
            desc :"the background color of the card and the background",
            filesize: ".9mb",
            close: true,
            tag: {isOpen:true, tagTitle :"upload", tagColor :"blue"}
        }
    ]
    // useState()
    const ref = useRef(null)

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-3 flex-wrap p-5">
        
       {data.map((item,index)=>(
        <Card data={item} reference={ref} />
       ))}
      </div>
  )
}

export default Foreground