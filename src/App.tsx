import React from 'react';
import UserComponent from "./components/UserComponent/UserComponent";
import SimpsonComponent from "./components/SimpsonComponent/SimpsonComponent";
import RickAndMortyComponent from "./components/RickAndMortyComponent/RickAndMortyComponent";

const App = () => {
    return (
        <div>
            <UserComponent name={'Olia'} surname={'Tic'} age={25} status={true}/>
            <hr/>
            <SimpsonComponent
                character={'Bart Simpson'}
                quote={'Eat my shorts'}
                img={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}
            />
            <hr/>
            <RickAndMortyComponent
                name={'Rick Sanchez'}
                status={'Alive'}
                species={'Human'}
                gender={'Male'}
                img={'https://upload.wikimedia.org/wikipedia/en/a/a6/Rick_Sanchez.png'}
            />
            <div></div>
        </div>
    );
};

export default App;

