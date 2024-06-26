import React, {FC} from 'react';

interface IProps {
    name: string,
    status: string,
    species: string,
    gender: string,
    img: string,
}

const RickAndMortyComponent: FC<IProps> = ({name, species, img, gender, status}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <img src={img} alt={name}/>
        </div>
    );
};

export default RickAndMortyComponent;