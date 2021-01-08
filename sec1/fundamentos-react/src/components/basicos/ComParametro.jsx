import React from 'react';

export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    return(
        <div>
            <h1>Utilizando props!</h1>
            <h2>{props.situacao}</h2>

            <h3><strong>{props.nome}</strong> tem nota <strong>{props.nota} </strong></h3>
            <h1> {status} </h1>
        </div>
    );
}