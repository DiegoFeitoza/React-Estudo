import React from 'react'
import ReactDom from 'react-dom'

//É possivel renomear o componente importado com o as
import {CompA, CompB as B} from './componentes/DoisComponentes'



// import PrimeiroComponente from './componentes/PrimeiroComponente'

const elemento = document.getElementById('root')
const jsx = <h1>Hello Word</h1>
// ReactDom.render(Primeiro, elemento)
ReactDom.render(
        <div>
            {/* <PrimeiroComponente titulo="Hello word!" subTitulo="Testando sub" calc={3**2}/> */}
            <CompA valor="Hello, i'm A!"/>
            <B valor="Hello, i'm B!"/>
        </div>    
    , elemento)