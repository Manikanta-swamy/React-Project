import { useState,useEffect } from "react";

import Ques from "./Ques.js"
import "./App.css"


import {Spinner} from 'reactstrap';


function App() 
{


  const [timer, setTimer] = useState(5);

  useEffect( ( ) => {
    const intervalId = setInterval( () => {setTimer(t=>t-1)} , 1000);


    return () => clearInterval(intervalId);
  } , []);


  // const min = Math.floor(timer/60)
  const sec = timer - Math.floor(timer/60)*60


  if(timer>=0)
  {
    return (
      <center style={{"margin":"200px", "fontSize":"30px"}}>
          exam starts in :{sec} 
          <div style={{"margin":"50px"}}>
            <Spinner type="grow" color="primary" />
          </div>
      </center>
    ) 
  }
  else
  {
    return (

      <div className="App">
        <Ques/>
      </div>
    
    )
  }

}


export default App;