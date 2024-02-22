import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import Nav from '../Nav';
import KanbasNavigation from './Navigation';
import Dashboard from './Dashboard';
import Courses from './Courses';

function Kanbas() {
    return (
        <div>
            <Nav />
            <div className="d-flex">
                <KanbasNavigation />
                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="Dashboard" element={<Dashboard />} />
                        <Route path="Courses/:courseId/*" element={<Courses />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Kanbas;