import {useState,useEffect} from 'react';


const Three=(props)=>{
    const[name,setName]=useState("Prajna")
    const[age,setAge]=useState(21)
    useEffect(()=>{
        if(name==="Prajna" && age===21)
                {
                    setName("poojari")
                    setAge("20")
                }
                else
                {
                    setName("Pooja")
                    setAge("22")
                }
            },[])
    return(
            <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            </div>
            )
        }
 export default Three;
