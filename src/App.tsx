import React from 'react';
import logo from './logo.svg';
import Labs from './Labs';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const someFunction = (b: number) => b*b;

  return (
    <>
      <h1>
        Labs
      </h1>
      <Labs />
      <h1>
        Kanbas
      </h1>
      <ul>
        <li>
          <a href='/Kanbas/Dashboard/screen.html'>
            Kanbas
          </a>
        </li>
      </ul>
    </>
  );
}

export default App;
