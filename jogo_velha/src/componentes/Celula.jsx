import { useState } from 'react';
import './Celula.css';

const Celula = ({valor, onClick}) => {
    return (
        <button className='celula' onClick={onClick}>
            {valor}
        </button>
    )
}

export default Celula;