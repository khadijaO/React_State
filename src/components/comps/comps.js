import React from "react";
import './style.css';
import Comp from './comp';

const user =[
{
    name:"khadija",
    age:"15ans",
    DateAjout:"2019:09:9"},
{
        name:"Aya",
        age:"33ans",
        DateAjout:"2019:09:9"},
{
            name:"Said",
            age:"23ans",
            DateAjout:"2019:09:9"},

]



const comps=()=>{
return (
    <div className="mainDev"> 
    
        <h1>tous vos utilisateur</h1>
        <br/>
        <div>
            {user.map(u =>
                <Comp date={u.date} name={u.name} age={u.age} ></Comp>         
                   )}
            
        </div>

    </div>
);

}

export default comps;