import data from "./data";
import img from "./checked_img.png"
import { useState,useEffect} from "react";
import logo from "./logo.png"



function Ques()
{
  const [ans,setAns] = useState(0)
  const [index,setIndex] = useState(0);
  const [timer, setTimer] = useState(300);

  useEffect( ( ) => {
    const intervalId = setInterval( () => {setTimer(t=>t-1)} , 1000);


    return () => clearInterval(intervalId);
  } , []);


  const min = Math.floor(timer/60)
  const sec = timer - Math.floor(timer/60)*60

  const handleSelect = (selection) => 
  {
    setAns( (data[index].correctAnswer === (selection)) ? ans+1:ans);
  };

  if(index>=10)
  {
    return(


      <center>


        <img style={{"marginTop":"100px"}} className="result" src={img} alt="test_img"/>

        <h1 className="result">
          TEST SUBMITTED SUCCESSFULLY
        </h1>

        <p className="result">YOUR SCORE IS {ans}</p>

      </center>


    )
  }
  else
  {
    return(

      <div className="QuesCard">
  
        <h2 className="heading"><img src={logo} alt="logo" style={{"height":"60px","textAlign":"center"}}/>KWIZ (yes Spelling wrong ye raasa) <span> {String(min)} {min} : {sec} </span> </h2>
        <p className="Question">Q. {data[index].question}</p>
  
        <p>Choose the  correct answer  among given options :  </p>
        {data[index].options.map(   (option, i) =>  <Option key={option} text={option} onSelect={ handleSelect }  opt={i}/>    )}
   


        <div className="btns">
          <button onClick={()=>setIndex((index) => index+=1 )} className="next">  next  </button>
          <button disabled className="submit-btn">submit</button>
        </div>
        


        <p>{ans}</p>
  
      </div>
    );
  }
}



function Option({text,onSelect,opt})
{
  return  <p className="Answer" onClick={() => onSelect(text)}>{String.fromCharCode(65 + opt)} . {text}</p>
}

export default Ques;