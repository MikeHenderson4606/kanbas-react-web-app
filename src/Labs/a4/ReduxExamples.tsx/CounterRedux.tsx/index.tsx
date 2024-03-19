import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LabState } from "../../../store";
import { increment, decrement, decBy } from "./counterReducer";

function CounterRedux() {
    const [dec, setDec] = useState(0);
    const { count } = useSelector((state: LabState) => state.counterReducer);
    const dispatch = useDispatch();
    
    return (
        <div>
        <h2>Counter Redux</h2>
        <h3>{count}</h3>
        <button className="btn btn-primary" onClick={() => dispatch(increment())}> Increment </button>
        <button className="btn btn-danger" onClick={() => dispatch(decrement())}> Decrement </button> <br />
        <button className="btn btn-danger" onClick={() => 
            dispatch(decBy(dec))
            }> Submit </button>
        <label htmlFor="decByInput">Decrement By..</label>
        <input id='decByInput' onChange={(e) => setDec(Number(e.target.value))}/>
        </div>
    );
}
export default CounterRedux;