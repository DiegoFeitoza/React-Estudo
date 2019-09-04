import React from 'react'
import Filho from './Filho'

export default props => {
    const notificarSaidaDpFilho = lugar => alert(`Liberado para ir ${lugar}`)

    return (
        <div>
            <Filho notificarSaida={notificarSaidaDpFilho} />
        </div>
    )
}