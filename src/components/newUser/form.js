import React,{useState} from "react";

import './style.css' ;
const Form=()=>
{
// const [nameTargetValue,setnameTargetValue]=useState('')
// const nameChangedHandler=(event)=>{

// setnameTargetValue(event.target.value)  
//   }

// const [ageTargetValue,setAgeTargetValue]=useState('')
// const ageChangedHandler=(event)=>{

// setAgeTargetValue(event.target.value)  
//   }
//   const [dateTargetValue,setDateTargetValue]=useState('')
//   const dateChangedHandler=(event)=>{
  
//   setDateTargetValue(event.target.value)  
//     }
const[userInput,setUserInput]=useState({
    nameTargetValue:"",
    ageTargetValue:'',
    dateTargetValue:''

});


const ageChangedHandler=(event)=>{
    setUserInput({
...userInput,
ageTargetValue:event.target.value
    });
}
const dateChangedHandler=(event)=>{
    setUserInput({
        ...userInput,
        dateTargetValue:event.target.value
            
        });
    }
const nameChangedHandler=(event)=>{
            setUserInput({
                ...userInput,
   nameTargetValue:event.target.value
                    
});
}

return(
<div className="">
    <form>
<div  >
    <div>
        <label>
            Name
        </label>
        <input onChange={nameChangedHandler} type="text"></input>
    </div>
    <div>
        <label>
            Age
        </label>
        <input onChange={ageChangedHandler} type="number" max="60" min="10"></input>
    </div>
    <div>
        <label>
            Date
        </label>
        <input onChange={dateChangedHandler} type="Date"></input>
    </div>
</div>

    </form>
    </div>
);
}

export default Form;