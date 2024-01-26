
import "./Project.css";
import FamilyTravelTracker from './FamilyTravelTracker.png';
import capitalQuizpic from './capitalQuizpic.png';
import Aerofitpic from "./Aerofitpic.png";
import uberpic from "./uberpic.png"
import codLol from "./codLol.png"


function Project(){
    const Projects=[
        
        
        {   photo:codLol,
            content:"Created an auction-based web application using Spring Boot and React with Maven project management, featuring a product catalog, bidding system, and Stripe-integrated payment processing. Implemented robust user authentication, and containerized the application with Docker for scalable cloud deployment.",
            name:"BidWise Full Stack Web Application",
            type:"java"
        },
        {   photo:codLol,
            content:"Created an auction-based web application using Spring Boot and React with Maven project management, featuring a product catalog, bidding system, and Stripe-integrated payment processing. Implemented robust user authentication, and containerized the application with Docker for scalable cloud deployment.",
            name:"BidWise Full Stack Web Application",
            type:"java"
        },
     
        {   photo:FamilyTravelTracker,
            content:"Travel Tracker is a Node.js and Express web application interfacing with a PostgreSQL database, enabling users to log visited countries, which are then highlighted on an interactive map rendered using EJS templating. The application features a user-friendly interface for adding countries and displays the total count of visited nations.",
            name:"Family Travel Tracker",
            type:"java"
        },
        {   photo:uberpic,
            content:"Developed a predictive model to evaluate Uber Driver’s Lifetime Value using Python libraries, determining key performance indicators and driver tenure to inform strategic business decisions and implement dynamic pricing through clustering.",
            name:"Uber Driver Lifetime Value Analysis",
            type:"Python"
        },

        {   photo:Aerofitpic,
            content:"Conducted buyer profiling for AeroFit treadmills by analyzing customer demographics, employing descriptive and exploratory analysis with matplotlib and seaborn to distinguish customer characteristics per product, and calculated conditional, marginal probabilities, and outliers impact.",
            name:"Aerofit Treadmill Buyer Profiling",
            type:"python"
        },

        {  photo:capitalQuizpic,
            content:"Capital City Quiz is an interactive web application where users can test their knowledge of capital cities around the world. Built with Node.js, Express, and PostgreSQL, this quiz challenges users to identify the capital city for each country presented.",
            name:"Capital Quiz Game",
            type:"python"
        },
        
    
    
    ];


    return(

        <div className="baseproject">

        <div className="headerandprojectdesc"> 

        <h1> <strong> Projects 👨🏻‍💻</strong></h1>
        <p> Below are some of the projects I've worked on </p>
        </div>
        <div className="projectItems" > 
        
        {Projects.map((project)=> (<div className="cardDiv tilt-container" > 

       <div className="image"> 

        <img className="Photosize" src={project.photo}/>
        </div>

        <div className="namegitcontentbackcolor">
       
       <div className="nameandGit">
        <p> <strong>{project.name} </strong></p>
        
        <p>symbol</p>
        </div>
      
        <div className="content">
        <p className="contentp">{project.content}</p>
        </div>
        </div>
       

 
         
        
        
        </div>
        
        ))}
        
        
        
        </div>

     
        </div>

        
    )
}

export default Project;