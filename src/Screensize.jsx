import {useState,useEffect} from 'react';
const Screensize=()=>{
    const [screensize,setScreensize]=useState({
        width:window.innerWidth,
        height:window.innerHeight,
        })
const updateScreenSize=()=>{
    setScreensize({
        width:window.innerWidth,
        height:window.innerHeight,
        })
    }
  useEffect(()=>{
      window.addEventListener("resize",updateScreenSize);
      },[])
      return(
          <div>
              <h1>Hai</h1>
              <p>Width:{screensize.width}px</p>
              <p>Height:{screensize.height}px</p>
              </div>

                  )
      }
    export default Screensize;