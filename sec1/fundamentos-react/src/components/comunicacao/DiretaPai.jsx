import React from 'react'
import DiretaFilho from './DiretaFilho';

export default props => {
    return(
        <div>
            <DiretaFilho
            nome="junior" 
            idade={20}
            nerd={true} />

    <DiretaFilho
            nome="lucas" 
            idade={22}
            nerd={false} />

        </div>
    )
}