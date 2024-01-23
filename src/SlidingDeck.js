import { useState } from "react"
import "./SlidingDeck.css"
import React from "react"

import forImg from "./forward-svgrepo-com.svg"

function SlidingDeck(){

    const images=["https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg",
    "https://img.freepik.com/premium-photo/random-best-photo_865967-223915.jpg",
    "https://img.freepik.com/free-photo/night-sky-illuminates-majestic-winter-landscape-mountains-generative-ai_188544-12465.jpg",
    "https://www.cntower.ca/sites/default/files/images/explore-cn-tower%20.jpg"
]

const [currIndex,setCurrIndex]= useState(0);

function handlePrevImg(){

    setCurrIndex((prevIndex)=>(prevIndex===0?images.length-1:prevIndex-1) )
    console.log(currIndex);

   

}

function handleNexImg(){

    setCurrIndex((prevIndex)=>(prevIndex===images.length-1?0:prevIndex+1) )
    console.log(currIndex);


}



    return(

        <div className="deck">

        <button className =" backg" onClick={handlePrevImg}>
            <img className ="butsize" src={forImg} alt="backwardicon "></img>
        </button>

        <img className="slideImg" src={images[currIndex]}  alt={images[currIndex]} / > 


        <button className ="butsize backg" onClick={handleNexImg}>
        <img   className ="butsize" src={forImg} alt="forwardicon "></img>
        
        </button>



        </div>



    )
}

export default SlidingDeck