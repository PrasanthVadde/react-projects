import { useState, useEffect, useRef } from "react";

export const UseEffectExample = () => {
  const [position, setPosition] = useState({
    xPosition: 0,
    yPosition: 0,
  });

  const mouseMoveTracker = (event) => {
    const { clientX, clientY } = event;
    setPosition({ ...position, xPosition: clientX, yPosition: clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveTracker);

    return () => {
      //clean up for the memory leaks ---ComponentWillUnmount method
      window.removeEventListener("mousemove", mouseMoveTracker);
    };
  }, []);

  return (
    <>
      <h1>Mouse Position Event using useEffect</h1>

      <h5>X-position:{position.xPosition}</h5>
      <h5>Y-Position:{position.yPosition}</h5>
    </>
  );
};


export const UseEffectExample1=()=>{
    const [salary,setSalary] =useState(10000)
    const salaryRef = useRef(0)

    useEffect(()=>{
        salaryRef.current =salary
    },[salary])

    const salaryHandler=()=>{
        setSalary(salary=>salary+1000)
    }


    return(
        <>
        <h3>Current Salary{salary}</h3>
        <h5>Previous salary reference{salaryRef.current}</h5>
        <button onClick={salaryHandler}>Increase Salary</button>
        </>
    )
}