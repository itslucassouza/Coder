import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'


function calFatorial(num) {
    const n = parseInt(num)
    if(n <  0) return -1
    if (n === 0) return 1
    return calFatorial(n - 1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1); 
    const [fatorial, setFatorial] = useState(1);

    useEffect(function() {
        setFatorial(calFatorial(number))
    }, [number])

    useEffect(function() {
        if(fatorial > 10000){
            document.title = "eitaa"
        }
    }, [fatorial])

  const [status, setStatus] = useState("impar")
    useEffect(function() {
        setStatus(number % 2 === 0 ? "par" : "impar")
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <sectionTitle title="exercicio 01" />

        <div className="center">
            <div>
            <span className="text">Fatorial: </span>
            <span className="text red">{fatorial} </span>
            </div>
            <input type="number" className="input" value={number} 
            onChange={e => setNumber(e.target.value) }/>
        </div>

        <sectionTitle title="exercicio 02" />  
        <span className="text">status: </span>
        <span className="text red ">{status}</span>
        </div>
        
    )
}

export default UseEffect
