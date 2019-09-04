import React from 'react'
import ReactDom from 'react-dom'

import Familia from './componentes/Familia' 
import Membro from './componentes/Membro'
// import FamiliaFeitoza from './componentes/FamiliaFeitoza' 
// import FamiliaFreitas from './componentes/FamiliaFreitas' 

// import MultiElementos from './componentes/MultiElementos' 
// import {CompA, CompB as B} from './componentes/DoisComponentes'


//É possivel renomear o componente importado com o as novo_nome
// import {CompA, CompB as B} from './componentes/DoisComponentes'

// import PrimeiroComponente from './componentes/PrimeiroComponente'

const elemento = document.getElementById('root')

// const jsx = <h1>Hello Word</h1>
// ReactDom.render(Primeiro, elemento)
ReactDom.render(
        <div>
            {/* <PrimeiroComponente titulo="Hello word!" subTitulo="Testando sub" calc={3**2}/> */}
            {/* <CompA valor="Hello, i'm A!"/>
            <B valor="Hello, i'm B!"/> */}

            {/* {<MultiElementos />} */}
            {/* {<h2>Familia Feitoza</h2>} */}
            {/* // {<FamiliaFeitoza />} */}
            <br/>
            <br/>
            {/* <h2>Familia Freitas</h2> */}
            {/* Comunicação direta */}
            {/* <FamiliaFreitas sobrenome="Freitas cara de pêra"/> */}
            <Familia sobrenome="Feitozaaaaaaaaa">
                <Membro nome="Diego" />
                <Membro nome="Larissa" />
                <Membro nome="Danilo" />
            </Familia>
        </div>    
    , elemento)