import { useState } from "react";

function MyComponent() {
   const [foods,setFood] = useState(['apple','orange','banana']);

   function handleAddFood() {
    
    let newFood = document.getElementById('foodInputField').value;
    setFood(f=>[...f,newFood]);
    document.getElementById('foodInputField').value = '';
    

   }


   function handleRemoveFood(index) {
    setFood(f=>f.filter((_,i)=>index!=i))
}

   return(
    <div>
        <h1>Foods</h1>
        <ul>
            {foods.map((food,index)=>{
                const f = food.toUpperCase();
                return <li onClick={()=>handleRemoveFood(index)} key={index}>{f}</li>
            })}
        </ul>
        <input type="text" id="foodInputField" placeholder="Enter food name"/>
        <button onClick={handleAddFood}>Add Food</button>
    </div>
   );
    
}

export default MyComponent;