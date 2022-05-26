import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput/TodoInput.js";
import TodoList from "./components/TodoList/TodoList.js";

import TodoState from "./components/context/ToDoState";

function App() {
  return (
    <div className="app">
      <div className="app__todoApp">
        <TodoState>
          <TodoInput />
          <TodoList />
        </TodoState>
      </div>
    </div>
  );
}

export default App;
