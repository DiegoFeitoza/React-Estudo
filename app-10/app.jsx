import React from 'react'
import ReactDom from 'react-dom'
import Familia from './familia'
import Parente from './parente'

ReactDom.render(
	<div className="jumbotron">
		<Familia sobrenome="Feitoza">
			<Parente nome="Diego" />
		</Familia>
	</div>
, document.getElementById('app'))