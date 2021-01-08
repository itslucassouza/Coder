import { render } from '@testing-library/react';
import React from "react";

export default props => {
    const { min, max } = props;

    const aleatorio = 
    parseInt(Math.random() * (max - min)) + min;

    return(
        <div>
        <h2>O valor aleatorio</h2>
        <p>
            <strong>Valor minimo: {min} </strong>
        </p>
        <p>
            <strong>Valor maximo: {max} </strong>
        </p>
        <p>
            <strong>Valor escolhido: {aleatorio} </strong>
        </p>
    </div>
    );
}
