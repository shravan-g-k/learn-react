function Food() {
    const food1 = "apple";
    const food2 = "banana";
    const food3 = "orange";

    return (
        <ul>
            <li>{food1.toLocaleUpperCase()}</li>
            <li>{food2.toUpperCase()}</li>
            <li>{food3}</li>
        </ul>
    );
    
}

export default Food