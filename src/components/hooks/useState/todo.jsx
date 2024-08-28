import React, { useState } from "react";
import { CustomTodoList } from "./jsHelpers";

export const Todo = () => {
  const [todo, setTodo] = useState(CustomTodoList());

  const addTodoHandler = () => {
    const currentLength = todo.length;
    const myObj = {
      id: currentLength + 1,
      text: `item ${currentLength + 1}`,
    };
    setTodo([...todo, myObj]);
  };

  const deleteTodoHandler = (targetId) => {
    const filteredTodo = todo.filter((eachTodo) => eachTodo.id != targetId);
    setTodo(filteredTodo);
  };

  const updateTodoHandler = (targetId) => {
    const updatedData = todo.map((eachTodo) => {
      if (eachTodo.id === targetId) {
        return { ...eachTodo, text: `updated item ${targetId}` };
      } else {
        return eachTodo;
      }
    });

    setTodo(updatedData);
  };

  return (
    <>
      <h3>Custom TODO</h3>
      <button onClick={addTodoHandler}>Add Todo</button>
      <ol>
        {todo.map((eachTodo) => {
          const { id, text } = eachTodo;
          return (
            <React.Fragment key={id}>
              <li>
                {text}
                <button onClick={() => deleteTodoHandler(id)}>Delete</button>
                <button onClick={() => updateTodoHandler(id)}>Update</button>
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </>
  );
};
