import React, { useState, useEffect } from 'react'
// Esse capitulo foi realizado para testar o React Hook
// Ver a documentação em https://pt-br.reactjs.org/docs/hooks-intro.html

export default props => {
    // Utilizando desestruturação para trabalhar com estado dentro de um componente funcional
    // o useState cria uma variavel que simula um state dos componentes baseados em classe
    // o useState recebe como parametro o primeiro estado da sua variavel
    const [contador, setContador] = useState(100)
    const [parOuImpar, setParOuImpar] = useState('Par')

    useEffect(() => {
        contador % 2 === 0 ? setParOuImpar('Par') : setParOuImpar('Ímpar')
    })

    return (
        <div>
            <h1>{contador} | ({parOuImpar})</h1>
            <button onClick={() => setContador(contador + 1)}>Innc</button>
        </div>
    )
}