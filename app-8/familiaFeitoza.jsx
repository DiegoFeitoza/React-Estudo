import React from 'react'
import Parente from './parente'

export default props => (
	<div className="container">
		<h1 class="display-4">Familia Feitoza</h1>
		<hr />
		<Parente nome="Diego" sobrenome="Feitoza"/>
		<Parente nome="Larissa" sobrenome="Feitoza"/>
		<Parente nome="Danilo" sobrenome="Feitoza"/>
		<Parente nome="Apolo" sobrenome="Feitoza"/>
	</div>
)