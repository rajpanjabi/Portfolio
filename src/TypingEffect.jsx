
import React, {useState, useEffect} from 'react';
import "./TypingEffect.css"  

function TypingEffect({text}){

    const [intro,setIntro] =useState("");
    let index =0;

    useEffect(()=>{
        const timer= setInterval(()=>{
          if (index<text.length){
            setIntro((prev)=>
          prev + text.charAt(index));
          index++;} 
          else{clearInterval(timer);}

        },100);
       
        return()=> clearInterval(timer)


    },[text]);

    return <div className="out"> <div className="IntroText" >{intro} </div></div>;



    
};

export default TypingEffect;