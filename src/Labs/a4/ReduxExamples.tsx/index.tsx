import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux.tsx";
import AddRedux from "./AddRedux";
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
    return(
        <div className="border border-primary-subtle rounded">
            <h2>Redux Examples</h2>
            <HelloRedux />
            <CounterRedux />
            <AddRedux />
            <TodoList />
        </div>
    );
};

export default ReduxExamples;