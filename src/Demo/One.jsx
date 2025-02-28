
import {useState,useEffect} from 'react'; // useState is for managing local state. used to add state to functional components
                                          // useEffect is for handling side effects like API calls, subscriptions, or manual DOM updates.
const One=(props)=> {
const {name,age,branch}=props.name
const[city,setCity]=useState("Maravanthe")

useEffect(()=>{
    if(city=="Maravanthe")
    {
        setCity("Kunadapur")
    }
    else
    {
        setCity("HattiKudru")
    }
},[])

  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{branch}</h1>
      <h1>{city}</h1>
      </div>
  );
}

export default One;






