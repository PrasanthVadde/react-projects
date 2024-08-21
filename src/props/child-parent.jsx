
export const CustomParent = () => {
  const handleColorChange = (newColor) => {
    document.body.style.backgroundColor = newColor;
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <CustomChild onColorChange={handleColorChange} />
    </div>
  );
};

export const CustomChild = ({ onColorChange }) => {
  const handleChange = (event) => {
    const newColor = event.target.value;
    onColorChange(newColor);
  };

  return (
    <div>
      <input type="color" onChange={handleChange} />
    </div>
  );
};
