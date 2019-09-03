
////////////////////////////////// Dicas///////////
    //Arrow sem chaves já tem retorno
    //Arrow com parenteses return incluso
    //Componente baseado em função => Esse arquivo
    //Componente baseado em classe

import React from 'react'

let teste = false

export default (props) => 
    <div>
        <h1>{props.titulo}</h1>
        <h3>{props.subTitulo}</h3>
        <hr/>
        <h4>{props.calc}</h4>
        <p>{`Teste de interpolação de textos ` + 2**2}</p>
        <p>{teste ? 'true' : 'false'}</p>
        <p>{`Teste de interpolação de textos ` + Math.random()}</p>
    </div>

////////////////////////////////// 3º
// export default () => 
//     <div>
//         <h1>Hello Word (Arrow)!</h1>
//     </div>


///////////////////////////////// 2º
    // export default function(){
    //     return <h1>Hello Word!</h1>
    // }

///////////////////////////////// 1º
    // function primeiro(){
        //     return <h1>Hello Word!</h1>
    // }

    // export default primeiro