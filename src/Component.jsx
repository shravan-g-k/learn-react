import React,{ useState  } from 'react'

function Component() {

    const [name,setName] = useState("Init");
    const [age,setAge] = useState(0);
    const [isEmployed,toggleStatus] = useState(false);

    const handleClick = ()=>{
        setName("New Name");
    }

    const incrementAge = ()=>{
        setAge(age+1)
    };

    const toggleEmployment = ()=>{
        toggleStatus(!isEmployed)
    };

    return (
        <>
        <h1>{name}</h1>
        <button onClick={handleClick}>Change Name</button>
        <h1>{age}</h1>
        <button onClick={incrementAge}>Increment Age</button>
        <h1>{isEmployed ? "Is employed" : "Is not employed"}</h1>
        <button onClick={toggleEmployment}>toggle Employment</button>
        </>
    );
    
}

export default Component;