import 'bootstrap/dist/css/bootstrap.min.css'
import JavaScript from './JavaScript/JavaScript';
import PathParameters from './routing/PathParameters';
import Classes from './Classes';
import Styles from './Styles';
import ConditionalOutput from './ConditionalOutput';
import Add from './Add';
import TodoList from './todos/TodoList';

function Assignment3() {
    return (
        <div className='container-fluid'>
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