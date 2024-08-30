import { useState, useRef } from "react";

export const UseRef = () => {
  const reference = useRef(0);
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    reference.current += 1;
    setCounter((counter) => counter + 1);
  };

  return (
    <>
      <h2>useState :{counter}</h2>
      <h2>useRef :{reference.current}</h2>
      <button onClick={clickHandler}>click</button>
    </>
  );
};
