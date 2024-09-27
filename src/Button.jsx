function Button() {

    let clicked = false;
    const handleClick = (e) => {
        if(clicked) {
            e.target.textContent = 'Click me';
            clicked = false;
        }else{

            e.target.textContent = 'Clicked!'
            clicked = true;
        }
    }

    return (
        <>
        <button onClick={(e) => handleClick(e)}>
            Click me
        </button>
        </>
    );
    
}

export default Button;