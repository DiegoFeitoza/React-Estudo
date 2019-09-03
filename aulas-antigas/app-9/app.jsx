import React from 'react'
import ReactDom from 'react-dom'
import Familia from './familia'
import Parente from './parente'

ReactDom.render(
	<div className="jumbotron">
		<Familia sobrenome="Feitoza">
			<Parente nome="Diego" sobrenome="Feitoza" />
			<Parente nome="Larissa" sobrenome="Feitoza" />
			<Parente nome="Danilo" sobrenome="Feitoza" />
			<Parente nome="Apolo" sobrenome="Feitoza" />
		</Familia>
	</div>
, document.getElementById('app'))