import {Routes, Route, Link} from 'react-router-dom';
import Assignment3 from './a3'
import Nav from '../Nav';

function Labs() {

    const updatedLabs = [
        <Assignment3 />
    ];

    return (
    <div>
        <Nav />
        <Link to="/Labs/a3">Assignment 3</Link> |
        <Link to="/Labs/a4">Assignment 4</Link>
        <Routes>
            <Route path="/a3/*" element={<Assignment3 />} />
            <Route path="/a4" element={<div><h1>Assignment 4</h1></div>} />
        </Routes>
    </div>
    );
}

export default Labs;