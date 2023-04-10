import React, {useEffect, useState} from "react";
import Cards from "./Cards";
function Home() {


  return (
      <div className='container'>
          <div className='header'>
              <h3 className="h4slim">Reliable, efficient delivery</h3>
              <h3 className="h4bold">Powered by Technology</h3>
              <p className="pslim">Our Artificial Intelligence powered tools use millions of project data <br/>points to ensure that your project is successful</p>
          </div>
         <Cards />


      </div>


  );
}

export default Home;
