export const CustomTodoList = () => {
  const todo = [];

  for (let i = 1; i <= 10; i++) {
    const myObj = {
      id: i,
      text: `Item ${i}`,
    };
    todo.push(myObj);
  }

  return todo;
};
CustomTodoList();
