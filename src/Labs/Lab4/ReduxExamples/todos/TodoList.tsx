import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
export default function TodoList() {
    const {todos} = useSelector((state:any) => state.todosReducer);
    return (
      <div className="container mt-3">
        <div className="row justify-content-center">
          <h2 className="mb-3 text-center fw-bold float-start">Todo List</h2>
          <div className="col-12 col-md-6">
            <ul className="list-group">
              <TodoForm/>
              {todos.map((todo:any) => (
                <TodoItem todo={todo}/>
              ))}
            </ul>
          </div>
          <hr/>
        </div>
      </div>
    );
  }