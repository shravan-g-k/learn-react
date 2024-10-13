import { useRef } from "react";

function MyComponent() {

  const ref = useRef(null);
  function handleClick() {
    ref.current.focus();

  }
  return (
    <>
      <button onClick={handleClick}>
        Click me
      </button>
      <input type="text" ref={ref}/>
    </>
  )
}

export default MyComponent;