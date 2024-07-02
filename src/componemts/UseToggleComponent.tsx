import React from 'react';
import {useToggle} from "../hooks/useToggle";

const UseToggleComponent = () => {
    const {value, toggle} = useToggle(true);

    return (
        <div>
            <h3>Toggle Hook</h3>
            <button onClick={toggle}>Toggle</button>
            <h4>{value.toString()}</h4>
        </div>
    );
};

export default UseToggleComponent;