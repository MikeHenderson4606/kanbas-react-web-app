import React, { useState } from "react";

function EventObject() {
    const [event, setEvent] = useState(null);
    const [toggle, setToggle] = useState(true);
    const handleClick = (e: any) => {
        e.target = e.target.outerHTML;
        delete e.view;
        setEvent(e);
    };

    return (
        <div>
        <h2>Event Object</h2>
        <button id="event-button"
            onClick={(e) => {
                if (toggle) {
                    handleClick(e);
                } else {
                    setEvent(null);
                }
                setToggle(!toggle);
            }}
            className="btn btn-primary">
            Toggle Event Object
        </button>
        <pre>{JSON.stringify(event, null, 2)}</pre>
        </div>
    );
}

export default EventObject;