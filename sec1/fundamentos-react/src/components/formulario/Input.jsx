import './Input.css'
import React, { useState } from 'react';


export default props => {

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return(
        <div className="input">
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>   
            <input value={valor} onChange={quandoMudar}></input>
            <input value={valor} readOnly ></input>
            <input value={undefined}></input>
        </div>
    </div>
    )
}