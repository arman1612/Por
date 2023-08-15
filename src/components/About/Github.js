import React from "react";
import { Row } from "react-bootstrap";
import exampleImage from '../../Assets/Projects/code.png'; // Make sure the path is correct


function App() {
  return (
    <Row style={{ justifyContent:"center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
   
      <img src={exampleImage} alt="Example" b />
       
     </Row>
   );
 }

 export default App;



