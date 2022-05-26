import React, { useReducer } from "react";
import ToDoContext from "./todo-context";
import todoReducer from "./todo-reducer";
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./todo-actions";

function ToDoState(props) {
  const initialState = {
    todos: [],
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Add To DO fnction that rceives an actal to from the to do input
  const addTodo = (todo) => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };

  // Toggle To DO
  const toggleTodo = (todoID) => {
    dispatch({
      type: DELETE_TODO,
      payload: todoID,
    });
  };

  // Delete To Do
  const deleteTodo = (todoID) => {
    dispatch({
      type: TOGGLE_TODO,
      payload: todoID,
    });
  };

  return (
    <ToDoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        toggleTodo,
        deleteTodo,
      }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
}

export default ToDoState;
