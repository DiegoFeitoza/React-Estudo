import React from 'react'
import Membro from './Membro'

export default props =>
    <React.Fragment>
        <Membro nome="Erika" sobrenome={props.sobrenome} />
        <Membro nome="Alexandre" sobrenome={props.sobrenome} />
        <Membro nome="Larissa" sobrenome={props.sobrenome} />
        <Membro nome="Luciana" sobrenome={props.sobrenome} />
        <Membro nome="Lorena" sobrenome={props.sobrenome} />
        <Membro nome="Danilo" sobrenome={props.sobrenome} />
    </React.Fragment>