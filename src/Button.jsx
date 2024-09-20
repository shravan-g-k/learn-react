function Button() {
    const styles = {
        backgroundColor: "purple",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",

    };
    return (
        <button style={styles}>
            <h1>Click Me</h1>
        </button>
    )

}

export default Button;