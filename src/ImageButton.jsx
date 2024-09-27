function ImageButton() {

    const handleClick = (e) => {

        e.target.src = "https://picsum.photos/200/400"

    }
    return (
        <>
            <img onClick={(e) => handleClick(e)} src="https://picsum.photos/200/300" alt="image" />
        </>
    );

}

export default ImageButton