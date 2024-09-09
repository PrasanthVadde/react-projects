import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_AGE":
      return { ...state, age: state.age + 1 };
    case "CHANGE_NAME":
      return { ...state, userName: action.payload };
    case "ADD_TODO":
      return { ...state, todo: [...state.todo, action.payload] };
    // case "UPDATE_TODO":
    //   return {
    //     ...state,
    //     todo:state.todo.map((eachTodo,ind)=>{


    //     })
    //   };
    case "DELETE_TODO":
      return {
        ...state,
        todo: state.todo.filter((_, ind) => ind != action.payload),
      };
    default:
      return state;
  }
};



export const BasicUseReducer = () => {
  const initialState = {
    userName: "prasanth",
    age: 22,
    todo: ["woke up at 8 am", "Breakfast at 10 am"],
    homeAddress: {},
  };


  const [currentState, dispatch] = useReducer(reducer, initialState);
  const [enteredName, setEnteredName] = useState("");
  const [newTodo, setNewTodo] = useState("");
  const [updatedTodo, setUpdatedTodo] = useState("");



  const incrementHandler = () => {
    dispatch({
      type: "INCREMENT_AGE",
      payload: 1,
    });
  };



  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };


  const todoHandler = (event) => {
    setNewTodo(event.target.value);
  };


  const onSubmit = () => {
    if (enteredName) {
      dispatch({
        type: "CHANGE_NAME",
        payload: enteredName,
      });
    }
    setEnteredName("");
  };


  const submitTodo = () => {
    if (newTodo) {
      dispatch({
        type: "ADD_TODO",
        payload: newTodo,
      });
    }
    setNewTodo("");
  };


  const deleteHandler = (value) => {
    dispatch({
      type: "DELETE_TODO",
      payload: value,
    });
  };



  const todoUpdateHandler = (event) => {
    setUpdatedTodo(event.target.value);
  };



  const updateHandler = () => {
    if(newTodo){
      dispatch({
        type: "UPDATE_TODO",
        payload:updatedTodo ,
      });
    }
  };



  return (
    <>
      <h2>Use reducer Example</h2>

      <input
        type="text"
        value={enteredName}
        onChange={nameHandler}
        placeholder="Enter Name to change"
      />
      <button onClick={onSubmit}>Submit</button>
      <h1>Name: {currentState.userName}</h1>
      <h2>Age: {currentState.age}</h2>
      <button onClick={incrementHandler}>Increment age</button>
      <br />
      <input
        type="text"
        value={newTodo}
        onChange={todoHandler}
        placeholder="Enter the todo's"
      />
      <button onClick={submitTodo}>Submit</button>
      <table>
        <tbody>
          {currentState.todo.map((eachTodo, ind) => (
            <tr key={ind}>
              <td>{eachTodo}</td>
              <td>
                <input
                  type="text"
                  value={updatedTodo}
                  onChange={todoUpdateHandler}
                  placeholder="update the todo"
                />
              </td>
              <td>
                <button onClick={() => updateHandler(ind)}>update</button>
              </td>
              <td>
                <button onClick={() => deleteHandler(ind)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
