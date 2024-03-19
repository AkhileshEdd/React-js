import { useState } from "react"




function Page(){

    // let counter = 10
    let [counter , setCounter] = useState(10)
    let [name , setName] = useState('')
    let [newname, setNewname] = useState('')
    

    function AddCounter(){
        setCounter (counter + 1)
    }

    function SubCounter(){
        setCounter (counter - 1)
    }
    
    const ChangeName = (Event) => {
        setName (Event.target.value)
    }
    const handleChangeName = () => {
        setNewname (name)
    }

    return(
        <>
        <h1>First Component</h1>
        <h3>Counter Value : {counter}</h3>
        <button onClick={AddCounter}>Counter + {counter}</button>
        <button onClick={SubCounter}>Counter - {counter}</button>
        <br/>
        <input type="text" value={name} onChange={ChangeName} placeholder="Enter name"></input>
        <button onClick={handleChangeName}>Click me</button>
        <label>{name}</label><br/>
        <h2>Your name = {newname}:{counter}</h2>
        </>
    );
}


export default Page;