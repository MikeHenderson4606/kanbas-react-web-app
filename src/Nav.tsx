import {Link, useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  const { pathname } = useLocation();
  const assignmentNames = [
    "a3", "a4", "a5", "a6"
  ]
  const inAssignments = assignmentNames.map((assignment) => {
    return (pathname.includes(assignment));
  })
  

  return (
    <nav className="nav nav-tabs mt-2">
      <Link to="/Labs/a3"
            className={`nav-link ${inAssignments ? "active" : ""}`}>Assignments</Link>
      <Link to="/Kanbas"
            className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}>Kanbas</Link>
      <Link to="/hello"
            className={`nav-link ${pathname.includes("hello") ? "active" : ""}`}>Hello</Link>
    </nav>
  ); 
}

export default Nav;