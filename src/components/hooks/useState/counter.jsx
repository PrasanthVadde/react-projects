import { useState } from "react";

export const Counter = () => {
  const [count, setCounter] = useState(0);

//   const incrementHandler = () => {
//     setCounter(count + 1);
//   };
//   const decrementHandler = () => {
//     if (count >= 1) {
//       setCounter(count - 1);
//     }
//   };
//   const reset = () => {
//     setCounter(0);
//   };

  const counterHandler =(type)=>{
    switch(type){
        case "INCREMENT":
            setCounter(count=>count+1)
            break
        case "DECREMENT":
            if(count>=1){
                setCounter(count=>count-1)
            }
            break
        case "RESET":
            setCounter(0)
            break
        default:
            break
    }
  }


  return (
    <>
      <h3>Counter Example</h3>
      <h3>Current count {count}</h3>

      <button onClick={()=>counterHandler("INCREMENT")}>Increment</button>
      <button onClick={()=>counterHandler("DECREMENT")}>Decrement</button>
      <button onClick={()=>counterHandler("RESET")}>Reset</button>
    </>
  );
};
