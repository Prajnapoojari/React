

function Grapes()           //Normal function
    {
    return <h2 class="grapes">Grapes is in Green color</h2>
    }
function Orrange()
    {
    return <h3 class="orange">Orragne is in Orange color</h3>
    }

function Apple(){
    return(
        <div><h1 class="apple">Apple is in red color</h1>
        <Grapes/>
        <Orrange/>
        </div>
    )
}
export default Apple;