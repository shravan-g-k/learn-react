import { useState } from "react";

function MyComponent() {
   const [cars, setCars] = useState([]);
   const [carYear, setCarYear] = useState(new Date().getFullYear());
   const [carMake, setCarMake] = useState("");
   const [carModel, setCarModel] = useState("");

   function addCar() {
     setCars([...cars, {year: carYear, make: carMake, model: carModel}]);
     setCarYear(new Date().getFullYear());
     setCarMake("");
     setCarModel("");
   }

   function removeCar(index) {
    const newCars = [...cars];
    newCars.splice(index, 1);
    setCars(newCars);
    
   }

   function handleYearChange(event) {
    setCarYear(event.target.value);
    
   }
   function handleMakeChange(event) {
     setCarMake(event.target.value);
   }

   function handleModelChange(event) {
    setCarModel(event.target.value);
    
   }

   return(
    <div>
        <h1>Cars</h1>
        <ul>
            {cars.map((car, index) => (
                <li key={index}>
                    {car.year} {car.make} {car.model}
                    <button onClick={() => removeCar(index)}>Remove</button>
                </li>
            ))}
        </ul>
        <input type="number" onChange={handleYearChange} value={carYear} /> <br />
        <input type="text" onChange={handleMakeChange} value={carMake} placeholder="Make" /> <br />
        <input type="text" onChange={handleModelChange} value={carModel}  placeholder="Model"/><br />
        <button onClick={addCar}>Add Car</button>
    </div>
   );
}

export default MyComponent;