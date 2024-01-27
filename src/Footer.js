import "./Footer.css"

import Linksvg from "./svg/linkedin.jsx";
import Igsvg from "./svg/ig.jsx";
import GitFootsvg from "./svg/gitfoot.jsx";

function Footer(){

    return(<div className="Footer" >
    
  <a className="image-bounce" href="https://www.instagram.com/rajpanjabi__/"> <Igsvg/></a>  
  <a className="image-bounce" href="https://www.linkedin.com/in/rajpanjabi/"> <Linksvg/> </a> 
  <a className="image-bounce"  href="https://www.github.com/rajpanjabi/"> <GitFootsvg/></a> 
    
    </div>)
}




export default Footer