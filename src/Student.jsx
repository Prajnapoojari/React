const Frnd1=()=>{
   return(
       <div><h2>My Friend1 Details</h2>
                       <h3>Name:Madl</h3>
                       <h3>Branch:BCA</h3>
                       <h3>Age:20</h3> </div>)
    }

function Frnd2(){
    return(
        <div><h2>My Friend2 Details</h2>
            <h3>Name:Moti</h3>
            <h3>Branch:BCA</h3>
            <h3>Age:20</h3>
            </div> )
    }

function Frnd3(){
    return(
        <div><h2>My Friend2 Details</h2>
            <h3>Name:Poori</h3>
            <h3>Branch:BSC</h3>
            <h3>Age:19</h3>
            </div> )
    }

function Student(){
    return(
        <div>
            <h2>My Details</h2>
            <h3>Name:Prajna</h3>
            <h3>Branch:BCA</h3>
            <h3>Age:21</h3>
            <Frnd1/>
            <Frnd2/>
            <Frnd3/>
            </div>
        )
    }

export default Student;