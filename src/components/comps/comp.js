import React ,{useState} from 'react';
import styled from 'styled-components';
import "./style.css" 
const Div = styled.div`
// 
`;

const Comp = (props) => {
    const [nom,setNom]=useState(props.name)
    const change=()=>{
        setNom('khadija2')
    console.log("befor "+nom)

    console.log("after "+nom)
    }
// let a=props.name;
   return (<Div className='oneUser'>
    
<span class="date" >{nom}</span>
<span class="date" >{props.age}</span>
<span class="date" >{props.date}</span>

        <button  onClick={change}>
click 
        </button>
        
        </Div>
        ) ;
};
  export default Comp;