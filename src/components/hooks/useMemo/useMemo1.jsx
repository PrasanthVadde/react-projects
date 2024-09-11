import { useMemo, useState } from "react";

export const UseMemo1 = () => {
  const [age, setAge] = useState(10);
  const [salary, setSalary] = useState(1000);

  const ageEvenChecker = useMemo(() => {
    console.log("Even Checking...");
    return age % 2 == 0 ? "Age is Even" : "Age is Odd";
  }, [age]);

  const ageHandler = () => {
    setAge((age) => age + 1);
  };
  const salaryHandler = () => {
    setSalary((salary) => salary + 1000);
  };

  return (
    <>
      <h2>
        Age: {age} is {ageEvenChecker}
      </h2>
      <h2>Salary:{salary}</h2>
      <button onClick={salaryHandler}>Increase Salary</button>
      <button onClick={ageHandler}>Increase Age</button>
    </>
  );
};
