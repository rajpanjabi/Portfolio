import Projects from "./Projects"

import About from "./About"
import Skills from "./Skills"
import Contact from "./Contact"
import SlidingDeck from "./SlidingDeck"



function Body(){


    return (
       <div className="mainbody"> 

       <section id="about"> 
       <About/>
       </section>

       <section id="skills"> 
       <Skills/>
       </section>
       
       
       <section id="projects"> 
       <Projects/>
       </section>


       <section id="contact"> 
       <Contact/>
       </section>


       <SlidingDeck/>
       
       
       
       </div> 
    )
}

export default Body;