import "./Contact.css"



function Contact(){

    return(<div className="OuterDiv">

    <h1 className="head" style={{fontSize:"40px"}}><strong>Get In Touch</strong></h1>
    <p className="Reachout"> Reach out to me via GitHub, LinkedIn or e-mail</p>

    <form className="form" typeof="Submit" > 
   
    {/* <input className="inputBack" type="text" placeholder="Name" required={true}/> 
    
   
    <input className="inputBack" type="email" placeholder="Email" required={true}/>

    <textarea className="inputBack res" type="text" placeholder="Message"  ></textarea> */}
    <a className="line" href="mailto:rajpunjabi47@yahoo.in" >
    <input className="mail fade-button" type="button" value="Mail📮"  ></input> </a>
    </form>

  
 


    </div>)

}

export default Contact