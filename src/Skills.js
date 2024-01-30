

import "./Skills.css";
import Reactsvg from"./svg/reactsvg.jsx";
import Htmlsvg from "./svg/html.jsx";
import Csssvg from "./svg/css.jsx"
import Jssvg from "./svg/js.jsx"
import Expresssvg from "./svg/express.jsx"
import Nodesvg from "./svg/nodesvg.jsx"
import Dockersvg from "./svg/docker.jsx"
import Gitsvg from "./svg/git.jsx"
import Javasvg from "./svg/java.jsx"
import Jirasvg from "./svg/jira.jsx"
import Mongosvg from "./svg/mongo.jsx"
import Postgresvg from "./svg/postgreSQl.jsx"
import Pythonsvg from "./svg/python.jsx"
import Springsvg from "./svg/spring.jsx"
import Mysqlsvg from "./svg/mysql.jsx";
import Sqlsvg from "./svg/sql.jsx";
import Csvg from "./svg/c.jsx";
import Gitlabsvg from "./svg/gitlab.jsx";



function Skills(){

    return(
        <div>

<h1 className="skillhead" style={{fontSize:"40px"}}> <strong> Skills 👨🏻‍💻</strong></h1>

      <div className="casediv">

      <div className="lang">
      <h1>Languages</h1>

      <div className="row1">
      <Pythonsvg/>
      <Javasvg/>
      <Csvg/>
      </div>

      <div className="row2">

      </div>
      
      <div className="row3">

      </div>

    
      
      

      </div>

      <div className="web">
      <h1>Web Development</h1>

      <div className="row1">

      <Reactsvg/>
      <Htmlsvg />
      <Csssvg/>
      </div>
      <div className="row2">
       
      <Jssvg/>
      <Expresssvg/>
      <Nodesvg/>

      </div>
      <div className="row3"></div>
    

     
      </div>

      <div className="data">
      <h1> Data</h1>

      <div className="row1">
      <Postgresvg/>
      {/* <Sqlsvg/> */}
      <Mysqlsvg/>

      <Mongosvg/>
      </div>
      <div className="row2">

      </div>
      <div className="row3">

      </div>
   
   


     

      </div>

      <div className="devtools">
      <h1>Dev Tools</h1>

      <div className="row1">
      <Gitsvg/>
      <Dockersvg/>
      <Jirasvg/>
     
      </div>
      <div className="row2">
      <Gitlabsvg/>
      
      </div>

      
      <div className="row3"></div>
    

      </div>

 
      


      </div>





        </div>
    )

}

export default Skills;




// Programming & Scripting: Python, Java (including JavaFX), JavaScript, SQL, HTML, CSS, Fortran, C
// •
// Web Development & APIs: RESTful Web API Development, HTML, CSS, JavaScript (React.js, Node.js, Express.js, p5.js)
// •
// Database & Data Analysis Tools: MySQL, MongoDB, PostgreSQL, Neo4J, Pandas, NumPy, Matplotlib, Seaborn, Scikit-Learn, Jupyter Notebook, MS Excel, Power BI
// •
// Development Tools & Methodologies: Git (Version Control), GitHub, Scrum, Agile Methodologies, Unit Testing (including J-Unit), Debugging, Root Cause Analysis, Jira
// •
// Containerization & Deployment: Docker, Continuous Integration/Continuous Deployment (CI/CD) pipelines