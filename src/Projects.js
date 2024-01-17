
import "./Project.css"

function Project(){
    const Projects=[
        {
            photo:"https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg",
            content:"loefvghewrbqjci rhevcbeuhirb urni iuerb uirn erb uienr hbeion bey rne iur oernb  oberi oi",
            name:"ecom website",
            type:"java"
        },
        {
            photo:"https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg",
            content:"loefvghewrbqjci rhevcbeuhirb urni iuerb uirn erb uienr hbeion bey rne iur oernb  oberi oi",
            name:"Uber analysis",
            type:"python"
        },

        {   photo:"https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg",
            content:"loefvghewrbqjci rhevcbeuhirb urni iuerb uirn erb uienr hbeion bey rne iur oernb  oberi oi",
            name:"aerofit treadmill",
            type:"python"
        },

        {  photo:"https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg",
            content:"loefvghewrbqjci rhevcbeuhirb urni iuerb uirn erb uienr hbeion bey rne iur oernb  oberi oi",
            name:"aerofit treadmill",
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
        
        {Projects.map((project)=> (<div className="cardDiv" > 

       <div className="image"> 

        <img className="Photosize" src={project.photo}/>
        </div>

        <div className="namegitcontentbackcolor">
       
       <div className="nameandGit">
        <p> <strong>{project.name} </strong></p>
        
        <p>symbol</p>
        </div>
      
        <div className="content">
        <p className="content">{project.content}</p>
        </div>
        </div>
       

 
         
        
        
        </div>
        
        ))}
        
        
        
        </div>
        </div>
    )
}

export default Project;