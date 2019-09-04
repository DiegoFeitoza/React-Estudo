import React from 'react'

export default props =>
    <div>        
        <h2>Familia {props.sobrenome}</h2>
        {props.children}
    </div>