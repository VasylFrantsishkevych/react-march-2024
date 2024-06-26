import React, {FC} from 'react';

interface IProps {
    name: string,
    surname: string,
    age: number,
    status: boolean,
}

const UserComponent: FC<IProps> = ({name, surname, age, status}) => {
    return (
        <div>
            <h2>{name} {surname}</h2>
            <p>Age: {age} - status: {true}</p>
        </div>
    );
};

export default UserComponent;