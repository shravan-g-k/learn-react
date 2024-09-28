import React,{ useState  } from 'react'

function Component() {

    const [name,setName] = useState("");
    const [quantity,setQuantity] = useState();
    const [comment,setComment] = useState();
    const [payment,setPayment] = useState("");
    const [shipping,setShipping] = useState(); 

    const handleChanges = (event) => {
        setName(event.target.value);
    }
    const handleQuantityChanges = (event) => {
        setQuantity(event.target.value);
    }

    const handleCommentChanges = (event) => {
        setComment(event.target.value);
    }
    const handlePaymentChanges = (event) => {
        setPayment(event.target.value);
    }

    const handleShippingChanges =  (event) => {
        setShipping(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleChanges}  type="text" />
            <p>{name}</p>
            <input value={quantity} onChange={handleQuantityChanges}  type="number" />
            <p>{quantity}</p>
            <textarea onChange={handleCommentChanges} placeholder='Type here'>{comment}</textarea>
            <p>{comment}</p>
             <select value={payment} onChange={handlePaymentChanges}>
                <option value="">Select</option>
                <option value="visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Rupay">Rupay</option>
            </select>
            <p>{payment}</p>
            <label >
                <input value = "Pick Up" type='radio' onChange={handleShippingChanges} checked={shipping==="Pick Up"}>
                </input>
                Pick Up
            </label>
            <label >
                <input value = "Delivery" type='radio' onChange={handleShippingChanges} checked={shipping==="Delivery"}>
                </input>
                Delivery
            </label>
            <p>
                {shipping}
            </p>
        </div>
    );
    
}

export default Component;