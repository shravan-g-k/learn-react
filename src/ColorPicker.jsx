import React,{useState} from 'react';
function ColorPicker(){

    const [color,setColor] = useState("#FFFFFF")

    const handleColorChange = (event)=>{
        setColor(event.target.value);
    };
    return (
        <div className='color-picker-container'>
            <h1>Select Color</h1>
            <div className='color-display' style={{backgroundColor : color}}>
            <p>Selected Color : {color}</p>
            </div>  
            <label>Selected Color : </label>
            <input type="color" value={color} onChange={handleColorChange} />

        </div>
    );

}

export default ColorPicker;