import React, { useState, useRef, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = function(s1, s2) {
    return [...s1].map(function(e, index) {
        return `${e}${s2[index] || ""} `
    }).join("")

}
const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(function() {
        count.current = count.current + 1
        myInput2.current.focus()
    }, [value1])

    useEffect(function() {
        count.current++
        myInput1.current.focus()
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável coxm a propriedade .current!"
            />

            <SectionTitle title="exercicio 01" />
            <div className="center">  
            <div>
            <span className="text">Valor: </span>
            <span className="text">{merge(value1, value2)} [</span>
            <span className="text red">{count.current}</span>
            <span className="text red">]</span>

            </div>  
            <input type="text"  className="input" value={value1} 
            ref={myInput1}
             onChange={e => setValue1(e.target.value)} />
            </div>

            <SectionTitle title="exercicio 02" />
                <div className="center">
                    <input type="text" className="input" value={value2}
                    ref={myInput2}
                    onChange={e => setValue2(e.target.value)}
                    />
                </div>
   
        </div>
    )
}

export default UseRef
