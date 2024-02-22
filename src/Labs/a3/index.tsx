import 'bootstrap/dist/css/bootstrap.min.css'
import JavaScript from './JavaScript/JavaScript';
import PathParameters from './routing/PathParameters';
import Classes from './Classes';
import Styles from './Styles';
import ConditionalOutput from './ConditionalOutput';
import Add from './Add';
import TodoList from './todos/TodoList';
import { useSelector } from "react-redux";
import { LabState } from "../store";

function Assignment3() {
    const { todos } = useSelector((state: LabState) => state.todoReducer);

    return (
        <div className='container-fluid'>
            <ul className="list-group">
                {todos.map((todo) => (
                <li className="list-group-item" key={todo.id}>
                    {todo.title}
                </li>
                ))}
            </ul>
            <TodoList />
            <ConditionalOutput />
            <Styles />
            <Classes />
            <PathParameters />
            <JavaScript />
            <Add a={3} b={4} />
        </div>
    );
}

export default Assignment3;