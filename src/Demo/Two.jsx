import {useState,useEffect} from 'react';

const Two=(props)=>{

    const [dog,setDog]=useState("pinki")
    const [fruits,setFruits]=useState("Mango")
useEffect (()=>{
        if(dog==="pinki" && fruits==="Mango")
        {
            setDog("bablu")
            setFruits("Apple")
        }
        else
        {
            setDog("rani")
            setFruits("Orrange")
        }
    },[])
    return(
        <div>
        <h1>{fruits}</h1>
        <h1>{dog}</h1>
        </div>
        )
    }
 export default Two;

