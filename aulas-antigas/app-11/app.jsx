import React from 'react'
import ReactDom from 'react-dom'
import Familia from './familia'
import Parente from './parente'

ReactDom.render(
	<div className="jumbotron">
		<Familia sobrenome="Freitas Feitoza">
			<Parente nome="Diego" />
			<Parente nome="Larissa" />
			<Parente nome="Danilo" />
			<Parente nome="Apolo" />
		</Familia>
	</div>
, document.getElementById('app'))