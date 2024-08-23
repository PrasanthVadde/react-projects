const CustomList = (prop) => {
  const { list } = prop;
  return (
    <ol>
      <>
        {list.map((eachValue, index) => {
          return <li key={index}>{eachValue}</li>;
        })}
      </>
    </ol>
  );
};

export default CustomList;

export const CustomOrderedList = () => {
  return (
    <ol>
      <ListItems />
    </ol>
  );
};

const ListItems = () => {
  const Fruits = ["Apple", "Banana", "Kiwi", "Mango", "Orange"];
  return (
    <>
      {Fruits.map((eachFruit) => {
        return <li>{eachFruit}</li>;
      })}
    </>
  );
};
