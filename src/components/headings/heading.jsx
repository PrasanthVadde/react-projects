import React from "react";

const MainHeading = (prop) => {
  const { heading, children } = prop;
  return (
    <div>
      {children}

      <h1>{heading}</h1>
    </div>
  );
};
export default React.memo(MainHeading);

export const SecondaryHeading = (prop) => {
  const { heading } = prop;
  return <h2>{heading}</h2>;
};
