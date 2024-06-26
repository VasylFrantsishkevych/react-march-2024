import React, {FC} from 'react';

interface IProps {
    character: string;
    quote: string;
    img: string;
}

const SimpsonComponent: FC<IProps> = ({character, quote, img}) => {
    return (
        <div>
            <h1>{character}</h1>
            <p>{quote}</p>
            <img src={img} alt={character}/>
        </div>
    );
};

export default SimpsonComponent;