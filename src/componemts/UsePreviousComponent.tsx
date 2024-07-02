import React, {useState} from 'react';
import {usePrevious} from "../hooks/usePrevious";

const UsePreviousComponent = () => {
    const [count, setCount] = useState<number>(0)
    const prevCount = usePrevious(count);

    return (
        <div>
            <h3>Previous Hook</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>
                Now: {count}, before: {prevCount}
            </p>
        </div>
    );
};

export default UsePreviousComponent;