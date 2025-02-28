import {useState} from 'react';
import Apple from './Apple';
import Fruits from './Fruits';


const Four=()=>{
const[data,setData]=useState(true)

    return(
        <div>
            {data?<Apple/>:<Fruits/>}
            </div>
        )
    }
export default Four;