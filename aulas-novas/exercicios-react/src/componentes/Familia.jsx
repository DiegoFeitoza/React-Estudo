import React from 'react'
import { filhosComProps } from '../utils/utils'

export default props =>
    <div>        
        <h2>Familia {props.sobrenome}</h2>
        {/* Chamando a partir de uma função */}
        { filhosComProps(props)  }
        {/* Para a leitura de todos os filhos do componente pai
            é necessário ler um map para que os filhos venham por um array
         */}
        {/* {React.Children.map(props.children, child => {
            return React.cloneElement(child, { ...props })
        })} */}
        {/* Passando todos os props com o metodo spread para os componentes filhos do componente principal */}
        {/* {React.cloneElement(props.children, { ...props })} */}
        {/* Passando somente um valor */}
        {/* {React.cloneElement(props.children, 
                                {sobrenome: props.sobrenome})} */}
        {/* {props.children} */}
    </div>