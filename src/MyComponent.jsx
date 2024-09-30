import { useState } from "react";

function MyComponent() {
    const [car,setCar] = useState(
        {
            make :"Tata",
            year : 2023,
            model: "INDICA"
        }
    );

    const handleYear = (event) =>{
        setCar(c=>({...c,year:event.target.value}))
    };
    const handleMake = (event) =>{
        setCar(c=>({...c,make:event.target.value}))
    };
    const handleModel = (event) =>{
        setCar(c=>({...c,model:event.target.value}))
    };

    return (
        <div>
            <p> Car : {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYear} /><br />
            <input type="text" value={car.make} onChange={handleMake} /><br />
            <input type="text" value={car.model} onChange={handleModel}/>
        </div>
    );
    
}

export default MyComponent;