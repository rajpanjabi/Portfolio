

import codLol from './codLol.png';
import "./About.css"
import Raj from "./Rajj.jpeg"



function About(){
    return(<div className="base">

    <div className="contPhoto">  

    <div className="cont">  

    <h1 style={{fontSize:"40px"}} > About Me 🔍</h1>
    <p> <span style={{fontSize:"30px"}}> 🚀 </span> Hello, I'm <strong> Raj Panjabi</strong>!</p>

    <p><span style={{fontSize:"30px"}}> 🔍 </span>Passionate about the intersection of Data Analytics and Frontend Web Development, I am on a thrilling journey through the world of coding and data science.</p>

    <p><span style={{fontSize:"30px"}}> 🌟 </span>Currently, my adventure is fueled by deep dives into advanced React, Express, and Node.js, sharpening my skills to craft robust, full-featured websites. The realm of Data Mining, Big Data, Machine Learning, and AI is my next frontier, and I'm eager to unravel its mysteries and harness its power.</p>

    <p><span style={{fontSize:"30px"}}> 🤝 </span>I'm on the lookout for opportunities to collaborate with fellow tech enthusiasts who share my zeal for innovation and problem-solving. Together, we can create impactful web solutions for businesses, pushing the boundaries of what's possible in the digital space.</p>

    <p><span style={{fontSize:"30px"}}> 📬</span> Let's connect! You can reach me at rajpunjabi47@yahoo.in. Whether it's a project idea, a business challenge, or a groundbreaking venture, I'm all ears and ready to collaborate.</p>

    <p>Let's code the future, together!</p>

  something about me
  </div>

  <div className="photod">
 
  <img src={Raj} className="pp" alt="codLol" />
 
  
  </div>


  </div>
    </div>)
}
export default About;