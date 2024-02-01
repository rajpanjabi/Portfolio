
import "./Project.css";
import FamilyTravelTracker from './FamilyTravelTracker.png';
import capitalQuizpic from './capitalQuizpic.png';

import uber3 from "./uber3.png"
import codLol from "./codLol.png"
import spotify from "./spotify.png"
import data from "./data.png"


function Project(){
    const Projects=[
        
        
        {   photo:codLol,
            content:"Created an auction-based web application using Spring Boot and React with Maven project management, featuring a product catalog, bidding system, and Stripe-integrated payment processing. Implemented robust user authentication, and containerized the application with Docker for scalable cloud deployment.",
            name:"BidWise Full Stack Web Application",
            type:"java",
            link:"https://www.github.com/Nishiket-singh/Ecom4413"
        },
        {   photo:spotify,
            content:"Developed a Java-based backend for a Spotify clone using Spring Boot, integrating MongoDB and Neo4j to create two efficient, scalable microservices. The project focused on building RESTful API endpoints for specific use-cases, leveraging NoSQL and Graph DB, and refined skills in software architecture and Maven for build automation.",
            name:"API Backend Development with Microservices (Spotify Clone)",
            type:"java",
            link:"https://www.github.com/rajpanjabi/Spotify-Clone "
        },
     
        {   photo:FamilyTravelTracker,
            content:"Travel Tracker is a Node.js and Express web application interfacing with a PostgreSQL database, enabling users to log visited countries, which are then highlighted on an interactive map rendered using EJS templating. The application features a user-friendly interface for adding countries and displays the total count of visited nations.",
            name:"Family Travel Tracker",
            type:"java",
            link:"https://www.github.com/rajpanjabi/TravelTracker"
        },
        {   photo:uber3,
            content:"Developed a predictive model to evaluate Uber Driver’s Lifetime Value using Python libraries, determining key performance indicators and driver tenure to inform strategic business decisions and implement dynamic pricing through clustering.",
            name:"Uber Driver Lifetime Value Analysis",
            type:"Python",
            link:"https://www.github.com/rajpanjabi/Uber_Driver_lifetime_Value_Python"
        },

        {   photo:data,
            content:"Conducted buyer profiling for AeroFit treadmills by analyzing customer demographics, employing descriptive and exploratory analysis with matplotlib and seaborn to distinguish customer characteristics per product, and calculated conditional, marginal probabilities, and outliers impact.",
            name:"Aerofit Treadmill Buyer Profiling",
            type:"python",
            link:"https://www.github.com/rajpanjabi/Treadmill_Buyer_Profiling_Python "
        },

        {  photo:capitalQuizpic,
            content:"Capital City Quiz is an interactive web application where users can test their knowledge of capital cities around the world. Built with Node.js, Express, and PostgreSQL, this quiz challenges users to identify the capital city for each country presented.",
            name:"Capital Quiz Game",
            type:"python",
            link:"https://www.github.com/rajpanjabi/Flag-Quiz"
        },
        
    
    
    ];


    return(

        <div className="baseproject">

        <div className="headerandprojectdesc"> 
        {/* color:"#0066cc" */}
        <h1> <strong style={{ fontSize:"40px"}}> Projects 👨🏻‍💻</strong></h1>
        <p> Below are some of the projects I've worked on </p>
        </div>
        <div className="projectItems" > 
        
        {Projects.map((project)=> (
            
            <a className="projectLink"  href={project.link}>
           
     
        <div className="cardDiv" > 

       <div className="image"> 

        <img className="Photosize" src={project.photo}/>
        </div>

        <div className="namegitcontentbackcolor">
       
       <div className="nameandGit">
        <p> <strong>{project.name} </strong></p>
        
        </div>
      
        <div className="content">
        <p className="contentp">{project.content}</p>
        </div>
        </div>
       

 
         
        
        
        </div>

        </a>
        
        ))}
        
        
        
        </div>

     
        </div>

        
    )
}

export default Project;