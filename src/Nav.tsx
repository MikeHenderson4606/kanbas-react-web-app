import {Link, useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {

  return (
    <ul className="nav">
      <li className="nav-item">
        <a href='../../Kanbas/Dashboard/screen.html' className="nav-link">
            Kanbas
        </a>
      </li>
      <li className="nav-item">
        <a href='../../labs/a2' className="nav-link">
            Lab 2
        </a>
      </li>
    </ul>
  ); 
}

export default Nav;