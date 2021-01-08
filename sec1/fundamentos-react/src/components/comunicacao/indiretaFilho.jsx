import React from 'react'
import IndiretaFilho from './indiretaFilho';

export default props => {
    const cb = props.quandoClicar
    const min = 50
    const max = 70
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
    
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={_ =>cb('Laercio', gerarIdade(), false)} > 
            fornecer informações 
            </button>
        </div>
    )
}