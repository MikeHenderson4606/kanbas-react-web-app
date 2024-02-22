import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { useSelector } from "react-redux";
import { LabState, TodoType } from "../../../store";

function TodoList() {
    const { todos } = useSelector((state: LabState) => state.todoReducer);


    return (
        <div>
        <h2>Todo List</h2>
        <ul className="list-group">
            <TodoForm />
            {todos.map((todo) => (
                <TodoItem
                    todo={todo} 
                    />
            ))}
        </ul>
        </div>
    );
}
export default TodoList;