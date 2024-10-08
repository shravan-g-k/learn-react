import { useState, useEffect } from "react";

function MyComponent() {

  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    document.title = `Width: ${width}, Height: ${height}`;
  }, [width, height]);

  return(
    <>
    <h1>MyComponent</h1>
    <h2>Width: {width}, Height: {height}</h2>
    </>
  );
}

export default MyComponent;