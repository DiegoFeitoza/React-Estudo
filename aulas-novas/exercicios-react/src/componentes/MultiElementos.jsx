import React from 'react'


// Solução 3
// Array de elementos html para serem exportados
// export default props => [
//     <h1>Parte 1</h1>,
//     <h2>Parte 2</h2>
// ]

// Solução 2 => Melhor na minha opinião
// Fragmentar partes html para exportar sem a necessidade de criar outro elemento <div>
export default props =>
    <React.Fragment>
        <h1>Parte 1</h1>
        <h2>Parte 2</h2>
    </React.Fragment>
    

// Solução 1
// Mais usada porém ele acrescenta mais uma div ao componente
// export default props =>
//     <div>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </div>