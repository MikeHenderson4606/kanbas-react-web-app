import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariables";

function Assignment4() {
    function hello() {
        alert("Hello, this function was called");
    }

    return (
        <div>
            <h2>Assignment 4</h2>
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={hello} />
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
        </div>
    );
}

export default Assignment4;