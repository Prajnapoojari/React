import {useState} from 'react';

const TypeDisplayData=()=>
{
    const[data,setData]=useState("")

   const userdata=(event)=>{
       setData(event.target.value)
       }
return(
    <section>
        <h3>{data}</h3>
       <input type="text" placeholder="Enter data here" onChange={userdata}/>
        </section>
    )
}
 export default TypeDisplayData;