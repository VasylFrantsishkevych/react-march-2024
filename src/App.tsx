import React from 'react';
import UsePreviousComponent from "./componemts/UsePreviousComponent";
import UseToggleComponent from "./componemts/UseToggleComponent";

const App = () => {

    return (
        <div>
            <UseToggleComponent/>
            <hr/>
            <UsePreviousComponent/>
        </div>
    );
};

export default App;

