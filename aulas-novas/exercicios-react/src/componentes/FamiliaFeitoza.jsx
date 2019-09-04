import React from 'react'
import Membro from './Membro'

export default props =>
    <div>
        <Membro nome="Diego" sobrenome="{props.sobrenome}" />
        <Membro nome="Larissa" sobrenome="{props.sobrenome}" />
        <Membro nome="Danilo" sobrenome="{props.sobrenome}" />
    </div>