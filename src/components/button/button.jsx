import React from "react";

const CustomButton = ({ text = "", onPress = () => {} }) => {
  console.log("Child re-render", text);
  return (
    <>
      <button onClick={onPress}>{text}</button>
    </>
  );
};

export default React.memo(CustomButton)