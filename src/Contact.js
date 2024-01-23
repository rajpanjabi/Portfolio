import "./Contact.css"

// import { ReactComponent as MyIcon } from "./github-142-svgrepo-com.svg";

function Contact(){

    return(<div>

    <h1 className="head"><strong>Get In Touch</strong></h1>

    <form className="form" typeof="Submit" > 
   
    <input className="inputBack" type="text" placeholder="Name" required={true}/> 
    
   
    <input className="inputBack" type="email" placeholder="Email" required={true}/>

    <textarea className="inputBack res" type="text" placeholder="Message"  ></textarea>
    
    <input type="button" value="Submit"  ></input>
    </form>

   <p className="Reachout"> Reach out to me via GitHub, LinkedIn or e-mail:</p>
   <p className="Reachout" >Svggsss</p>
   {/* <div className="Reachout" > <MyIcon/> </div> */}


    </div>)

}

export default Contact