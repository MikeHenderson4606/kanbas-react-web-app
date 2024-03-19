import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = (something:any) => {
        setArray([...array, Math.floor(Math.random() * 100)]);
        something = 1;
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };
    return (
        <div>
        <h2>Array State Variable</h2>
        <button className="btn btn-primary" onClick={addElement}>Add Element</button>
        <ul className="list-group" style={{width: 350, padding: 10}}>
            {array.map((item, index) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                {item}
                <button className="btn btn-danger align-items-end" onClick={() => deleteElement(index)}>
                Delete</button>
            </li>
            ))}
        </ul>
        </div>
    );
}
export default ArrayStateVariable;