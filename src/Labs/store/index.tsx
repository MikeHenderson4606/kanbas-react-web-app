import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/ReduxExamples.tsx/HelloRedux/helloReducer";
import counterReducer from "../a4/ReduxExamples.tsx/CounterRedux.tsx/counterReducer";
import addReducer from "../a4/ReduxExamples.tsx/AddRedux/addReducer";
import todoReducer from "../a4/ReduxExamples.tsx/todos/todoReducer";

export type TodoType = {
    id: string,
    title: string
}

export interface LabState {
    helloReducer: {
        message: string;
    },
    counterReducer: {
        count: number;
    },
    addReducer: {
        sum: number;
    },
    todoReducer: {
        todos: TodoType[],
        todo: TodoType
    }
}
const store = configureStore({
    reducer: {
        helloReducer,
        counterReducer,
        addReducer,
        todoReducer
    },
});

export default store;