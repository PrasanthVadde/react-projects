import { useCallback, useState } from "react";
import MainHeading from "../../headings/heading";
import  CustomButton  from "../../button/button";

export const BasicUseCallback = () => {
  const [toggle, setToggle] = useState(false);
  const [age, setAge] = useState(10);

  const toggleHandler = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);
  const ageHandler = useCallback(() => {
    setAge((age) => age + 1);
  }, [age]);

  return (
    <>
      {toggle ? <h2>Welcome</h2> : <h2>Login</h2>}
      <MainHeading />
      <CustomButton text={"Toggle"} onPress={toggleHandler} />
      <h2>Age: {age}</h2>
      <CustomButton text={"Age"} onPress={ageHandler} />
    </>
  );
};
